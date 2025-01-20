import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    insights:[]
}
const getAIResponse=createAsyncThunk('/service/chatbot',async(itemData)=>{
    const response=await axios.post('http://localhost:3000/service/analyze',itemData,{
        headers:[
            'Content-Type:Application/json'
        ]
    })
    console.log(response.data)
    return response.data
})
export const getAiInsights=createAsyncThunk('/service/insights',async(itemData)=>{
    const response=await axios.post('http://localhost:3000/service/insights/analyze',itemData,{
        headers:[
            'Content-Type:Application/json'
        ]
    })
    // console.log(response.data,'response')
    return response.data
})
const serviceReducer=createSlice({
    name:"service",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAiInsights.fulfilled,(state,action)=>{
            state.insights=action.payload.data;
        })
    }
})
export default serviceReducer.reducer;