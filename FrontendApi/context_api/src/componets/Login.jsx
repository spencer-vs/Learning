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
    <div>
     <h2>Login</h2>

     <form onSubmit={handleSubmit}>
       <input 
       type="text"
       placeholder='Username'
       value={username}
       onChange={(e) => setUsername(e.target.value)}
       />


       <input 
       type="password"
       placeholder='Passworc'
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       />

       <button type='submit'>Login</button>
     </form>
    </div>
  )
}

export default Login