import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import app from "./configs/firebase-config";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const history = useHistory();

  const auth = getAuth(app);
  auth.onAuthStateChanged(function (user) {
    setCurrentUser(user);
    // if (user) {
    //   console.log("log in");
    // }
  });

  const loginWithGoogle = (e) => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setCurrentUser(user);
        // console.log(token);
        // console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("error", errorCode, errorMessage, email, credential);
      });
  };

  const loginWithGithub = (e) => {
    const auth = getAuth(app);
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const credential = GithubAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setCurrentUser(user);
        // console.log(token);
        //console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        console.log("error", errorCode, errorMessage, email, credential);
      });
  };

  const loginWithMicrosoft = (e) => {
    const auth = getAuth(app);
    const provider = new OAuthProvider("microsoft.com");
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setCurrentUser(user);
        // console.log(token);
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("error", errorCode, errorMessage, email, credential);
      });
  };

  const logOut = (e) => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
        // console.log("successful");
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  const value = { currentUser, loginWithGoogle, loginWithGithub, loginWithMicrosoft, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
