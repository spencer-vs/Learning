import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../AuthContext'
import { Navigate, 
  BrowserRouter, 
  Routes,
  Route,
  Link,
useNavigate } from 'react-router-dom';

const Dashboard = () => {
  
   const {user, logout, loading} = useContext(AuthContext);
   const navigate = useNavigate();

   const handleLogout = () => {
    logout();
    navigate("/login")
  };

   if (loading) {
    return <div>Loading...</div>;
   }

   if (!user) {
    return <Navigate to="/login" replace/>
   }
  
  
  
  return (
    <div>
      <h2>Dashboard</h2>

      {user && <p>Welcome, {user.username}!</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard