import React from 'react'
import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom"
import NewsList from './Components/NewsList'
import Login from './Components/login'
import SearchNews from './Components/searchNews'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Navigate to="/general" />} />
            <Route path="/lg" element={<Login />} />
            <Route path="/general" element={<NewsList qr='general'/> } />
            <Route path="/sports" element={<NewsList qr='sports'/> } />
            <Route path="/science" element={<NewsList qr='science'/> } />
            <Route path="/technology" element={<NewsList qr='technology'/> } />
            <Route path="/entertainment" element={<NewsList qr='entertainment'/> } />
            <Route path="/business" element={<NewsList qr='business'/> } />
            <Route path="/search" element={<SearchNews qr='bangalore' />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
