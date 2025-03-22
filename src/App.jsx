import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Dashboard from './pages/admin/dashboard/Dashboard'
import Order from './pages/order/Order'
import NoPage from './pages/nopage/NoPage'
import Cart from './pages/cart/Cart'
import MyState from './context/data/myState'
import Login from './pages/registration/Login'
import SignUp from './pages/registration/SignUp'
import ProductInfo from './pages/productinfo/ProductInfo'

const App = () => {
  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/order' element={<Order />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/product/:id' element={<ProductInfo />} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </MyState>
  )
}

export default App
