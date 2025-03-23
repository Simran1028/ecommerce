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
import AddProduct from './pages/admin/page/AddProduct'
import UpdateProduct from './pages/admin/page/UpdateProduct'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>} />
          <Route path="/order" element={
            <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>
          } />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/addproduct' element={<ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>} />
          <Route path='/updateproduct' element={<ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>} />
          <Route path='/product/:id' element={<ProductInfo />} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </MyState>
  )
}

export default App


export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'simran@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}