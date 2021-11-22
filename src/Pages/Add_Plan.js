import React, { useEffect, useState } from 'react';
import { Button, Input, Select } from '../Common_Component'
import { Modal } from 'react-bootstrap';
import { ErrorAlert, SuccessAlert } from '../Redux/SanckBar/SnackbarSlice';
import { addPlanStatus, AddPlanAPI } from '../Redux/Listing/Listing';
import { useSelector, useDispatch } from 'react-redux';


const AddPlan = ({ editData, closeModal }) => {

    //Objects
    const dispatch = useDispatch();

    //get data from store
    const { isAddPlanStatus } = useSelector(state => state.category);

    //State Manage
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        id: '',
        name: '',
        price: '',
        type: '',
        options: [
            { value: '3month', label: '3 Months' },
            { value: '6month', label: '6 Months' },
            { value: '12month', label: '12 Months' },
        ]
    })

    //Useeffect
    useEffect(() => {
        dispatch(addPlanStatus(false));
        handleShow();
        if (editData.type == 'edit') {
            setForm({
                ...form,
                name: editData?.data?.item?.name,
                price: editData?.data?.item?.plan_price,
                type: editData?.data?.item?.plan_type,
            })
        }
    }, [])

    useEffect(() => {
        if (isAddPlanStatus) {
            handleClose(true);
        }
    }, [isAddPlanStatus])

    //Functions

    //Close Modal
    const handleClose = (status) => {
        setShow(false);
        closeModal(status);
    };

    //Show Modal
    const handleShow = () => {
        setShow(true)
    }

    //onChange Event
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    //onSubmit
    const formSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (form.name != '' && form.type != "" && form.price != '') {
            dispatch(AddPlanAPI(
                { 
                id: editData.type == 'edit' ? (editData?.data?.item?._id) : '', 
                name: form.name, 
                planType: form.type, 
                price: form.price,
                status : editData.type == 'edit' ? editData?.data?.item?.status : true
             }
            ));
        } else {
            dispatch(ErrorAlert('Please Enter Category !!'))
        }
        setIsLoading(false);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {
                            editData.type == 'add' ?
                                'Add Plan'
                                :
                                'Edit Plan'
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={formSubmit} method="post" autoComplete="Off">
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <Input type="text" value={form.name} label="Plan Name" name="name" placeholder="Enter Plan Name" onChange={handleFormChange} required />
                            </div>
                            <div class="form-group col-md-12">
                                {/* <Input type="text" value={form.type} label="Plan Type" name="type" placeholder="Enter Plan Tyoe" onChange={handleFormChange} required /> */}
                                <Select label='Plan Type' name="type" value={form.type} required onChange={handleFormChange} options={form.options} />
                            </div>
                            <div class="form-group col-md-12">
                                <Input type="number" value={form.price} label="Plan Price" name="price" placeholder="Enter Plan Price" onChange={handleFormChange} required />
                            </div>
                        </div>
                        <Modal.Footer>
                            <Button variant="button" isLoading={isLoading} label="Save" />
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AddPlan;