import React , {useState, useEffect,createContext,useReducer} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar.js";
import AppRouter from './AppRouter';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from './Components/login.js';
// import { Route,Switch } from 'react-router-dom';
import logi from './Components/logi.js';
import Navbarlog from './Components/Navbarlog.jsx';
import User from './Components/user.jsx';
import { initialState,reducer } from './reducer/UserReducer.js';
export const UserContext=createContext();

const App= () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    // useEffect(() => {
    //   fetch("http://localhost:8080/message")
    //     .then((res) => res.json())
    //     .then((data) => setMessage(data.message));
    // }, []);
    // console.log(message)
    return(
        <div>
        <UserContext.Provider value={{state,dispatch}}>
            <Navbar/>


        <div>
            {/* <Login />S */}
            {/* <h1>{process.env.isLoggedIn}</h1> */}
            {/* <Navbarlog></Navbarlog> */}
            {/* <User/> */}
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
        </UserContext.Provider>
        </div>
    )
}

export default App;