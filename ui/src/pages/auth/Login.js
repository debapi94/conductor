import { Redirect } from 'react-router';
import { useAuth } from '../../AuthContext';
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#efefef", // TODO: Use theme var
      display: "flex",
      justifyContent:"center",
      alignItems:"center",
      marginTop:"30px"
    }
  }));

const Login = () => {
    const classes = useStyles();

    const { currentUser, loginWithGoogle } = useAuth();

    return currentUser ? <Redirect to="/"/> : <div className={classes.root}>
        <Button onClick={e => loginWithGoogle(e)} color="primary" variant="outlined">
            <img width="20px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" 
                src="/google.webp" />
                Login with Google
        </Button>
    </div>
}

export default Login;