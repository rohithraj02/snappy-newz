import React from "react";
import './Navbar.css'
// import MyForm from './searchbar'
// import MyForm from "./searchbar";
const Navbarlog = () => {
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
)}

export default Navbarlog;
