import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import * as api from "./services"

const user = JSON.parse(localStorage.getItem('user'))


const initialState={
user:user ? user : null,
error:"",
loading:false
}


export const login = createAsyncThunk("login/user" ,async ({val,navigate,toast},{rejectWithValue})=>{
try {
    const res = await axios.post("http://localhost:5050/user/signin",val)
   
    console.log(res)

if (res.data) {
     navigate("/")
    toast.success("login sucessfully")
}

    return res.data
} catch (error) {
return rejectWithValue(error.response.data)    
}
})



// register

export const register = createAsyncThunk("login/user" ,async ({val,navigate,toast},{rejectWithValue})=>{
    try {
        const res = await axios.post("http://localhost:5050/user/signup",val)
       
        console.log(res)
    
    if (res.data) {
         navigate("/")
        toast.success("register sucessfully")
    }else{
        toast.error("cannot sign in")
    }
    
        return res.data
    } catch (error) {
    return rejectWithValue(error.response.data)    
    }
    })




const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
logOut:(state,action)=>{
    localStorage.clear()
state.user = null
}
    },
    extraReducers:(builder)=>{
        builder.addCase(login.pending, (state)=>{
     state.loading = true
        })

builder.addCase(login.fulfilled,(state,action)=>{
    state.loading = false
    localStorage.setItem("user",JSON.stringify({...action.payload}))
    state.user = action.payload
})

builder.addCase(login.rejected,(state,action)=>{
state.loading = false
state.error = action.payload.message
})

   }
})

export const {logOut} = authSlice.actions


export default authSlice.reducer