import React, { useEffect } from 'react'
import { ToastContainer, toast, toastClosed } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { CloseAlert } from '../Redux/SanckBar/SnackbarSlice';

const AlertSnackBar = () => {

    const dispatch = useDispatch();

    const { type, status, msg } = useSelector(state => state.Alert);    

    useEffect(() => {
        if (status) {
            if(type == 'success'){
                toast.success(msg)
            }else{
                toast.error(msg)
            }
            dispatch(CloseAlert())
        }
    }, [status])

    return (
        <>
            <ToastContainer hideProgressBar={false}  position="top-center" />
        </>
    )
}

export default AlertSnackBar;