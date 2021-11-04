import React,{useState, useEffect} from 'react';
import Input from '../Common_Component/Input';
import Select from '../Common_Component/Select';
import Button from '../Common_Component/Button';

const AppPage = () => {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])

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
    const handleChange = (e) => {
        const { name, value } = e.target;

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
    }

    return (
        <>

            <div class="main_content_iner overly_inner ">
                <div class="container-fluid p-0 ">
                    <div class="row">
                        <div class="col-12">
                            <div class="page_title_box d-flex align-items-center justify-content-between">
                                <div class="page_title_left">
                                    <h3 class="f_s_30 f_w_700 text_white" >App Page</h3>
                                    {/* <ol class="breadcrumb page_bradcam mb-0">
                                        <li class="breadcrumb-item"><a href="javascript:void(0);">Salessa </a></li>
                                        <li class="breadcrumb-item"><a href="javascript:void(0);">Dashboard</a></li>
                                        <li class="breadcrumb-item active">Sales</li>
                                    </ol> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="white_card card_height_100 mb_30">
                                <div class="white_card_header">
                                    <div class="box_header m-0">
                                        <div class="main-title">
                                            <h3 class="m-0">Form row</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="white_card_body">
                                    <div class="card-body">
                                        <form onSubmit={formSubmit}>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <Input type="email" value={form.email} label="Email" name="email" placeholder="Enter Email" onChange={handleChange} required />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <Input type="password" value={form.password} label="Password" name="password" placeholder="Enter Password" onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <Input type="textarea" value={form.address} label="Address" name="address" placeholder="Enter Address" onChange={handleChange} required />
                                            </div>
                                            <div class="form-group">
                                                <Input type="textarea" value={form.address2} label="Address 2" name="address2" placeholder="Enter Address 2" onChange={handleChange} required />
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <Input type="text" value={form.city} label="City" name="city" placeholder="Enter City" onChange={handleChange} required />
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <Select label="State" value={form.state} name="state" options={stateOptions} onChange={handleChange} required />
                                                </div>
                                                <div class="form-group col-md-2">
                                                    <Input type="text" value={form.zip} label="Zip" name="zip" placeholder="Enter Zip" onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <Input type="checkbox" value={form.checkme} label="Check Me Out" name="checkme" onChange={handleChange} required />
                                            </div>
                                            <Button variant="button" label="Submit"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AppPage;