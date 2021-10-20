import React, { useEffect, useState, useCallback } from 'react';
import Button from '../Common_Component/Button';
import Search from '../Common_Component/Search';
import { Modal } from 'react-bootstrap';
import AddPlan from './Add_Plan';
import { debounce } from "lodash";
import { useSelector, useDispatch } from 'react-redux';
import NoDataFound from '../Common_Component/NoDataFound';
import { PlanListAPI, deletePlanAPI, deletePlanStatus, changeStatusPlanAPI, changePlanStatusData } from '../Redux/Listing/Listing';

const Plan = () => {

    //Object
    const dispatch = useDispatch();

    //get data from store
    const { isPlanStatus, isChangePlanStatusAPI, planResource, isDeletePlan } = useSelector(state => state.category);

    //Manage Status
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);
    const [viewModalStatus, setViewModalStatus] = useState(false);
    const [callAPI, setCallAPI] = useState(false);
    const [viewPlan, setViewPlan] = useState([]);
    const [editData, setEditData] = useState({
        deleteID: '',
        data: '',
        type: ''
    });

    //useeffect
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(deletePlanStatus(false));
    }, [])

    useEffect(() => {
        dispatch(PlanListAPI({ data: 'ABC' }));
    }, [callAPI])

    useEffect(() => {
        setViewPlan(planResource)
    }, [planResource])

    useEffect(() => {
        if (isDeletePlan) {
            setCallAPI(!callAPI);
            handleClose();
            dispatch(deletePlanStatus(false));
        }
    }, [isDeletePlan])

    useEffect(() => {
        if (isChangePlanStatusAPI) {
            setCallAPI(!callAPI);
            dispatch(changePlanStatusData(false));
        }
    }, [isChangePlanStatusAPI])

    useEffect(() => {
        debounceSearch(search);
    }, [search])

    //Functions

    //onChnage Handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearch(value);
    }

    //click on Add
    const addEvent = () => {
        editData.type = "add";
        setViewModalStatus(true);
    }

    //CLick on Edit
    const clickonEdit = (item) => {
        editData.type = "edit";
        editData.data = { item };
        setViewModalStatus(true);
    }

    //Click on Delete
    const clickonDelete = (item) => {
        editData.deleteID = item?._id;
        handleShow();
    }

    //Click On Change Status
    const changeStatus = (id, status) => {
        dispatch(changeStatusPlanAPI({ id: id, status: !status }))
        console.log("clickon Change Status :- ");
    }

    //Show Delete Modal
    const handleShow = () => {
        setShow(true)
    }

    //Close Delete Modal
    const handleClose = () => {
        setShow(false)
    }

    //Click on Yes Button
    const handleYesClick = () => {
        dispatch(deletePlanAPI({ id: editData.deleteID }));
    }

    //Close Modal
    const closeModal = () => {
        setEditData({
            deleteID: '',
            data: '',
            type: ''
        })
        setViewModalStatus(false);
        setCallAPI(!callAPI);
    }

    //Debounce Search
    const debounceSearch = useCallback(
        debounce((searchData) => {
            dispatch(PlanListAPI({ search: searchData }));
        }, 500), []
    );
    return (
        <>
            {/* Delete Modal */}
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are You Sure Want to Delete ??</Modal.Body>
                <Modal.Footer>
                    <Button variant="button" label="Yes" onClick={handleYesClick}></Button>
                    <Button variant="button" label="No" onClick={handleClose}></Button>
                </Modal.Footer>
            </Modal>

            {/* Listing */}
            <div class="main_content_iner overly_inner ">
                <div class="container-fluid p-0 ">
                    <div class="row">
                        <div class="col-12">
                            <div class="page_title_box d-flex align-items-center justify-content-between">
                                <div class="page_title_left">
                                    <h3 class="f_s_30 f_w_700 text_white" >Plan</h3>
                                </div>
                                <Search
                                    placeholder="Search Anything"
                                    onChange={handleChange}
                                    value={search}
                                />
                                <Button variant="addbtn" onClick={addEvent} data-target="#exampleModalLong" data-toggle="modal" />
                            </div>
                        </div>
                    </div>


                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="white_card card_height_100 mb_30">
                                <div class="white_card_body">
                                    <div class="QA_section">
                                        <div class="QA_table mb_30">
                                            <table class="table lms_table_active mt-3">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Plan Name</th>
                                                        <th scope="col">Plan Type</th>
                                                        <th scope="col">Plan Price</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        viewPlan?.length > 0 ?
                                                            viewPlan?.length > 0 && viewPlan && viewPlan.map((item, index) => (
                                                                <tr>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td>{item.name}</td>
                                                                    <td>{item.plan_type}</td>
                                                                    <td>₹ {item.plan_price}</td>
                                                                    <td>{item.status ? <div className="color-green cursor-pointer" onClick={() => changeStatus(item._id, item.status)}>Active</div> : <div className="color-red cursor-pointer" onClick={() => changeStatus(item._id, item.status)}>Inactive</div>}</td>
                                                                    <td class="flex">
                                                                        <div class="mr-2">
                                                                            <Button variant='fa-edit' onClick={() => clickonEdit(item)} />
                                                                        </div>
                                                                        <div>
                                                                            <Button variant='fa-trash' onClick={() => clickonDelete(item)} />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                            :
                                                            <tr>
                                                                <td colSpan={10}>
                                                                    <NoDataFound msg={"Plan Not Found!!"} />
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
                        <div class="col-12">

                        </div>
                    </div>


                </div>
            </div>

            {
                viewModalStatus && (
                    <AddPlan editData={editData} closeModal={closeModal} />
                )
            }
        </>
    )
}

export default Plan;
