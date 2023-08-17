import { createContext, useState } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";



  export const AuthContext = createContext();
 
  

  export default function AuthProvider( {children}){
    //    const [number, setNumber] = useState(10);

       const [isAuthenticated, setAuthenticated] = useState(false)
       const [username, setUsername] = useState(null)

       const [token, setToken] = useState(null)

       function logout(){
        setAuthenticated(false);
        setToken(null)
        setUsername(null)
       }


    //    
    
    async function login(username, password){
    try{
       const response = await executeJwtAuthenticationService(username, password)
      

        if(response.status==200){
            const jwtToken = 'Bearer ' + response.data.token
            setAuthenticated(true)
            setUsername(username)
            setToken(jwtToken)

           apiClient.interceptors.request.use(
            (config) => {
                console.log("intercepting and adding token")
                config.headers.Authorization = jwtToken

                return config
            }
           )
            
            return true
        }
        else{
           logout()
            return false;
        }
    } catch(error) {
       logout()
        return false;
    }
       }


    //    function login(username, password){
    //     if(username === "in28minutes" && password === "123"){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     }
    //     else{
    //         setAuthenticated(false)
    //         setUsername(null)
           
    //         return false;
    //     }
    //    }

    return(
        <>
            <AuthContext.Provider value = { {username, isAuthenticated, logout, login, token} }>
                {children}
            </AuthContext.Provider>

        </>
    )
  }