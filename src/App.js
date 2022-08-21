
import './App.css';
import {BrowserRouter,Routes,Route,useNavigate, Navigate} from 'react-router-dom'
import Button from './button';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Help from './Help'
import { useState } from 'react';
import Hooks from './Hooks';
function App() {
  const[isLoggedIn,setLoggedIn]=useState(true)
  return (
    <div className="App">
      <h1>NavBar</h1>
      <BrowserRouter>
      <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={isLoggedIn?<About/>:<Navigate to={'/'}/>}/>
  <Route path='/Help' element={isLoggedIn?<Help/>:<Navigate to={'/'}/>}/>
  <Route Path='*' element={<h1>404 NOT FOUND</h1>}/>
</Routes>
<Button/>
      </BrowserRouter>
      <p>logIn value:{String(isLoggedIn)}</p>
      <button onClick={()=>setLoggedIn(!isLoggedIn)}>{isLoggedIn ? "logout" : "login"}</button>
      <Hooks/>
    </div>
  );
}
//steps for using router:
  //1.install react router by writing npm i react-router-dom
  //2.import BrowserRouter,Routes,Route from react-router-dom.
//3.make browserRouter tag inside div element and pass the routes inside browser router as in line 9.
//4.pass route tag inside routes as in line 10.
//5.pass path and element attribute inside route as in line 11.NOTE:only elements to be navigated should be passed inside browserrouter.
//To pass useNavigate hook,place it inside seperate component and pass that component in browserrouter as in line 14.
export default App;


//Handling Errors:
//1.Give route path to '*' and give 404 error to element.


//Building the component in which we can navigate to help and about page only if logged in.
//1.use ternary operator with condition in element with element={isLoggedIn?<About/>:<Navigate to={'/'} in 
//both about and help.