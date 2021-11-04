import React, { useEffect, useState, useCallback } from 'react';
import VendorModal from './VendorModal';
import Search from '../Common_Component/Search';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from "lodash";
import Button from '../Common_Component/Button';
import { isLoadingVendorStatus, VendorListAPI, vendorListStatus } from '../Redux/Listing/Listing';
import { useParams, useHistory } from 'react-router-dom';
import NoDataFound from '../Common_Component/NoDataFound';
import Loading from '../Common_Component/Loading';

const VendorListing = ({ type }) => {

    //Object
    const dispatch = useDispatch();
    const history = useHistory();
    const { name } = useParams();

    //get data from store
    const { isLoadingVendor, isVendorListStatus, vendorList } = useSelector(state => state.category);

    //Manage State
    const [search, setSearch] = useState('');
    const [viewStatus, setViewStatus] = useState(false);
    const [viewInfo, setViewInfo] = useState('');
    const [viewData, setViewData] = useState([]);
    const [callAPI, setCallAPI] = useState(false);
    const [showViewType, setShowViewType] = useState('');

    //useeffect
    useEffect(() => {
        callAPIData('');
    }, [type, callAPI])

    useEffect(() => {
        if (vendorList?.length > 0) {
            setViewData(vendorList);
        } else {
            setViewData([])
        }
    }, [vendorList])

    useEffect(() => {
        debounceSearch(search);
    }, [search])

    //Functions

    //Call API
    const callAPIData = (search) => {
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
        dispatch(isLoadingVendorStatus(true));
        dispatch(VendorListAPI({ type: status, search: search, todays: type == "today's" ? true : false }))
    }

    //Click on View Details
    const clickOnView = (data, type) => {
        console.log("Click on View");
        setShowViewType(type);
        setViewInfo(data);
        setViewStatus(true);
    }

    //Close Modal
    const closeModal = () => {
        setViewStatus(false);
        setCallAPI(!callAPI);
        console.log("Close Modal");
    }

    //onChnage Handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearch(value);
    }

    //Debounce Search
    const debounceSearch = useCallback(
        debounce((search) => {
            callAPIData(search);
        }, 500), []
    );
    return (
        <>
            {
                type != "today's" && (
                    <div class="row">
                        <div class="col-12">
                            <div class="page_title_box d-flex align-items-center justify-content-between">
                                <div class="page_title_left justify-space-between">
                                    {
                                        type !== 'vendorList' && (
                                            <div className="backButton">
                                                <Button variant='fa-left-arrow' onClick={() => history.push('/app/dashboard')} />
                                            </div>
                                        )}
                                    <h3 class="f_s_30 f_w_700 text_white" >
                                        {name == 'newRequest' && 'New Request'}
                                        {name == 'pendingRequest' && 'Pending Request'}
                                        {name == 'cancelRequest' && 'Cancel Request'}
                                        {name == 'vendorList' && 'Vendor List'}
                                    </h3>
                                </div>
                                <Search
                                    placeholder="Search Anything"
                                    onChange={handleChange}
                                    value={search}
                                />
                            </div>
                        </div>
                    </div>
                )
            }

            <div class="row ">
                <div class="col-lg-12">
                    <div class="white_card card_height_100 mb_20 ">
                        <div class="white_card_header">
                        </div>
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
                                            isLoadingVendor ?
                                                <tr>
                                                    <td colSpan={10}>
                                                        <Loading />
                                                    </td>
                                                </tr>
                                                :
                                                viewData?.length > 0 ?
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
                                                                        <div className="flex">
                                                                            <div className="cursor-pointer" onClick={() => clickOnView(item, 'info')} title='View Shop Details' style={{ marginRight: '10px' }}>
                                                                                <i className="fa fa-eye template-color"></i>
                                                                            </div>
                                                                            {
                                                                                type == 'vendorList' && (
                                                                                    <div className="cursor-pointer" onClick={() => clickOnView(item, 'service')} title='View Shop Service'>
                                                                                        <i class="fa fa-align-justify template-color"></i>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        </div>
                                                                }
                                                            </td>
                                                        </tr>
                                                    ))
                                                    :
                                                    <tr>
                                                        <td colSpan={10}>
                                                            <NoDataFound msg={"Not Request Found!!"} />
                                                        </td>
                                                    </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {
                viewStatus && (
                    <VendorModal showViewType={showViewType} closeModal={closeModal} viewInfo={viewInfo} type={type} />
                )
            }
        </>
    )
}

export default VendorListing;