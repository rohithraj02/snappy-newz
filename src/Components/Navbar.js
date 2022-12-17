import React from "react";
import './Navbar.css'
import { FaSearch } from "react-icons/fa"
const Navbar = () => {
    const querySearch=''
  return (
    <nav className="nav">
        <a href="/" className="site-title">Snappy</a>
        <ul>
            <li>
            <input id='query' type="text" placeholder="Search.."/>
            <button type="submit"><FaSearch/></button>
            </li>
            {/* <li><button type="submit"><FaSearch/></button></li> */}
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
                <a href="/Entertainment">Entertainment</a>    
            </li>
            <li>
                <a href="/business">Business</a>    
            </li>
        </ul>
    </nav>
)}

export default Navbar;
