import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Admin/AdminSlice';
import SnackBarReducer from '../SanckBar/SnackbarSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        Alert : SnackBarReducer,
    },
});
