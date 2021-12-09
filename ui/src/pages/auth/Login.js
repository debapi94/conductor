import { Redirect } from 'react-router';
import { useAuth, IsFirebaseAuth, IsAuth0Auth } from '../../AuthProvider';
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


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
    const authObj = useAuth();

    if(IsFirebaseAuth){
      const { currentUser, loginWithGoogle, loginWithGithub, loginWithMicrosoft } = authObj;

      return currentUser ? <Redirect to="/"/> : <div className={classes.root}>
          <Button className={classes.loginButton} onClick={e => loginWithGoogle(e)} color="primary" variant="outlined">
              <img width="20px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" 
                  src="/google.webp" />
                  Login with Google
          </Button>
          <Button className={classes.loginButton} onClick={e => loginWithGithub(e)} color="primary" variant="outlined">
              <img width="20px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" 
                  src="/github.png" />
                  Login with Github
          </Button>
          <Button className={classes.loginButton} onClick={e => loginWithMicrosoft(e)} color="primary" variant="outlined">
              <img width="20px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" 
                  src="/microsoft.png" />
                  Login with Microsoft
          </Button>
      </div>
    }
    else if(IsAuth0Auth){
      const { currentUser, loginWithPopup } = authObj;

      return currentUser ? <Redirect to="/"/> : <div className={classes.root}>
          <Button className={classes.loginButton} onClick={e => loginWithPopup()} color="primary" variant="outlined">
                  Login
          </Button>
      </div>
    }
}

export default Login;