import React, { useState, useEffect } from 'react';
import Button from '../Common_Component/Button';
import Search from '../Common_Component/Search';

const Tables = () => {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])

    //State Manage
    const [search, setSearch] = useState('')

    //onChnage Handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearch(value);
    }

    const addEvent = () => {
        console.log("addEvent Call");
    }

    return (
        <>
            <div class="main_content_iner overly_inner ">
                <div class="container-fluid p-0 ">
                    <div class="row">
                        <div class="col-12">
                            <div class="page_title_box d-flex align-items-center justify-content-between">
                                <div class="page_title_left">
                                    <h3 class="f_s_30 f_w_700 text_white" >Table</h3>
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
                                <Button variant="addbtn" onClick={addEvent} />
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
        </>
    )
}

export default Tables;