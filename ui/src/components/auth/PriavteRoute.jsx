import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../AuthContext'

const PriavteRoute = (props) => {

    const { currentUser } = useAuth();

    return (
        <Route  {...props}>
            {currentUser ? <component {...props} /> : <Redirect to="/login" />}
        </Route>
    );
}

export default PriavteRoute;