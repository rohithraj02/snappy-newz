import React, { useState, useEffect, createContext, useReducer } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar.js";
import AppRouter from './AppRouter';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar1 from './Components/Navbar.js';


const App = () => {
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);
  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (res.status === 200) {
        setauth(true)
        setauth1(false)
      }
      if (res.status === 401) {
        setauth(false)
        setauth1(true)
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <div className='maincontent'>
      <Navbar1 auth={auth} />
      <div>
        <div className='content'>
          <AppRouter />
        </div>
      </div>
    </div>
  )
}

export default App;