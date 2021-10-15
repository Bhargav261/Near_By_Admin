import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Admin/AdminSlice';
import SnackBarReducer from '../SanckBar/SnackbarSlice';
import LoginReduxer from '../Login/loginSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        Alert : SnackBarReducer,
        login : LoginReduxer
    },
});
