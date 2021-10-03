import React from 'react';
import { Spinner } from 'react-bootstrap'

const Button = ({ variant, label, onClick, isLoading, ...rest }) => {
    return (
        <>
            {
                variant == 'button' && (
                    <button disabled={isLoading} type="submit" class="btn btn-primary button-custom" onClick={onClick} {...rest} >
                        {
                            isLoading && (
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            )
                        }
                        {" " + label}
                    </button>
                )
            }

            {
                variant == 'addbtn' && (
                    <button class="add-btn" onClick={onClick} {...rest} ><i className="fa fa-plus"></i></button>
                )
            }

            {
                variant == 'close' && (
                    <button type="button" class="btn btn-secondary button-custom" onClick={onClick} {...rest} >{label}</button>
                )
            }

        </>
    )
}
export default Button;