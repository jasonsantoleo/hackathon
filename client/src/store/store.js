import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from '../store/service/serviceReducer'
const store=configureStore({
    reducer:{
        service:serviceReducer 
    }
})
export default store;