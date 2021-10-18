import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './Auth'

const AdminPrivateRoute = ({ children, ...rest }) => {
    const isAuth = auth.isAuthenticated();
    return (
        <>
            <Route {...rest} render={() => isAuth ? (children) : (<Redirect to={'/'} />)} />
        </>
    )
}

export default AdminPrivateRoute;