import React , {useState, useEffect} from 'react'
// import NewsList from './Components/NewsList';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar.js";
import AppRouter from './AppRouter';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from './Components/login.js';

const App= () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
      fetch("http://localhost:8080/message")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);
    console.log(message)
    return(
        <div>
            {/* <Login /> */}
            <Navbar />
            <div className='content'>
                <div className='head'>
                <center>
                    <br></br>
            <h1>Get Informed</h1>
            <h1>Get Inspired</h1>
            <hr></hr>
            <h3>Stories Curated For You</h3>
            </center>
            </div>
            <AppRouter />
            </div>
        </div>
    )
}

export default App;