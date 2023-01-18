import React, { useState,useContext } from 'react'
import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom"
import NewsList from './Components/NewsList'
import SearchNews from './Components/searchNews'
import Logi from './Components/logi'
import Register from './Components/Register'
import Logout from './Components/Logout'
import MyForm from './Components/searchbar'
const AppRouter = () => {
  const [auth,setauth]=useState(false);
  const [auth1,setauth1]=useState(true);
  const isLoggedIn=async()=>{
    try{
      const res=await fetch('/auth',{
        method : 'GET',
        headers : {
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials : "include"
      });
      if(res.status===200){
        setauth(true)
        setauth1(false)
      }
      if(res.status===401){
        setauth(false)
        setauth1(true)
      }
    }
    catch(error){
           console.log(error)
    }
  }


  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Navigate to="/general" />} /> 
           {/* <Route path="/User" element={<User/>}/> */}
            {/* <Route path="/lg" element={<Login />} /> */}
            <Route path="/login" element={<Logi />} auth={true} />
            <Route path="/logout" element={<Logout />} auth={auth1} />
            {/* <ProtectedRoute path="/login" element={<Logi/>} auth={false}/> */}
            <Route path="/Register" element={<Register />} auth={auth1} />
            <Route path="/general" element={<NewsList qr='general'/> }  />
            <Route path="/sports" element={<NewsList qr='sports'/> } />
            <Route path="/science" element={<NewsList qr='science'/> } />
            <Route path="/technology" element={<NewsList qr='technology'/> } />
            <Route path="/entertainment" element={<NewsList qr='entertainment'/> } />
            <Route path="/business" element={<NewsList qr='business'/> } />
            <Route path="/search" element={<MyForm />}/>
            {/* {/* <Route path="/login1" component={login1}/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
