import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/Home"
import Products from "../pages/Products"
import Contact from "../pages/Contact"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter;