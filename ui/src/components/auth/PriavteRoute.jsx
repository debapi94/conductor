import React from 'react';
import { Route, Redirect } from 'react-router-dom'
//import { useAuth } from '../../AuthContext'
import { useAuth } from '../../Auth0AuthContext'
import { useAuth0 } from "@auth0/auth0-react";

const PriavteRoute = (props) => {

    const { user:currentUser } = useAuth0();

    console.log(currentUser);
    return (
        <Route  {...props}>
            {currentUser ? React.cloneElement(props.children, {...props}) : <Redirect to="/login" />}
        </Route>
    );
}

export default PriavteRoute;