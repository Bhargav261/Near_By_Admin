import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Admin/AdminSlice';
import SnackBarReducer from '../SanckBar/SnackbarSlice';
import LoginReducer from '../Login/loginSlice';
import CategoryReducer from '../Listing/Listing';

export default configureStore({
    reducer: {
        counter: counterReducer,
        Alert : SnackBarReducer,
        login : LoginReducer,
        category : CategoryReducer
    },
});
