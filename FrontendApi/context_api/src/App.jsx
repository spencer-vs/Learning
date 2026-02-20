import { useState } from 'react'
import { AuthProvider } from './AuthContext'
import Login from './componets/Login'
import Dashboard from './componets/Dashboard'
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
        
         <Link to="/login">Login</Link>
         <Link to="/dashboard">Dashboard</Link>
        
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
