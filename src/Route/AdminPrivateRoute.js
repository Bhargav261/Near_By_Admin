import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AdminPrivateRoute = ({ children, ...rest }) => {
    const isAuth = true;
    return (
        <>
            <Route {...rest} render={() => isAuth ? (children) : (<Redirect to={'/'} />)} />
        </>
    )
}

export default AdminPrivateRoute;