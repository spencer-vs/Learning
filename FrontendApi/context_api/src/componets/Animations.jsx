import React from 'react'
import styles from "./Animations.module.css"
import header_1 from "../assets/img/header_1.png"
import header_2 from "../assets/img/header_2.png"
import create from "../assets/img/create.png"
import footer from "../assets/img/footer.png"
import home from "../assets/img/home.png"
import login from "../assets/img/login.png"
import signup from "../assets/img/signup.png"
import update from "../assets/img/update.png"
import logo from "../assets/img/logo.png"
import contact from "../assets/img/contact.png"

import { NavLink } from "react-router-dom";


const Animations = () => {
  return (
    <div className={styles.container}>
        
       
       



    <div className={styles.logo}>
      <img src={logo} alt="Logo" className={styles.logoImg} />
    </div>

    
     <div className={styles.scene}>
      
       <div className={styles.card}>
        <div className={`${styles.card_face} ${styles.front}`}>Welcome to SmartNotes where note taking brings joy</div>
        <div className={`${styles.card_face} ${styles.back}`}>Create, update and share notes with ease</div>
        
      </div>
     </div>



     <div className={styles.user}>
      <div className={styles.userCard}>
       
       <div className={`${styles.user_face} ${styles.user_signup}`}>
        <NavLink to="/signup" className={styles.navLink}>Sign Up</NavLink>
       </div>
       
      
      </div>
       
      
      <div className={styles.userCard2}>
       <div className={`${styles.user_face} ${styles.user_signin}`}>
         <NavLink to="/signin" className={styles.navLink}>Sign In</NavLink>
       </div>
        
    
      </div>
      </div>


    </div>
  )
}

export default Animations