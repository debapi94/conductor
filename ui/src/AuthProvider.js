
import AuthFirebaseProvider, * as authfirebase from './auth/AuthContext';
import Auth0Provider, * as auth0 from './auth/Auth0AuthContext';

let AuthProvider = null;
let useAuth = null;
let IsFirebaseAuth = false;
let IsAuth0Auth = false;

switch(process.env.REACT_APP_AUTH_PROVIDER){
    case "firebase":
        AuthProvider = AuthFirebaseProvider;
        useAuth = authfirebase.useAuth;
        IsFirebaseAuth = true;
        break;
    case "auth0":
        AuthProvider = Auth0Provider;
        useAuth = auth0.useAuth;
        IsAuth0Auth = true;
        break;
    default:
        throw(new Error('No Auth provider found in environment file'));
}

export { AuthProvider, useAuth, IsFirebaseAuth, IsAuth0Auth };