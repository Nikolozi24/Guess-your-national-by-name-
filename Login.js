import {useState} from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate();
const [userinfo , setUserInfo] = useState({username:"", password:""})
const [users , setUsers] = useState([])

const handleChange =  (e)=>{
  const {name , value} = e.target;
  setUserInfo(prev=>({...prev, [name]:value}))

}
const handleSubmit = ()=>{
    const fun = async ()=>{
    await  axios.get(`http://localhost:5000/api/v1/users/${userinfo.username}`).then(res=>res.data).then(data =>setUsers(data)).catch(err=>{
  if(err.response.status===404)
    {
    alert(`this user don't exist`)
  }
 });
 
 const user = users?.[0];
 if(user==[]){
     alert(`this user don't exist`)
    }
    if(user?.username === userinfo?.username && user?.password === userinfo?.password){
        navigate('/')
    }
    else{
        alert('wrong password');
    } 
}
fun();
}
  return (
    <div className="App">
          <h1>Login</h1>
          <input name="username" value={userinfo.username}  onChange={(e)=>{handleChange(e)}} ></input><br/>
          <input name= "password" value={userinfo.password} onChange={(e)=>{handleChange(e)}}></input><br/>
          <button onClick={handleSubmit}>შესვლა</button>
    </div>
  );
}

export default Login;
