import React, { useEffect } from "react";
import VendorListing from "./Vendor_Listing";
import { NavLink } from 'react-router-dom'

const Dashboard = props => {

    //useeffect
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <>
            <div class="main_content_iner overly_inner ">
                <div class="container-fluid p-0 ">
                    <div class="row">
                        <div class="col-12">
                            <div class="page_title_box d-flex align-items-center justify-content-between">
                                <div class="page_title_left">
                                    <h3 class="f_s_30 f_w_700 text_white" >Dashboard</h3>
                                    {/* <ol class="breadcrumb page_bradcam mb-0">
                                        <li class="breadcrumb-item"><a href="javascript:void(0);">Salessa </a></li>
                                        <li class="breadcrumb-item"><a href="javascript:void(0);">Dashboard</a></li>
                                        <li class="breadcrumb-item active">Sales</li>
                                    </ol> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row ">

                        <div class="col-lg-4">
                            <NavLink to="/app/request/newRequest">
                                <div class="white_card card_height_100 mb_20 mb-minus cursor-pointer">
                                    <div class="white_card_header">
                                        <div class="box_header m-0">
                                            <div class="main-title">
                                                <h3 class="m-0">New Request</h3>
                                            </div>
                                            <div>
                                                <i className="fa fa-arrow-right"></i>
                                            </div>
                                            {/* <div class="float-lg-right float-none sales_renew_btns justify-content-end">
                                            <ul class="nav">
                                                <li class="nav-item">
                                                    <a class="nav-link active" href="#">Today</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">This week</a>
                                                </li>
                                            </ul>
                                        </div> */}
                                        </div>
                                    </div>
                                    <div class="white_card_body d-flex align-items-center" style={{ height: '100px' }}  >
                                        {/* <h4 class="f_w_900 f_s_60 mb-0 mr-2" style={{ fontSize: '34px' }} ></h4> */}
                                        <div class="w-100" style={{ height: '100px' }} >
                                            <canvas width="100%" id="page_views" ></canvas>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div class="col-lg-4">
                            <NavLink to="/app/request/pendingRequest">
                                <div class="white_card card_height_100 mb_20 mb-minus cursor-pointer">
                                    <div class="white_card_header">
                                        <div class="box_header m-0">
                                            <div class="main-title">
                                                <h3 class="m-0">Payment Pending Request</h3>
                                            </div>
                                            <div>
                                                <i className="fa fa-arrow-right"></i>
                                            </div>
                                            {/* <div class="float-lg-right float-none sales_renew_btns justify-content-end">
                                            <ul class="nav">
                                                <li class="nav-item">
                                                    <a class="nav-link active" href="#">Today</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">This week</a>
                                                </li>
                                            </ul>
                                        </div> */}
                                        </div>
                                    </div>
                                    <div class="white_card_body d-flex align-items-center" style={{ height: '100px' }}  >
                                        {/* <h4 class="f_w_900 f_s_60 mb-0 mr-2" style={{ fontSize: '34px' }} ></h4> */}
                                        <div class="w-100" style={{ height: '100px' }} >
                                            <canvas width="100%" id="page_views" ></canvas>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div class="col-lg-4">
                            <NavLink to="/app/request/cancelRequest">
                                <div class="white_card card_height_100 mb_20 mb-minus cursor-pointer">
                                    <div class="white_card_header">
                                        <div class="box_header m-0">
                                            <div class="main-title">
                                                <h3 class="m-0">Cancel Request</h3>
                                            </div>
                                            <div>
                                                <i className="fa fa-arrow-right"></i>
                                            </div>
                                            {/* <div class="float-lg-right float-none sales_renew_btns justify-content-end">
                                            <ul class="nav">
                                                <li class="nav-item">
                                                    <a class="nav-link active" href="#">Today</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">This week</a>
                                                </li>
                                            </ul>
                                        </div> */}
                                        </div>
                                    </div>
                                    <div class="white_card_body d-flex align-items-center" style={{ height: '100px' }}  >
                                        {/* <h4 class="f_w_900 f_s_60 mb-0 mr-2" style={{ fontSize: '34px' }} ></h4> */}
                                        <div class="w-100" style={{ height: '100px' }} >
                                            <canvas width="100%" id="page_views" ></canvas>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                        <div class="col-lg-12">
                            <div class="white_card card_height_100 mb_20 ">
                                <div class="white_card_header">
                                    <div class="box_header m-0">
                                        <div class="main-title">
                                            <h3 class="m-0">Today's Vendors Request</h3>
                                        </div>
                                        {/* <div class="header_more_tool">
                                            <div class="dropdown">
                                                <span class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
                                                    <i class="ti-more-alt"></i>
                                                </span>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#"> <i class="ti-eye"></i> Action</a>
                                                    <a class="dropdown-item" href="#"> <i class="ti-trash"></i> Delete</a>
                                                    <a class="dropdown-item" href="#"> <i class="fas fa-edit"></i> Edit</a>
                                                    <a class="dropdown-item" href="#"> <i class="ti-printer"></i> Print</a>
                                                    <a class="dropdown-item" href="#"> <i class="fa fa-download"></i> Download</a>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <VendorListing type="today's" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Dashboard