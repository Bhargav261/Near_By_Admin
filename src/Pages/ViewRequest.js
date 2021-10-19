import React from 'react';
import VendorListing from './Vendor_Listing';
import {useParams} from 'react-router-dom';

const ViewRequest = () => {

    //Object
    const {name} = useParams();

    return (
        <>
            <div class="main_content_iner overly_inner ">
                <div class="container-fluid p-0 ">
                    <div class="row">
                        <div class="col-12">
                            <div class="page_title_box d-flex align-items-center justify-content-between">
                                <div class="page_title_left">
                                    <h3 class="f_s_30 f_w_700 text_white" >
                                        {name == 'newRequest' && 'New Request'}
                                        {name == 'pendingRequest' && 'Pending Request'}
                                        {name == 'cancelRequest' && 'Cancel Request'}
                                        {name == 'vendorList' && 'Vendor List'}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-lg-12">
                            <div class="white_card card_height_100 mb_20 ">
                                <div class="white_card_header">
                                </div>
                                <VendorListing type={name} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewRequest;