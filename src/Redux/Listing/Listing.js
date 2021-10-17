import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorAlert, SuccessAlert } from '../SanckBar/SnackbarSlice';
import axios from 'axios';

//View Category
export const CategoryListAPI = createAsyncThunk('Category Listing API Call', async ({ data }, { dispatch, rejectWithValue }) => {
    console.log("Call API :- ", data);
    try {

        console.log("Call Category API CALL");

        const response = await axios.post("admin/category");
        const responseData = response.data;

        console.log("responseData :- ", responseData);

        if (responseData.status === "success") {
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

//Add Edit Category
export const AddCategoryAPI = createAsyncThunk('Add CategoryAPI Call', async ({ id, name, status }, { dispatch, rejectWithValue }) => {
    console.log("Call API :- ", id, name, status);
    try {

        const response = await axios.post("admin/addEditCategory",
            {
                id: id,
                name: name,
                status: true
            });
        const responseData = response.data;

        console.log("responseData :- ", responseData);

        if (responseData.status === "success") {
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

//Delete Category
export const deleteCategoryAPI = createAsyncThunk('Delete CategoryAPI Call', async ({ id }, { dispatch, rejectWithValue }) => {
    console.log("Delete Category API :- ", id);
    try {
        const response = await axios.post("admin/deleteCategory", {
            id: id
        });
        const responseData = response.data;

        console.log("responseData :- ", responseData);

        if (responseData.status === "success") {
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

//Delete Category
export const changeStatusAPI = createAsyncThunk('Change SttausAPI Call', async ({ id, status }, { dispatch, rejectWithValue }) => {
    console.log("Chnage  Category API :- ", id, status);
    try {
        const response = await axios.post("admin/changeCategoryStatus", {
            id: id,
            status : status
        });
        const responseData = response.data;

        console.log("responseData :- ", responseData);

        if (responseData.status === "success") {
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
    name: 'Listing Slice',
    initialState: {
        isCategoryStatus: false,
        categoryResource: [],
        isAddCategoryStatus: false,
        isDeleteCategory: false,
        isChangeStatusAPI: false
    },
    reducers: {
        categoryStatus: (state, action) => {
            state.isCategoryStatus = action.payload;
        },
        addCategoryStatus: (state, action) => {
            state.isAddCategoryStatus = action.payload;
        },
        deleteCategoryStatus: (state, action) => {
            state.isDeleteCategory = action.payload;
        },
        changeStatusData: (state, action) => {
            state.isChangeStatusAPI = action.payload;
        },
    },
    extraReducers: {
        [CategoryListAPI.fulfilled]: (state, action) => {
            state.isCategoryStatus = true;
            state.categoryResource = action.payload.data.payload.data.data;;
        },
        [CategoryListAPI.rejected]: (state, action) => {
            state.isCategoryStatus = false;
            state.categoryResource = [];
        },
        [AddCategoryAPI.fulfilled]: (state, action) => {
            state.isAddCategoryStatus = true;
        },
        [AddCategoryAPI.rejected]: (state, action) => {
            state.isAddCategoryStatus = false;
        },
        [deleteCategoryAPI.fulfilled]: (state, action) => {
            state.isDeleteCategory = true;
        },
        [deleteCategoryAPI.rejected]: (state, action) => {
            state.isDeleteCategory = false;
        },
        [changeStatusAPI.fulfilled]: (state, action) => {
            state.isChangeStatusAPI = true;
        },
        [changeStatusAPI.rejected]: (state, action) => {
            state.isChangeStatusAPI = false;
        }
    }
});

export const { categoryStatus, addCategoryStatus, deleteCategoryStatus, changeStatusData } = slice.actions;

export default slice.reducer;