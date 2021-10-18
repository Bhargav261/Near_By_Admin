import React from 'react';
import Header from '../Common_Component/Header';
import Left_Pannel from '../Common_Component/Left_Pannel';
import Footer from '../Common_Component/Footer';
import Back_Top from '../Common_Component/Back_Top';
import Dashboard from '../Pages/Dashboard';
import AppPage from '../Pages/AppPage';
import Tables from '../Pages/Tables';
import Category_List from '../Pages/Category_List';
import AdminPrivateRoute from './AdminPrivateRoute';
import ViewRequest from '../Pages/ViewRequest';
import Plan from '../Pages/Plan';
import { Switch, Route, Redirect } from 'react-router-dom';
import Counter from '../Pages/Counter';

const AdminRoute = () => {
    return (
        <div class="crm_body_bg">
            <Left_Pannel />
            <section class="main_content dashboard_part large_header_bg">
                <Header />
                <Switch>
                    <AdminPrivateRoute exact path="/app/dashboard">
                        <Dashboard />
                    </AdminPrivateRoute>
                    <AdminPrivateRoute exact path="/app/apps">
                        <AppPage />
                    </AdminPrivateRoute>
                    <AdminPrivateRoute exact path="/app/tables">
                        <Tables />
                    </AdminPrivateRoute>
                    <AdminPrivateRoute exact path="/app/category">
                        <Category_List />
                    </AdminPrivateRoute>
                    <AdminPrivateRoute exact path="/app/request/:name">
                        <ViewRequest />
                    </AdminPrivateRoute>
                    <AdminPrivateRoute exact path="/app/plan">
                        <Plan />
                    </AdminPrivateRoute>
                    <Redirect to="/Dashboard" />
                </Switch>
                {/* <Counter/> */}
                <Footer />
            </section>
            <Back_Top />
        </div>
    )
}

export default AdminRoute;
