import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../AuthProvider'

const PriavteRoute = (props) => {

    const { currentUser } = useAuth();

    return (
        <Route  {...props}>
            {currentUser ? React.cloneElement(props.children, {...props}) : <Redirect to="/login" />}
        </Route>
    );
}

export default PriavteRoute;