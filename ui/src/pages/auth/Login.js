import { Redirect } from 'react-router';
//import { useAuth } from '../../AuthContext';
//import { useAuth } from '../../Auth0AuthContext';
import { useAuth } from '../../Auth0AuthContext';
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth0 } from "@auth0/auth0-react";


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#efefef", // TODO: Use theme var
      display: "flex",
      flexDirection: "column",
      justifyContent:"center",
      alignItems:"center",
      marginTop:"30px"
    },
    loginButton: {
      marginBottom: "10px",
      width: "190px"
    }
  }));

const Login = () => {
    const classes = useStyles();

    // const { currentUser, loginWithGoogle, loginWithGithub, loginWithMicrosoft } = useAuth();

    // return currentUser ? <Redirect to="/"/> : <div className={classes.root}>
    //     <Button className={classes.loginButton} onClick={e => loginWithGoogle(e)} color="primary" variant="outlined">
    //         <img width="20px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" 
    //             src="/google.webp" />
    //             Login with Google
    //     </Button>
    //     <Button className={classes.loginButton} onClick={e => loginWithGithub(e)} color="primary" variant="outlined">
    //         <img width="20px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" 
    //             src="/github.png" />
    //             Login with Github
    //     </Button>
    //     <Button className={classes.loginButton} onClick={e => loginWithMicrosoft(e)} color="primary" variant="outlined">
    //         <img width="20px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" 
    //             src="/microsoft.png" />
    //             Login with Microsoft
    //     </Button>
    // </div>

    const { user:currentUser, loginWithPopup } = useAuth0();

      console.log(currentUser);
    return currentUser ? <Redirect to="/"/> : <div className={classes.root}>
        <Button className={classes.loginButton} onClick={e => loginWithPopup()} color="primary" variant="outlined">
                Login
        </Button>
    </div>
}

export default Login;