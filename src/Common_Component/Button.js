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
                variant == 'accept-button' && (
                    <button disabled={isLoading} type="button" class="btn btn-primary button-custom" onClick={onClick} {...rest} >
                        <i className="fa fa-check"></i>
                    </button>
                )
            }

            {
                variant == 'reject-button' && (
                    <button disabled={isLoading} type="button" class="btn btn-primary button-custom" onClick={onClick} {...rest} >
                        <i className="fa fa-times"></i>
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

            {
                variant == 'fa-edit' && (
                    <div onClick={onClick} {...rest}>
                        <i className="fas fa-edit cursor-pointer" style={{ fontSize: '11px' }}></i>
                    </div>
                )
            }

            {
                variant == 'fa-trash' && (
                    <div onClick={onClick} {...rest}>
                        <i className="ti-trash cursor-pointer" style={{ fontSize: '11px' }}></i>
                    </div>
                )
            }

        </>
    )
}
export default Button;