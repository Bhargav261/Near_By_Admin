import React, { useState, useEffect } from 'react';
import { Button, Input, Select } from '../Common_Component'
import { Modal } from 'react-bootstrap'
import { ErrorAlert, SuccessAlert } from '../Redux/SanckBar/SnackbarSlice';
import { addCategoryStatus, AddCategoryAPI } from '../Redux/Listing/Listing';
import { useSelector, useDispatch } from 'react-redux';

const Add_Category = ({ editData, closeModal }) => {

    //Objects
    const dispatch = useDispatch();

    //get data from store
    const { isAddCategoryStatus } = useSelector(state => state.category);

    //State Manage
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        id: '',
        name: ''
    })

    //Useeffect
    useEffect(() => {
        dispatch(addCategoryStatus(false));
        handleShow();
        if (editData.type == 'edit') {
            setForm({
                ...form,
                name: editData?.data?.name
            })
        }
    }, [])

    useEffect(() => {
        if(isAddCategoryStatus){
            handleClose();   
        }
    },[isAddCategoryStatus])

    //Functions

    //Close Modal
    const handleClose = () => {
        setShow(false);
        closeModal();
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
        // setTimeout(() => {
        //     setIsLoading(false); 
        // }, 3000);
        if (form.name != '') {
            dispatch(AddCategoryAPI(
                { id: editData.type == 'edit' ? (editData.data._id) : '', type: editData.type, name: form.name, status : editData.type == 'edit' ? editData.data.status : true }
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
                                'Add Category'
                                :
                                'Edit Category'
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={formSubmit} method="post" autoComplete="Off">
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <Input type="text" value={form.name} label="Category Name" name="name" placeholder="Enter Category" onChange={handleFormChange} required />
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

export default Add_Category;