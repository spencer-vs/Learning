import { useState } from 'react'
import { AuthProvider } from './AuthContext'
import Login from './componets/Login'
import Dashboard from './componets/Dashboard'
import Animations from './componets/Animations'
import Home from "./componets/Home"
import SignUp from './componets/SignUp'
import SignIn from './componets/SignIn'
import Intro from './componets/Intro'
import {
  BrowserRouter, 
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  

  return (
    <>
      <AuthProvider>
        
       <BrowserRouter>
        
         {/* <Link to="/login">Login</Link>
         <Link to="/dashboard">Dashboard</Link>  */}
        <Routes>
           <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/animations" element={<Animations />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/intro" element={<Intro />} />
        </Routes>
        
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
