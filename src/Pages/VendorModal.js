import React, { useEffect, useState } from 'react';
import Button from '../Common_Component/Button';
import { Modal, Row, Col } from 'react-bootstrap';
import { vendorShopRequestStatus, VendorShopRequestAPI } from '../Redux/Listing/Listing';
import { useSelector, useDispatch } from 'react-redux';

const VendorModal = ({ showViewType, closeModal, viewInfo, type }) => {

    console.log("Close Modal, viewInfo :- ", viewInfo);

    //Objects
    const dispatch = useDispatch();

    //get data from store
    const { isVendorShopRequest } = useSelector(state => state.category);


    //State Manage
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);

    //Useeffect
    useEffect(() => {
        handleShow();
        dispatch(vendorShopRequestStatus(false));
    }, [])

    useEffect(() => {
        if (isVendorShopRequest) {
            dispatch(vendorShopRequestStatus(false));
            handleClose();
        }
    }, [isVendorShopRequest])

    //Functions

    //Close Modal
    const handleClose = () => {
        setShow(false);
        closeModal();
    }

    //Show Modal
    const handleShow = () => {
        setShow(true)
    }

    //Accept Request
    const acceptReq = (id) => {
        console.log("Accept Request");
        dispatch(VendorShopRequestAPI({ id: id, type: 'accept' }));
    }

    //Reject Request
    const rejectReq = (id) => {
        console.log("Reject Request");
        dispatch(VendorShopRequestAPI({ id: id, type: 'reject' }));
    }

    console.log("viewInfo :-");

    return (
        <>
            <Modal show={show} onHide={handleClose}
            // size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{showViewType && showViewType == 'service' ? 'View Shop Service' :'View Shop Details'}</Modal.Title>
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
                                                <div class="card">
                                                    <div class="card-header" id="headingOne">
                                                        <h5 class="mb-0">
                                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Collapsible Group Item #<span class="digits">1</span></button>
                                                        </h5>
                                                    </div>
                                                    <div class="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordion">
                                                        <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingTwo">
                                                        <h5 class="mb-0">
                                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Collapsible Group Item #<span class="digits">2</span></button>
                                                        </h5>
                                                    </div>
                                                    <div class="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordion">
                                                        <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingThree">
                                                        <h5 class="mb-0">
                                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Collapsible Group Item #<span class="digits">3</span></button>
                                                        </h5>
                                                    </div>
                                                    <div class="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordion">
                                                        <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</div>
                                                    </div>
                                                </div>
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