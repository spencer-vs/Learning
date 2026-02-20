import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
   const [ user, setUser ] = useState(null);
   const [ loading, setLoading] = useState(true)
  
   
   useEffect(() => {
      const token = localStorage.getItem("token");

      if (token) {
         fetch ("http://127.0.0.1:8000/api/profile/", {
             headers: {
               "Authorization": `Bearer ${token}`
             }
         })
         .then(res => res.json())
         .then (data => setUser(data))
         .finally(() => setLoading(false));
      } else {
         setLoading(false)
      }
   }, [])
   


   const login = async (username, password) => {
        try {
           const response = await fetch('http://127.0.0.1:8000/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
           })


           if(!response.ok) {
            throw new Error('Login failed');
           }

           const data = await response.json();

           
           if (data.access) {
            localStorage.setItem('token', data.access);

            // Fetch User Details
           const userResponse = await fetch("http://127.0.0.1:8000/api/profile/", {
            method: "GET", 
            headers: {
               "Content-Type": "application/json",
               "Authorization": `Bearer ${data.access}`
            },
            
           });

           if (!userResponse.ok) {
            throw new Error('Failed to fetch user details');
           }

           const userData = await userResponse.json();

           //console.log("User from backend:", userData)

           setUser(userData)
           return true;
           

         } 
         return false;
        
   }
      catch (error) {
            console.log('Login Failed', error);
            return false
         }

      }



      const logout = async () => {
      localStorage.removeItem('token');
      setUser(null);
   }




   return (
    

    <AuthContext.Provider value={{ user, login, setUser, logout, loading }}>
       {children}
    </AuthContext.Provider>
   )
}