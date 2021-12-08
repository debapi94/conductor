  import React, { useContext, useState } from "react";
  import { useHistory } from "react-router";
  import { Auth0Client } from '@auth0/auth0-spa-js';
  import { getConfig } from './configs/auth0-config';
  
  const AuthContext = React.createContext();
  
  export function useAuth() {
    return useContext(AuthContext);
  }

  function getAuth(){
    return new Auth0Client(getConfig());
  }
  
  export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const history = useHistory();
  
    const auth = getAuth();
    console.log(auth);
    
    auth.isAuthenticated().then(result => {
        console.log(result);
        if(result){
            auth.handleRedirectCallback().then(async redirectResult => {

                const user = await auth.getUser();
                console.log(user);
            setCurrentUser(user);
            });
            //logged in. you can get the user profile like this:
        }
        else{
            setCurrentUser(null);
        }
    }).catch(err => setCurrentUser(null));
    
    
    const login = (e) => {
        auth.loginWithRedirect().then(result => console.log(result));
    }
  
    const logOut = async (e) => {
        await auth.logout();
    };
  
    const value = { currentUser, login, logOut };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }
  