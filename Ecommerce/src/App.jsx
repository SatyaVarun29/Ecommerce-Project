import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'

import Orders from './Pages/Orders'
import PlaceOrder from './Pages/PlaceOrder'
import Login from './Pages/Login'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Searchbar from './Components/Searchbar'
import {ToastContainer,toast} from 'react-toastify'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <Searchbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/collection' element={<Collection/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/product/:productId' element={<Product/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/Orders' element={<Orders/>}/>
       <Route path='/place-orders' element={<PlaceOrder/>}/>

      </Routes>
       <Footer/>



    </div>
  )
}

export default App