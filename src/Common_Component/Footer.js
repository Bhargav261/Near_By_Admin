import React from 'react';

const Footer = () => {
    return (
        <>
            <div class="footer_part">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="footer_iner text-center">
                                <p>
                                    Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script> All rights reserved <i class="icon-heart text-danger" aria-hidden="true"></i> by <a
                                    href="https://colorlib.com/" target="_blank">Near By You</a>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;