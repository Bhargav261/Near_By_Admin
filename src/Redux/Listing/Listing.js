import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorAlert, SuccessAlert } from '../SanckBar/SnackbarSlice';
import axios from 'axios';

//View Category
export const CategoryListAPI = createAsyncThunk('Category Listing API Call', async ({ search }, { dispatch, rejectWithValue }) => {
    console.log("Call API :- ", search);
    try {

        console.log("Call Category API CALL");

        const response = await axios.post("admin/category", {
            search: search
        });
        const responseData = response.data;

        console.log("responseData :- ", responseData);

        if (responseData.status === "success") {
            // dispatch(SuccessAlert(responseData.msg));
            return response;
        } else {
            // dispatch(ErrorAlert(responseData.msg));
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
                status: status
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

//Change Staus Category
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
            status: status
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



//View Plan
export const PlanListAPI = createAsyncThunk('Plan Listing API Call', async ({ search }, { dispatch, rejectWithValue }) => {
    try {

        const response = await axios.post("admin/plan", {
            search: search
        });
        const responseData = response.data;

        if (responseData.status === "success") {
            // dispatch(SuccessAlert(responseData.msg));
            return response;
        } else {
            // dispatch(ErrorAlert(responseData.msg));
            return rejectWithValue({ message: 'No Data Found' });
        }
    }
    catch (e) {
        dispatch(ErrorAlert('Something Want Wrong!!'));
    }
});

//Add Edit Plan
export const AddPlanAPI = createAsyncThunk('Add Plan Call', async ({ id, name, planType, price, status }, { dispatch, rejectWithValue }) => {
    try {

        const response = await axios.post("admin/addEditPlan",
            {
                id: id,
                name: name,
                price: price,
                type: planType,
                status: status
            });

        const responseData = response.data;

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

//Delete Plan
export const deletePlanAPI = createAsyncThunk('Delete PlanAPI Call', async ({ id }, { dispatch, rejectWithValue }) => {
    try {
        const response = await axios.post("admin/deletePlan", {
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

//Change Status Plan
export const changeStatusPlanAPI = createAsyncThunk('Change Status Plan API Call', async ({ id, status }, { dispatch, rejectWithValue }) => {

    try {
        const response = await axios.post("admin/changePlanStatus", {
            id: id,
            status: status
        });
        const responseData = response.data;

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


//Vendor Shop Request Data
export const VendorListAPI = createAsyncThunk('Vendor Listing API Call', async ({ type, search, todays }, { dispatch, rejectWithValue }) => {

    console.log("Vendor List API :- ", search, type);
    try {

        const response = await axios.post("admin/vendorList", {
            type: type,
            search: search,
            todays: todays
        });
        const responseData = response.data;

        if (responseData.status === "success") {
            // dispatch(SuccessAlert(responseData.msg));
            return response;
        } else {
            // dispatch(ErrorAlert(responseData.msg));
            return rejectWithValue({ message: 'No Data Found' });
        }
    }
    catch (e) {
        dispatch(ErrorAlert('Something Want Wrong!!'));
    }
});

//Accept Reject Request Vendor Shop Data
export const VendorShopRequestAPI = createAsyncThunk('Accept Request API Shop Call', async ({ id, type }, { dispatch, rejectWithValue }) => {
    try {

        const response = await axios.post("admin/acceptRejectRequest",
            {
                id: id,
                type: type
            });

        const responseData = response.data;

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
        isChangeStatusAPI: false,

        isPlanStatus: false,
        planResource: [],
        isAddPlanStatus: false,
        isDeletePlan: false,
        isChangePlanStatusAPI: false,

        isVendorListStatus: false,
        vendorList: [],
        isVendorShopRequest: false,

        isLoadingCategory: true,
        isLoadingPlan: true,
        isLoadingVendor: true
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

        planStatus: (state, action) => {
            state.isPlanStatus = action.payload;
        },
        addPlanStatus: (state, action) => {
            state.isAddPlanStatus = action.payload;
        },
        deletePlanStatus: (state, action) => {
            state.isDeletePlan = action.payload;
        },
        changePlanStatusData: (state, action) => {
            state.isChangePlanStatusAPI = action.payload;
        },

        vendorListStatus: (state, action) => {
            state.isVendorListStatus = action.payload;
        },
        vendorShopRequestStatus: (state, action) => {
            state.isVendorShopRequest = action.payload;
        },

        isLoadingCategoryStatus: (state, action) => {
            state.isLoadingCategory = action.payload;
        },
        isLoadingPlanStatus: (state, action) => {
            state.isLoadingPlan = action.payload;
        },
        isLoadingVendorStatus: (state, action) => {
            state.isLoadingVendor = action.payload;
        }
    },
    extraReducers: {
        [CategoryListAPI.fulfilled]: (state, action) => {
            state.isCategoryStatus = true;
            state.categoryResource = action.payload.data.payload.data.data;
            state.isLoadingCategory = false;
        },
        [CategoryListAPI.rejected]: (state, action) => {
            state.isCategoryStatus = false;
            state.categoryResource = [];
            state.isLoadingCategory = false;
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
        },


        [PlanListAPI.fulfilled]: (state, action) => {
            state.isPlanStatus = true;
            state.planResource = action.payload.data.payload.data.data;
            state.isLoadingPlan = false;
            // state.planResource = [];
        },
        [PlanListAPI.rejected]: (state, action) => {
            state.isPlanStatus = false;
            state.planResource = [];
            state.isLoadingPlan = false;
        },
        [AddPlanAPI.fulfilled]: (state, action) => {
            state.isAddPlanStatus = true;
        },
        [AddPlanAPI.rejected]: (state, action) => {
            state.isAddPlanStatus = false;
        },
        [deletePlanAPI.fulfilled]: (state, action) => {
            state.isDeletePlan = true;
        },
        [deletePlanAPI.rejected]: (state, action) => {
            state.isDeletePlan = false;
        },
        [changeStatusPlanAPI.fulfilled]: (state, action) => {
            state.isChangePlanStatusAPI = true;
        },
        [changeStatusPlanAPI.rejected]: (state, action) => {
            state.isChangePlanStatusAPI = false;
        },

        [VendorListAPI.fulfilled]: (state, action) => {
            state.isVendorListStatus = true;
            state.vendorList = action.payload.data.payload.data.data;
            state.isLoadingVendor = false;
            // state.vendorList = [];
        },
        [VendorListAPI.rejected]: (state, action) => {
            state.isVendorListStatus = false;
            state.vendorList = [];
            state.isLoadingVendor = false;
        },
        [VendorShopRequestAPI.fulfilled]: (state, action) => {
            state.isVendorShopRequest = true;
        },
        [VendorShopRequestAPI.rejected]: (state, action) => {
            state.isVendorShopRequest = false;
        }


    }
});

export const { categoryStatus, addCategoryStatus, deleteCategoryStatus, changeStatusData,
    planStatus, addPlanStatus, deletePlanStatus, changePlanStatusData,
    vendorListStatus, vendorShopRequestStatus,
    isLoadingCategoryStatus, isLoadingVendorStatus, isLoadingPlanStatus
} = slice.actions;

export default slice.reducer;