import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import blogSlice from "./features/blogSlice";

const store = configureStore({
    reducer:{
        auth:authSlice,
        blog: blogSlice
    },

})

export default store