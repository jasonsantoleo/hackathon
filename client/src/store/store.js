import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from '../store/service/serviceReducer'
import authSlice from './auth/auth-slice'
const store=configureStore({
    reducer:{
        service:serviceReducer,
        auth:authSlice
    }
})
export default store;