import React from 'react'
import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom"
import NewsList from './Components/NewsList'
import Login from './Components/login'
import SearchNews from './Components/searchNews'
import Logi from './Components/logi'
import Register from './Components/Register'
import User from './Components/user'
import Logout from './Components/Logout'
// import login1 from './Components/login1';
// import
const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Navigate to="/general" />} />
           <Route path="/User" element={<User/>}/>
            <Route path="/lg" element={<Login />} />
            <Route path="/login" element={<Logi />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/general" element={<NewsList qr='general'/> } />
            <Route path="/sports" element={<NewsList qr='sports'/> } />
            <Route path="/science" element={<NewsList qr='science'/> } />
            <Route path="/technology" element={<NewsList qr='technology'/> } />
            <Route path="/entertainment" element={<NewsList qr='entertainment'/> } />
            <Route path="/business" element={<NewsList qr='business'/> } />
            <Route path="/search" element={<SearchNews qr='bangalore' />}/>
            {/* <Route path="/login1" component={login1}/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
