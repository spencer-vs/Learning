import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../AuthContext'
import {
  BrowserRouter, 
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import styles from "./Login.module.css"

const Login = () => {
  const navigate = useNavigate();
  const { login, user, loading } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
     e.preventDefault();
     const success = await login(username, password);
     if (success) {
      navigate("/dashboard");
      console.log("success")
     } else {
      console.log("Fail")
     } //Uni1234sim
  }

  



  useEffect(() => {
    if (user) {
      console.log("User Data:", user)
    }
  }, [user])

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [loading, user, navigate])


  if (loading) {
    return <div>Loading...</div>;
  }
  
  
  return (
    
    <div >
     
    <div className={styles.loginCon}> 
     <form onSubmit={handleSubmit} className={styles.form}>
       <input 
       type="text"
       placeholder='Username'
       value={username}
       onChange={(e) => setUsername(e.target.value)}
       className={styles.nameForm}
       />


       <input 
       type="password"
       placeholder='Passworc'
       value={password}
       onChange={(e) => setPassword(e.target.value)}
        className={styles.passwordForm}
       />

       <button type='submit'>Login</button>
     </form>
     </div>
    </div>
  )
}

export default Login