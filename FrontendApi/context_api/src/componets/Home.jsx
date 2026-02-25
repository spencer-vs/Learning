import React from 'react'
import { Navigate, NavLink } from 'react-router-dom';
import styles from './Home.module.css';



const Home = () => {
  return (
    <div>
        <NavLink to="/login" className={styles.navLink}>Login</NavLink>
        
        
    </div>
  )
}

export default Home