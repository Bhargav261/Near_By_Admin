import React from 'react';

const Search = ({ placeholder, value, onChange, ...rest }) => {
    return (
        <>
            <div class="serach_field-area d-flex align-items-center">
                <div class="search_inner">
                    <form action="#">
                        <div class="search_field">
                            <input type="text" className="search_input" placeholder={placeholder} onChange={onChange} value={value} {...rest} />
                        </div>
                        <button> <i className="fa fa-search"></i></button>
                    </form>
                </div>
                <span class="f_s_14 f_w_400 ml_25 white_text text_white" >Apps</span>
            </div>
        </>
    )
}
export default Search;