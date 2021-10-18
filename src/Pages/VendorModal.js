import React, { useEffect, useState } from 'react';
import Button from '../Common_Component/Button';
import { Modal, Row, Col } from 'react-bootstrap';

const VendorModal = ({ closeModal, viewInfo }) => {

    console.log("Close Modal, viewInfo :- ", viewInfo);

    //State Manage
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);

    //Useeffect
    useEffect(() => {
        handleShow();
    }, [])

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
    const acceptReq = () =>{
        console.log("Accept Request");
    }

    //Reject Request
    const rejectReq = () => {
        console.log("Reject Request");
    }


    return (
        <>
            <Modal show={show} onHide={handleClose}
            // size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>View Shop Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h4 className="text-align-center mb-4">Hair & look</h4>
                    </div>
                    <Row >
                        <Col>
                            <table class="table table-clear QA_table">
                                <tr>
                                    <td>
                                        <span className="template-color">Shop Owner : </span>
                                    </td>
                                    <td>
                                        <span>Bhargav Patel</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="template-color">Shop Category : </span>
                                    </td>
                                    <td>
                                        <span>Salon</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="template-color">Contact No : </span>
                                    </td>
                                    <td>
                                        <span> 7567652068</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="template-color">Shop Category : </span>
                                    </td>
                                    <td>
                                        <span>Atlanta Shopping Mall, Althan, VIP Road, surat</span>
                                    </td>
                                </tr>
                            </table>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="justify-center mb-4 mt-3">
                            <div className="mr-3" title="Accept">
                                <Button variant="accept-button" style={{width : '110px'}} onClick={acceptReq} />
                            </div>
                            <div title="Reject">
                                <Button variant="reject-button" style={{width : '110px'}} onClick={rejectReq} />
                            </div>

                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default VendorModal;