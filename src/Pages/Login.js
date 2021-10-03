import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

const Login = () => {


    const history = useHistory();

    const [form, setForm] = useState({email : '',password : ''})

    const handleChange = (e) =>{
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]:value
        })

    }

    const login = (e) => {
        e.preventDefault();
        history.push('/app/dashboard')
        console.log("Form : -", form);
    }

    return (
        <>
            <div class="main_content_iner" style={{overflowX : 'hidden'}}>
                <div class="container-fluid p-0">
                    <div class="row justify-content-center">
                        <div class="col-md-12">
                            <div class="white_box mb_30 mt_30">
                                <div class="row">

                                    <div class="col-md-12 justify-content-center flex">
                                        <div class="modal-content cs_modal login-width" style={{boxShadow: '3px 4px 23px 4px #b1ebea'}}>
                                            <div class="modal-header justify-content-center theme_bg_1">
                                                <h5 class="modal-title text_white">Log in</h5>
                                            </div>
                                            <div class="modal-body body-radius">
                                                <form onSubmit={login} method="post" autoComplete="off">
                                                    <div class="form-group">
                                                        <input type="email" class="form-control" name="email" placeholder="Enter your email" onChange={handleChange} required />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="password" class="form-control" name="password" placeholder="Password" onChange={handleChange} required/>
                                                    </div>
                                                    <button type="submit" class="btn_1 full_width text-center">Log in</button>
                                                </form>
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