import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SingIn from './pages/SingIn'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/sign-in' element={<SingIn></SingIn>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/Projects' element={<Projects></Projects>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}
