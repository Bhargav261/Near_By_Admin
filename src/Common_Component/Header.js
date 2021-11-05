import React from 'react';
import { useHistory } from 'react-router-dom'

const Header = () => {

    //Object
    const history  = useHistory();

    //Functions

    //logout 
    const logout = () => {
        console.log("Logout");
        localStorage.removeItem('Near_By_You_Admin');
        localStorage.removeItem('Near_By_You_Admin_Token');
        history.push('/login')
    }


    return (
        <>
            <div class="container-fluid no-gutters">
                <div class="row">
                    <div class="col-lg-12 p-0 ">
                        <div class="header_iner d-flex justify-content-between align-items-center">
                            <div class="sidebar_icon d-lg-none">
                                <i class="ti-menu"></i>
                            </div>
                            <div class="serach_field-area d-flex align-items-center">
                                <div class="search_inner">
                                </div>
                                <span class="f_s_14 f_w_400 ml_25 white_text text_white" >Apps</span>
                            </div>
                            <div class="header_right d-flex justify-content-between align-items-center">
                                <div class="header_notification_warp d-flex align-items-center">
                                </div>
                                <div class="profile_info">
                                    <img src="/img/client_img.png" alt="#" />
                                    <div class="profile_info_iner">
                                        <div class="profile_author_name">
                                            <h5>Bhargav</h5>
                                        </div>
                                        <div class="profile_info_details">
                                            <a href="#">My Profile </a>
                                            <a href="#">Settings</a>
                                            <a href="#" onClick={logout}>Log Out </a>
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

export default Header;