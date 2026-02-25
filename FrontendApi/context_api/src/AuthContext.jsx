import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
   const [ user, setUser ] = useState(null);
   const [ loading, setLoading] = useState(true)
  
   
   useEffect(() => {
      const token = localStorage.getItem("token");
      console.log('Checking for existing token on app load:', token ? 'Token found' : 'No token');

      if (token) {
         console.log('Fetching user profile with existing token');
         fetch ("http://127.0.0.1:8000/api/profile/", {
             headers: {
               "Authorization": `Bearer ${token}`
             }
         })
         .then(res => {
            console.log('Profile fetch on load response status:', res.status);
            return res.json();
         })
         .then (data => {
            console.log('User data on load:', data);
            setUser(data);
         })
         .catch(error => {
            console.log('Error fetching profile on load:', error);
            localStorage.removeItem('token'); // Clear invalid token
         })
         .finally(() => setLoading(false));
      } else {
         setLoading(false)
      }
   }, [])
   


   const login = async (username, password) => {
        try {
           console.log('Attempting login with username:', username);
           const response = await fetch('http://127.0.0.1:8000/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
           })

           console.log('Login fetch response status:', response.status, 'ok:', response.ok);

           if(!response.ok) {
            throw new Error('Login failed');
           }

           const data = await response.json();
           console.log('Login response data:', data);

           
           if (data.access) {
            console.log('Access token received, storing in localStorage');
            localStorage.setItem('token', data.access);

            // Fetch User Details
           console.log('Fetching user profile with token');
           const userResponse = await fetch("http://127.0.0.1:8000/api/profile/", {
            method: "GET", 
            headers: {
               "Content-Type": "application/json",
               "Authorization": `Bearer ${data.access}`
            },
            
           });

           console.log('Profile fetch response status:', userResponse.status, 'ok:', userResponse.ok);

           if (!userResponse.ok) {
            throw new Error('Failed to fetch user details');
           }

           const userData = await userResponse.json();
           console.log('User data received:', userData);

           setUser(userData)
           return true;
           

         } else {
            console.log('No access token in response data');
            return false;
         }
        
   }
      catch (error) {
            console.log('Login Failed with error:', error);
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