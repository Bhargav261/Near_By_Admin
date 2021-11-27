import React from 'react';
import { NavLink } from 'react-router-dom'

const Left_Pannel = () => {
    return (
        <nav class="sidebar vertical-scroll  ps-container ps-theme-default ps-active-y">
            <div class="logo d-flex justify-content-between">
                <NavLink to="/app/dashboard">
                    <h4 className="primary-color">  <i class="fa fa-street-view" aria-hidden="true"></i> Near By You</h4>
                    {/* <img src="/img/logo.png" alt="" /> */}
                </NavLink>
                <div class="sidebar_close_icon d-lg-none">
                    <i class="ti-close"></i>
                </div>
            </div>
            <ul id="sidebar_menu">
                <li class="mm-active">
                    <NavLink class="has-arrow" to="/app/dashboard">
                        <div class="icon_menu">
                        <div class="col-sm-6 col-md-4 col-xl-3"><i class="fas fa-home" style={{ color: '#00918e', fontSize : '13px' }}></i></div>
                            {/* <img src="/img/menu-icon/dashboard.svg" alt="" /> */}
                        </div>
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li class="">
                    <NavLink class="has-arrow" to="/app/category">
                        <div class="icon_menu">
                            {/* <img src="/img/menu-icon/2.svg" alt="" /> */}
                            <div class="col-sm-6 col-md-4 col-xl-3"><i class="fab fa-codiepie" style={{ color: '#00918e', fontSize : '13px' }}></i></div>
                        </div>
                        <span>Category</span>
                    </NavLink>
                </li>
                <li class="">
                    <NavLink class="has-arrow" to="/app/plan">
                        <div class="icon_menu">
                            <div class="col-sm-6 col-md-4 col-xl-3"><i class="fas fa-money-bill-wave" style={{ color: '#00918e', fontSize : '13px' }}></i></div>
                            {/* <img src="/img/menu-icon/2.svg" alt="" /> */}
                        </div>
                        <span>Plan</span>
                    </NavLink>
                </li>
                <li class="">
                    <NavLink class="has-arrow" to="/app/request/vendorList">
                        <div class="icon_menu">
                            <div class="col-sm-6 col-md-4 col-xl-3"><i class="ti-pulse" style={{ color: '#00918e', fontSize : '13px' }}></i></div>
                            {/* <img src="/img/menu-icon/2.svg" alt="" /> */}
                        </div>
                        <span>Vendors</span>
                    </NavLink>
                </li>
                {/* <li class="">
                    <NavLink class="has-arrow" to="/app/apps">
                        <div class="icon_menu">
                            <img src="/img/menu-icon/2.svg" alt="" />
                        </div>
                        <span>Apps</span>
                    </NavLink>
                </li>
                <li class="">
                    <NavLink class="has-arrow" to="/app/tables">
                        <div class="icon_menu">
                            <img src="/img/menu-icon/2.svg" alt="" />
                        </div>
                        <span>Tables</span>
                    </NavLink>
                </li> */}
            </ul>
        </nav>
    )
}

export default Left_Pannel;