import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../AuthContext'

const PriavteRoute = (props) => {

    const { currentUser } = useAuth();

    console.log(currentUser);
    return (
        <Route  {...props}>
            {currentUser ? React.cloneElement(props.children, {...props}) : <Redirect to="/login" />}
        </Route>
    );
}

export default PriavteRoute;