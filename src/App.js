import React from 'react';
import AdminRoute from './Route/AdminRoute'
import Login from './Pages/Login';
import { Switch, Route, Redirect } from 'react-router-dom';
import AlertSnackBar from './Common_Component/AlertSnackbar';
import configAppConst from './Common_Component/Configrations'
import axios from 'axios';

//Default Url And Header 
axios.defaults.baseURL = configAppConst.localBaseURL;

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
