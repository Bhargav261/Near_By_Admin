import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LoginAPI, loginStatus } from '../Redux/Login/loginSlice';
import { ErrorAlert, SuccessAlert } from '../Redux/SanckBar/SnackbarSlice';
import auth from '../Route/Auth';

const Login = () => {

    //Object
    const history = useHistory();
    const dispatch = useDispatch();

    //get data from store
    const { isLoginStatus } = useSelector(state => state.login);

    //State Manage
    const [form, setForm] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);

    //useeffect
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (auth.isAuthenticated()) {
            history.push('/app/dashboard');
        }
        dispatch(loginStatus(false));
    }, [])

    useEffect(() => {
        if (isLoginStatus) {
            setForm({
                email: '',
                password: ''
            });
            history.push('/app/dashboard');
            dispatch(loginStatus(false));
            setLoading(false);
        }
    }, [isLoginStatus])

    //Functions

    //Handle Change Event
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    //Click on Login
    const login = (e) => {
        e.preventDefault();
        if (form.email != "" && form.password != "") {
            dispatch(LoginAPI({ email: form.email, password: form.password }));
        } else {
            dispatch(ErrorAlert('Please Enter Email and Password !!'))
        }
    }

    //Default Login 
    const defaultLogin = (e, userName, password) => {
        e.preventDefault();
        setLoading(true);
        dispatch(LoginAPI({ email: userName, password: password }));
    }

    return (
        <>
            {
                loading && (
                    <div id="overlay"></div>
                )
            }
            <div class="main_content_iner" style={{ overflowX: 'hidden' }}>
                <div class="container-fluid p-0">
                    <div class="row justify-content-center">
                        <div class="col-md-12">
                            <div class="white_box mb_30 mt_30">
                                <div class="row">

                                    <div class="col-md-12 justify-content-center flex">
                                        <div class="modal-content cs_modal login-width" style={{ boxShadow: '3px 4px 23px 4px #b1ebea' }}>
                                            <div class="modal-header justify-content-center theme_bg_1">
                                                <h5 class="modal-title text_white">Log in</h5>
                                            </div>
                                            <div class="modal-body body-radius">
                                                <form onSubmit={login} method="post" autoComplete="off">
                                                    <div class="form-group">
                                                        <input type="email" class="form-control" name="email" placeholder="Enter your email" onChange={handleChange} required />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="password" class="form-control" name="password" placeholder="Password" onChange={handleChange} required />
                                                    </div>
                                                    <button type="submit" class="btn_1 full_width text-center">Log in</button>
                                                </form>
                                                <div>
                                                    <button type="button" onClick={(e) => defaultLogin(e, 'nearbyyouadmin@gmail.com', 'Admin@123')} class="btn_1 full_width text-center">Default Admin Login</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;