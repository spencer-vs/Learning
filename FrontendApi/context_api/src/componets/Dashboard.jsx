import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../AuthContext'
import { Navigate, 
  BrowserRouter, 
  Routes,
  Route,
  Link,
  NavLink,
useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';

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
      <NavLink to="/animations" className={styles.navLink}>Animations</NavLink>
    </div>
  )
}

export default Dashboard