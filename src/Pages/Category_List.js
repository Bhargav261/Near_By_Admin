import React, { useState, useEffect } from 'react';
import Button from '../Common_Component/Button';
import Search from '../Common_Component/Search';
import Input from '../Common_Component/Input';
import Select from '../Common_Component/Select';
import Add_Category from './Add_Category';

const Category_List = () => {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])

    //State Manage
    const [search, setSearch] = useState('')
    const [viewModalStatus, setViewModalStatus] = useState(false);

    //onChnage Handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearch(value);
    }

    const addEvent = () => {
        console.log("addEvent Call");
        setViewModalStatus(true);
    }


    //State Options
    const stateOptions = [
        {
            label: 'Gujarat',
            value: 'Gujarat'
        }
    ]

    //State Manage
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
    }

    //Close Modal
    const closeModal = () => {
        console.log('Close Modal');
        setViewModalStatus(false);
    }

    return (
        <>
            {/* Modal Code */}
            {/* <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLong" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Add Category</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={formSubmit}>
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

                                <div class="modal-footer">
                                    <Button variant="close" label="Close" data-dismiss="modal" />
                                    <Button variant="button" label="Submit" />
                                </div>


                            </form>

                        </div>
                    </div>
                </div>
            </div> */}

            {/* Data Listing */}
            <div class="main_content_iner overly_inner ">
                <div class="container-fluid p-0 ">
                    <div class="row">
                        <div class="col-12">
                            <div class="page_title_box d-flex align-items-center justify-content-between">
                                <div class="page_title_left">
                                    <h3 class="f_s_30 f_w_700 text_white" >Category</h3>
                                    {/* <ol class="breadcrumb page_bradcam mb-0">
                                        <li class="breadcrumb-item"><a href="javascript:void(0);">Salessa </a></li>
                                        <li class="breadcrumb-item"><a href="javascript:void(0);">Dashboard</a></li>
                                        <li class="breadcrumb-item active">Sales</li>
                                    </ol> */}
                                </div>
                                <Search
                                    placeholder="Search Anything"
                                    onChange={handleChange}
                                    value={search}
                                />
                                {/* <div class="serach_field-area d-flex align-items-center">
                                    <div class="search_inner">
                                        <form action="#">
                                            <div class="search_field">
                                                <input type="text" className="search_input" placeholder="Search Anything" onChange={handleChange} value={search} />
                                            </div>
                                            <button> <i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                    <span class="f_s_14 f_w_400 ml_25 white_text text_white" >Apps</span>
                                </div> */}
                                {/* <Input type="search" name="search" placeholder="Search Anything" onChange={handleChange} value={search} /> */}
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
                                                        <th scope="col">title</th>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Teacher</th>
                                                        <th scope="col">Lesson</th>
                                                        <th scope="col">Enrolled</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row"> <a href="#" class="question_content"> title here 1</a></th>
                                                        <td>Category name</td>
                                                        <td>Teacher James</td>
                                                        <td>Lessons name</td>
                                                        <td>16</td>
                                                        <td>$25.00</td>
                                                        <td>Active</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"> <a href="#" class="question_content"> title here 1</a></th>
                                                        <td>Category name</td>
                                                        <td>Teacher James</td>
                                                        <td>Lessons name</td>
                                                        <td>16</td>
                                                        <td>$25.00</td>
                                                        <td>Active</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"> <a href="#" class="question_content"> title here 1</a></th>
                                                        <td>Category name</td>
                                                        <td>Teacher James</td>
                                                        <td>Lessons name</td>
                                                        <td>16</td>
                                                        <td>$25.00</td>
                                                        <td>Active</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"> <a href="#" class="question_content"> title here 1</a></th>
                                                        <td>Category name</td>
                                                        <td>Teacher James</td>
                                                        <td>Lessons name</td>
                                                        <td>16</td>
                                                        <td>$25.00</td>
                                                        <td>Active</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"> <a href="#" class="question_content"> title here 1</a></th>
                                                        <td>Category name</td>
                                                        <td>Teacher James</td>
                                                        <td>Lessons name</td>
                                                        <td>16</td>
                                                        <td>$25.00</td>
                                                        <td>Active</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"> <a href="#" class="question_content"> title here 1</a></th>
                                                        <td>Category name</td>
                                                        <td>Teacher James</td>
                                                        <td>Lessons name</td>
                                                        <td>16</td>
                                                        <td>$25.00</td>
                                                        <td>Active</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"> <a href="#" class="question_content"> title here 1</a></th>
                                                        <td>Category name</td>
                                                        <td>Teacher James</td>
                                                        <td>Lessons name</td>
                                                        <td>16</td>
                                                        <td>$25.00</td>
                                                        <td>Active</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"> <a href="#" class="question_content"> title here 1</a></th>
                                                        <td>Category name</td>
                                                        <td>Teacher James</td>
                                                        <td>Lessons name</td>
                                                        <td>16</td>
                                                        <td>$25.00</td>
                                                        <td>Active</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"> <a href="#" class="question_content"> title here 1</a></th>
                                                        <td>Category name</td>
                                                        <td>Teacher James</td>
                                                        <td>Lessons name</td>
                                                        <td>16</td>
                                                        <td>$25.00</td>
                                                        <td>Active</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"> <a href="#" class="question_content"> title here 1</a></th>
                                                        <td>Category name</td>
                                                        <td>Teacher James</td>
                                                        <td>Lessons name</td>
                                                        <td>16</td>
                                                        <td>$25.00</td>
                                                        <td>Active</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"> <a href="#" class="question_content"> title here 1</a></th>
                                                        <td>Category name</td>
                                                        <td>Teacher James</td>
                                                        <td>Lessons name</td>
                                                        <td>16</td>
                                                        <td>$25.00</td>
                                                        <td>Active</td>
                                                    </tr>
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
                    <Add_Category closeModal={closeModal} />
                )
            }

        </>
    )
}

export default Category_List;