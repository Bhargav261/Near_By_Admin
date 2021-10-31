import React, { useState, useEffect, useCallback } from 'react';
import Button from '../Common_Component/Button';
import Search from '../Common_Component/Search';
import { Modal } from 'react-bootstrap'
import Add_Category from './Add_Category';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from "lodash";
import NoDataFound from '../Common_Component/NoDataFound';
import { CategoryListAPI, deleteCategoryAPI, deleteCategoryStatus, changeStatusAPI, changeStatusData } from '../Redux/Listing/Listing';

const Category_List = () => {

    //Object
    const dispatch = useDispatch();

    //get data from store
    const { isCategoryStatus, isChangeStatusAPI, categoryResource, isDeleteCategory } = useSelector(state => state.category);

    console.log("categoryResource :- ", categoryResource);

    //State Manage
    const [callAPI, setCallAPI] = useState(false);
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);
    const [categoryView, setCategoryView] = useState([]);
    const [viewModalStatus, setViewModalStatus] = useState(false);
    const [editData, setEditData] = useState({
        deleteID: '',
        data: '',
        type: ''
    })

    //useeffect
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(deleteCategoryStatus(false));
    }, [])

    useEffect(() => {
        dispatch(CategoryListAPI({ search: '' }));
    }, [callAPI])

    useEffect(() => {
        setCategoryView(categoryResource)
    }, [categoryResource])

    useEffect(() => {
        if (isDeleteCategory) {
            setCallAPI(!callAPI);
            handleClose();
            dispatch(deleteCategoryStatus(false));
        }
    }, [isDeleteCategory])

    useEffect(() => {
        if (isChangeStatusAPI) {
            setCallAPI(!callAPI);
            dispatch(changeStatusData(false));
        }
    }, [isChangeStatusAPI])

    useEffect(() => {
        debounceSearch(search);
    }, [search])

    //Functions

    //onChnage Handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearch(value);
    }

    //Add Event Click
    const addEvent = () => {
        console.log("addEvent Call");
        editData.type = 'add';
        setViewModalStatus(true);
    }

    //Click on Edit
    const clickonEdit = (item) => {
        console.log("Click on Edit");
        editData.type = 'edit';
        editData.data = item;
        setViewModalStatus(true);
    }

    //Click on Delete
    const clickonDelete = (item) => {
        console.log("Click on Trash");
        editData.deleteID = item._id;
        handleShow();
    }

    //Close Delete Modal
    const handleClose = () => {
        editData.deleteID = '';
        setShow(false)
    }

    //Show Delete Modal
    const handleShow = () => {
        setShow(true)
    }

    //Close Modal
    const closeModal = () => {
        console.log('Close Modal');
        editData.type = '';
        editData.data = '';
        setViewModalStatus(false);
        setCallAPI(!callAPI)
    }

    //Click on Yes Button
    const handleYesClick = () => {
        dispatch(deleteCategoryAPI({ id: editData.deleteID }));
    }

    //Click on Chnage Status
    const changeStatus = (id, status) => {
        console.log("Change Status :- ");
        dispatch(changeStatusAPI({ id: id, status: !status }))
    }

    //Debounce Search
    const debounceSearch = useCallback(
        debounce((searchData) => {
            dispatch(CategoryListAPI({ search: searchData }));
        }, 500), []
    );

    return (
        <>

            {/* Delete Modal */}
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Category</Modal.Title>
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
                                    <h3 class="f_s_30 f_w_700 text_white" >Category</h3>
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
                                                        <th scope="col">Category Image</th>
                                                        <th scope="col">Category Name</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        categoryView.length > 0 ?
                                                            categoryView.length > 0 && categoryView.map((item, index) => (
                                                                <tr>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td>
                                                                        {/* <i className='fa fa-tint' style={{fontSize : '20px', color :'#00918e'}}></i> */}
                                                                        <i className={item?.image} style={{fontSize : '20px', color :'#00918e'}}></i>
                                                                        {/* <img src="/img/banner.png" style={{ height: '30px', width: '80px' }} /> */}
                                                                        </td>
                                                                    <td>{item.name}</td>
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
                                                            )) :
                                                            <tr>
                                                                <td colSpan={10}>
                                                                    <NoDataFound msg={"Category Not Found!!"}/>
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
                    <Add_Category editData={editData} closeModal={closeModal} />
                )
            }

        </>
    )
}

export default Category_List;