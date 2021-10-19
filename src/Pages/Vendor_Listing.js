import React, { useEffect, useState } from 'react';
import VendorModal from './VendorModal';
import { useSelector, useDispatch } from 'react-redux';
import { VendorListAPI, vendorListStatus } from '../Redux/Listing/Listing';
import { useParams } from 'react-router-dom';

const VendorListing = ({ type }) => {

    //Object
    const dispatch = useDispatch();
    const { name } = useParams();

    //get data from store
    const { isVendorListStatus, vendorList } = useSelector(state => state.category);

    //Manage State
    const [viewStatus, setViewStatus] = useState(false);
    const [viewInfo, setViewInfo] = useState('');
    const [viewData, setViewData] = useState([]);
    const [callAPI, setCallAPI] = useState(false);

    //useeffect
    useEffect(() => {
        let status = ''
        if (type == 'newRequest' || type == "today's") {
            status = 'pending'
        } else if (type == 'pendingRequest') {
            status = 'paymentpending'
        } else if (type == 'cancelRequest') {
            status = 'reject'
        } else if (type == 'vendorList') {
            status = 'active'
        }
        dispatch(VendorListAPI({ type: status }))
    }, [type, callAPI])

    useEffect(() => {
        if (vendorList?.length > 0) {
            setViewData(vendorList);
        }else{
            setViewData([])
        }
    }, [vendorList])

    //Functions

    //Click on View Details
    const clickOnView = (data) => {
        console.log("Click on View");
        setViewInfo(data);
        setViewStatus(true);
    }

    //Close Modal
    const closeModal = () => {
        setViewStatus(false);
        setCallAPI(!callAPI);
        console.log("Close Modal");
    }

    return (
        <>
            <div class="white_card_body QA_section">
                <div class="QA_table ">
                    <table class="table lms_table_active2 p-0">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Vendor Name</th>
                                <th scope="col">Personal Contact</th>
                                <th scope="col">Category</th>
                                <th scope="col">Shop Name</th>
                                <th scope="col">Pincode</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                viewData?.length > 0 && viewData.map((item, index) => (
                                    <tr>
                                        <td class="f_s_14 f_w_400">{index + 1}</td>
                                        <td class="f_s_14 f_w_400">{item?.userDetails[0]?.user_name}</td>
                                        <td class="f_s_14 f_w_400">{item?.userDetails[0]?.contact_number}</td>
                                        <td class="f_s_14 f_w_400">{item?.categoryDeatils[0]?.name}</td>
                                        <td class="f_s_14 f_w_400">{item?.vendorDetails[0]?.shop_name}</td>
                                        <td class="f_s_14 f_w_400">{item?.shop_pincode}</td>
                                        <td class="f_s_14 f_w_400">
                                            {
                                                type == 'cancelRequest' ?
                                                    <div className="cursor-pointer" title='Cancel Request'>
                                                        <span className="color-red">Reject</span>
                                                    </div>
                                                    :
                                                    <div className="cursor-pointer" onClick={() => clickOnView(item)} title='View More Details'>
                                                        <i className="fa fa-eye template-color"></i>
                                                    </div>
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {
                viewStatus && (
                    <VendorModal closeModal={closeModal} viewInfo={viewInfo} type={type} />
                )
            }
        </>
    )
}

export default VendorListing;