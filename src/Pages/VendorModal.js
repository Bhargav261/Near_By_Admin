import React, { useEffect, useState } from 'react';
import Button from '../Common_Component/Button';
import Input from '../Common_Component/Input';
import { Modal, Row, Col } from 'react-bootstrap';
import { vendorShopRequestStatus, VendorShopRequestAPI } from '../Redux/Listing/Listing';
import { useSelector, useDispatch } from 'react-redux';

const VendorModal = ({ showViewType, closeModal, viewInfo, type }) => {

    //Objects
    const dispatch = useDispatch();

    //get data from store
    const { isVendorShopRequest } = useSelector(state => state.category);


    //State Manage
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [reason, setReason] = useState('');
    const [showRejectModal, setShowRejectModal] = useState(false);

    //Useeffect
    useEffect(() => {
        handleShow();
        dispatch(vendorShopRequestStatus(false));
    }, [])

    useEffect(() => {
        if (isVendorShopRequest) {
            dispatch(vendorShopRequestStatus(false));
            handleClose(true);
        }
    }, [isVendorShopRequest])

    //Functions

    //Close Modal
    const handleClose = (status) => {
        setShow(false);
        closeModal(status);
    }

    //Show Modal
    const handleShow = () => {
        setShow(true)
    }

    //Accept Request
    const acceptReq = (id) => {
        dispatch(VendorShopRequestAPI({ id: id, type: 'accept' }));
    }

    //Reject Request
    const rejectReq = (id) => {
        // dispatch(VendorShopRequestAPI({ id: id, type: 'reject' }));
        handleShowRejectModal();
    }

    //Close Reject Modal
    const handleCloseRejectModal = () => {
        setShowRejectModal(false);
    }

    //Show Reject Modal
    const handleShowRejectModal = () => {
        setShowRejectModal(true)
    }

    //Hanlde Change Event For Reason
    const handleFormChange = (e) => {
        const { name, value } = e.target
        setReason(value);
    }

    //Form Submit Event
    const formSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        dispatch(VendorShopRequestAPI({ id: viewInfo?._id, type: 'reject', reason: reason }));
        setIsLoading(false);
        handleCloseRejectModal();
        handleClose();
    }

    return (
        <>
            <Modal show={showRejectModal} onHide={handleCloseRejectModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Reason For Reject</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={formSubmit} method="post" autoComplete="Off">
                        <div>
                            <Input type="textarea" value={reason} rows={5} label="Reason For Reject" name="reason" placeholder="Enter Reason" onChange={handleFormChange} required />
                        </div>
                        <Modal.Footer>
                            <Button variant="button" isLoading={isLoading} label="Send" />
                        </Modal.Footer>
                    </form>
                </Modal.Body>

            </Modal>

            <Modal show={show} onHide={handleClose} style={{ zIndex: showRejectModal ? 1039 : 1050 }}
            // size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{showViewType && showViewType == 'service' ? 'View Shop Service' : 'View Shop Details'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h4 className="text-align-center mb-4">{viewInfo?.vendorDetails[0]?.shop_name}</h4>
                    </div>
                    {
                        showViewType && showViewType == 'service' ? (
                            <Row>
                                <Col>
                                    <div class="card_box position-relative mb_30">
                                        <div class="box_body">
                                            <div class="default-according" id="accordion">
                                                {
                                                    viewInfo?.serviceDetails?.length > 0 && viewInfo?.serviceDetails?.map((item, index) => (
                                                        <div class="card">
                                                            <div class="card-header" id="headingOne" style={{padding : '2px'}}>
                                                                <h5 class="mb-0">
                                                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target={`#collapseOne${index}`} aria-expanded="false" aria-controls="collapseOne">{item?.name}</button>
                                                                </h5>
                                                            </div>
                                                            <div class="collapse" id={`collapseOne${index}`} aria-labelledby="headingOne" data-parent="#accordion">
                                                                <div class="card-body" style={{padding : 15}}>
                                                                    {item?.service_description}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        ) : (
                            <>
                                <Row >
                                    <Col>
                                        <table class="table table-clear QA_table">
                                            <tr>
                                                <td>
                                                    <span className="template-color">Shop Owner</span>
                                                </td>
                                                <td>
                                                    <span>: {viewInfo?.userDetails[0]?.user_name}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="template-color">Personal Contact No</span>
                                                </td>
                                                <td>
                                                    <span>: {viewInfo?.userDetails[0]?.contact_number}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="template-color">Shop Category</span>
                                                </td>
                                                <td>
                                                    <span>: {viewInfo?.categoryDeatils[0]?.name}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="template-color">Shop Contact No</span>
                                                </td>
                                                <td>
                                                    <span>: {viewInfo?.shop_contact_number}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="template-color">Shop Category</span>
                                                </td>
                                                <td>
                                                    <span>: {viewInfo?.shop_door_number}, {viewInfo?.shop_area}, {viewInfo?.shop_city_town}, {viewInfo?.shop_state}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="template-color">Pincode</span>
                                                </td>
                                                <td>
                                                    <span>: {viewInfo?.shop_pincode}</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="justify-center mb-4 mt-3">
                                        {
                                            type != 'vendorList' && (
                                                <>

                                                    {
                                                        type != 'pendingRequest' && (
                                                            <div className="mr-3" title="Accept">
                                                                <Button variant="accept-button" style={{ width: '70px' }} onClick={() => acceptReq(viewInfo?._id)} />
                                                            </div>
                                                        )
                                                    }

                                                    <div title="Reject">
                                                        <Button variant="reject-button" style={{ width: '70px' }} onClick={() => rejectReq(viewInfo?._id)} />
                                                    </div>
                                                </>
                                            )
                                        }
                                    </Col>
                                </Row>
                            </>
                        )
                    }

                </Modal.Body>
            </Modal>
        </>
    )
}

export default VendorModal;