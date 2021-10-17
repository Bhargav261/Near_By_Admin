import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorAlert, SuccessAlert } from '../SanckBar/SnackbarSlice';
import axios from 'axios';

export const LoginAPI = createAsyncThunk('Login API CALL', async ({ email, password }, { dispatch, rejectWithValue }) => {
    console.log("loginAPI :-", { email, password });
    try {
        const response = await axios.post("admin/login",
            {
                username: email,
                password: password,
            });
        const responseData = response.data;

        console.log("responseData :- ", responseData);

        if (responseData.status === "success") {

            let authToken = responseData.payload.data.token;

            let userInfo = responseData.payload.data.userInfo;

            localStorage.setItem('Near_By_You_Admin', JSON.stringify(userInfo));

            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken;
            axios.defaults.headers.common['x-auth-token'] = authToken;
            localStorage.setItem('Near_By_You_Admin_Token', authToken)

            dispatch(SuccessAlert(responseData.msg));
            return response;
        } else {
            dispatch(ErrorAlert(responseData.msg));
            return rejectWithValue({ message: 'No Data Found' });
        }
    }
    catch (e) {
        dispatch(ErrorAlert('Something Want Wrong!!'));
    }
});

export const slice = createSlice({
    name: 'Login Slice',
    initialState: {
        value: 10,
        isLoginStatus: false,
    },
    reducers: {
        loginStatus: (state, action) => {
            state.isLoginStatus = action.payload;
        },
    },
    extraReducers: {
        [LoginAPI.fulfilled]: (state, action) => {
            state.isLoginStatus = true;
        },
        [LoginAPI.rejected]: (state, action) => {
            state.isLoginStatus = false;
        }
    }
});

export const { registerStatus, loginStatus } = slice.actions;

export default slice.reducer;