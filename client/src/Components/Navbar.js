import React,{useContext}from "react";
import './Navbar.css'
// import MyForm from './searchbar'
import MyForm from "./searchbar";
import { UserContext } from '../App';
const Navbar = (props) => {
const {state,dispatch}=useContext(UserContext);
//   const isLoggedIn=props.isLoggedIn;
  if(state)
  {
return(    <nav className="nav">
<a href="/" className="site-title">Snappy</a>
<ul>
    <li>
    <MyForm />
    </li>
    <li>
        <a href="/General">General</a>    
    </li>
    <li>
        <a href="/Sports">Sports</a>    
    </li>
    <li>
        <a href="/Technology">Technology</a>    
    </li>
    <li>
        <a href="/Science">Science</a>    
    </li>
    <li>
        <a href="/Entertainment">Entertainment</a>    
    </li>
    <li>
        <a href="/business">Business</a>    
    </li>
    <li>
            <a href="/logout">LOGOUT</a>
     </li>
</ul>
</nav>)
  }
//   else
//   {
//     return(
//         <nav className="nav">
//         <a href="/" className="site-title">Snappy</a>
//         <ul>
//           <li>
//             <a href="/login">LOGIN</a>
//           </li>
//           <li>
//             <a href="/Register">REGISTER</a>
//           </li>
//         </ul>
//     </nav>
//     )
//   }
  return (
    <nav className="nav">
        <a href="/" className="site-title">Snappy</a>
        <ul>
          <li>
            <a href="/login">LOGIN</a>
          </li>
          <li>
            <a href="/Register">REGISTER</a>
          </li>
        </ul>
    </nav>
)
}

export default Navbar;
