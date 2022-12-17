import React from 'react';
// import NewsList from './Components/NewsList';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar.js";
import AppRouter from './AppRouter';
import './App.css';

const App= () => {
    return(
        <div>
            {/* <center><h1>Snappy Newz</h1></center> */}
            <Navbar />
            {/* <NewsList qr='Fifa'/> */}
            <AppRouter />
        </div>
    )
}

export default App;