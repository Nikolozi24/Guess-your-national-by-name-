import {useState} from "react"
import {Row, Col , Button} from 'react-bootstrap'
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
    await  fetch(`http://localhost:5000/api/v1/users/${userinfo.username}`).then(res=>res.json()).then(data=>setUsers(data)).catch(err=>{
  if(err?.response?.status===404)
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
    <div className="App" style={{padding:"20px ", width:"50%", margin:" 120px auto" , boxShadow:"0px 0px 20px 2px grey"}}>
          <h1>Login</h1>
          <Row xs="3">
<Col></Col>
          <input name="username" value={userinfo.username}  onChange={(e)=>{handleChange(e)}} ></input><br/>
<Col></Col>
          </Row> 
          <Row  xs={3}>
            <Col></Col>
          <input  style={{margin:"20px 0px"}} name= "password" value={userinfo.password} onChange={(e)=>{handleChange(e)}}></input><br/>
            <Col></Col>
          </Row>
          <Button  onClick={handleSubmit}>შესვლა</Button>
    </div>
  );
}

export default Login;
