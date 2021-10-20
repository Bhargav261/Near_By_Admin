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
                    <VendorListing type={name} />
                </div>
            </div>
        </>
    )
}
export default ViewRequest;