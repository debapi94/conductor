import { useAuth } from '../../AuthContext';

const Login = () => {

    const { currentUser, loginWithGoogle, logOut } = useAuth();

    console.log(currentUser);

    return <div>
        <button onClick={e => loginWithGoogle(e)}>Login with Google</button>
        <button onClick={e => logOut(e)}>signOut</button>
    </div>
}

export default Login;