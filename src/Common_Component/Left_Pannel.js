import React from 'react';
import { NavLink } from 'react-router-dom'

const Left_Pannel = () => {
    return (
        <nav class="sidebar vertical-scroll  ps-container ps-theme-default ps-active-y">
            <div class="logo d-flex justify-content-between">
                <NavLink to="/app/dashboard"><img src="/img/logo.png" alt="" /></NavLink>
                <div class="sidebar_close_icon d-lg-none">
                    <i class="ti-close"></i>
                </div>
            </div>
            <ul id="sidebar_menu">
                <li class="mm-active">
                    <NavLink class="has-arrow" to="/app/dashboard">
                        <div class="icon_menu">
                            <img src="/img/menu-icon/dashboard.svg" alt="" />
                        </div>
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li class="">
                    <NavLink class="has-arrow" to="/app/category">
                        <div class="icon_menu">
                            <img src="/img/menu-icon/2.svg" alt="" />
                        </div>
                        <span>Category</span>
                    </NavLink>
                </li>
                <li class="">
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
                </li>
            </ul>
        </nav>
    )
}

export default Left_Pannel;