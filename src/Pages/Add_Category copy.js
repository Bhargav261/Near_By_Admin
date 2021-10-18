import React, { useState, useEffect } from 'react';
import {Button, Input, Select} from '../Common_Component'
import { Modal } from 'react-bootstrap'
import { ErrorAlert, SuccessAlert } from '../Redux/SanckBar/SnackbarSlice';
import { useSelector, useDispatch } from 'react-redux';

const Add_Category = ({ closeModal }) => {

    const dispatch = useDispatch();

    //State Options
    const stateOptions = [
        {
            label: 'Gujarat',
            value: 'Gujarat'
        }
    ]

    //State Manage
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        email: '',
        password: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        checkme: false
    })

    //Useeffect
    useEffect(() => {
        handleShow();
    }, [])

    //Functions

    //onChange Event
    const handleFormChange = (e) => {
        const { name, value } = e.target;

        // console.log("nme: - ",name, value);

        console.log("name :- ", name);
        console.log("value :- ", value);

        let setData = "";

        if (name == "checkme") {
            setData = e.target.checked;
        } else {
            setData = value;
        }

        setForm({
            ...form,
            [name]: value
        })

        // setForm({
        //     ...form,
        //     [name]: setData
        // })

    }

    //onSubmit
    const formSubmit = (e) => {
        e.preventDefault();
        console.log("Form : -", form);
        setIsLoading(true);
        dispatch(SuccessAlert('Insert Successfully'));
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        handleClose();
    }


    //Close Modal
    const handleClose = () => {
        setShow(false);
        closeModal();
    };

    //Show Modal
    const handleShow = () => setShow(true);


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={formSubmit} method="post" autoComplete="Off">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <Input type="email" value={form.email} label="Email" name="email" placeholder="Enter Email" onChange={handleFormChange} required />
                            </div>
                            <div class="form-group col-md-6">
                                <Input type="password" value={form.password} label="Password" name="password" placeholder="Enter Password" onChange={handleFormChange} required />
                            </div>
                        </div>
                        <div class="form-group">
                            <Input type="textarea" value={form.address} label="Address" name="address" placeholder="Enter Address" onChange={handleFormChange} required />
                        </div>
                        <div class="form-group">
                            <Input type="textarea" value={form.address2} label="Address 2" name="address2" placeholder="Enter Address 2" onChange={handleFormChange} required />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <Input type="text" value={form.city} label="City" name="city" placeholder="Enter City" onChange={handleFormChange} required />
                            </div>
                            <div class="form-group col-md-4">
                                <Select label="State" value={form.state} name="state" options={stateOptions} onChange={handleFormChange} required />
                            </div>
                            <div class="form-group col-md-2">
                                <Input type="text" value={form.zip} label="Zip" name="zip" placeholder="Enter Zip" onChange={handleFormChange} required />
                            </div>
                        </div>
                        <div class="form-group">
                            <Input type="checkbox" value={form.checkme} label="Check Me Out" name="checkme" onChange={handleFormChange} required />
                        </div>
                        <Modal.Footer>
                            <Button variant="button" isLoading={isLoading} label="Submit" />
                        </Modal.Footer>
                    </form>


                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default Add_Category;