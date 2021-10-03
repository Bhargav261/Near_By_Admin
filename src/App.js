import React from 'react';
import AdminRoute from './Route/AdminRoute'
import Login from './Pages/Login';
import { Switch, Route, Redirect } from 'react-router-dom';
import AlertSnackBar from './Common_Component/AlertSnackbar';

const App = () => {
  return (
    <>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/App" component={AdminRoute} />
          <Redirect to="/login" />
        </Switch>
        <AlertSnackBar/>
    </>
  )
}

export default App;
