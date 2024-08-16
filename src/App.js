import './App.css';
import Login from './Components/Pages/Login';
import {Routes , Route} from 'react-router-dom'
import Main from './Components/Pages/Main';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/Login" element ={<Login/>}></Route>
          <Route path="/" element ={<Main/>}></Route>
 

        </Routes>
    </div>
  );
}

export default App;
