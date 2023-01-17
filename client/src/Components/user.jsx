import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.js";
import AppRouter from '../AppRouter';
import '../App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Login from './Components/login.js';
// import { Route,Switch } from 'react-router-dom';
// import logi from './Components/logi.js';
// import Navbarlog from './Components/Navbarlog.jsx';

export default function User() {
    return (

        <div>
        <h1>hello</h1>
            {/* <Login />S */}
            <Navbar />
            {/* <Navbarlog></Navbarlog> */}
            {/* <Switch>
        <Route exact path="/login" component={logi}></Route>
    </Switch> */}
            <div className='content'>
                <div className='head'>
                    <center>
                        <br></br>
                        <div>
                            <h1>Get Informed</h1>
                            <h1>Get Inspired</h1>
                        </div>
                        <hr></hr>
                        <h3>Stories Curated For You</h3>
                    </center>
                </div>
                <AppRouter />
            </div>
        </div>

    )
}
