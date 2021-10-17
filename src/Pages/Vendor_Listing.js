import React from 'react';

const VendorListing = () => {

    const demo = [{
        vname: 'ABC',
        category: 'salon',
        shopName: 'LookUp',
        contactNumber: '756765208'
    },
    {
        vname: 'DEF',
        category: 'Ele',
        shopName: 'Uma',
        contactNumber: '2068765756'
    }]

    return (
        <>
            <div class="white_card_body QA_section">
                <div class="QA_table ">

                    <table class="table lms_table_active2 p-0">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Vendor Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Shop Name</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                demo.length > 0 && demo.map((item, index) => (
                                    <tr>
                                        <td class="f_s_14 f_w_400">{index + 1}</td>
                                        <td class="f_s_14 f_w_400">{item.vname}</td>
                                        <td class="f_s_14 f_w_400">{item.category}</td>
                                        <td class="f_s_14 f_w_400">{item.shopName}</td>
                                        <td class="f_s_14 f_w_400">{item.contactNumber}</td>
                                        <td class="f_s_14 f_w_400">
                                            <div className="cursor-pointer"><i className="fa fa-eye"></i></div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default VendorListing;