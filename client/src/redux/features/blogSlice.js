import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import * as api from "./services"


export const createBlog = createAsyncThunk("blog/create", async ({ updatedBlogData, toast }, { rejectWithValue }) => {
    try {
        const res = await api.createBlog(updatedBlogData)

        console.log(res)


        toast.success("Blog Created sucessfully")



        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})







export const getBlog = createAsyncThunk("blog/get", async (_, { rejectWithValue }) => {
    try {
        const res = await api.getBlog()

        console.log(res.data)

        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})






export const getSingleBlog = createAsyncThunk("Singleblog/get", async (id, { rejectWithValue }) => {
    try {
        const res = await api.getSingleBlog(id)


        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})







export const getSUserBlog = createAsyncThunk("Userblogs/get", async (UserId, { rejectWithValue }) => {
    try {
        const res = await api.getUserBlogs(UserId)


        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})



export const deleteBlog = createAsyncThunk("Userblog/delete", async ({id,toast}, { rejectWithValue }) => {
    try {
        const res = await api.deleteBlog(id)

toast.success("blog deleted successfully")
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})




export const updateBlog = createAsyncThunk("Userblog/update", async ({id,updatedData,toast}, { rejectWithValue }) => {
    try {
        const res = await api.updateBlog(id,updatedData)


        console.log(res.data,"update")

toast.success("blog updated successfully")
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})



const initialState = {
    blog: {},
    blogs: [],
    userBlogs: [],
    loading: false,
    error: ''
}





const blogSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createBlog.pending, (state) => {
            state.loading = true
        })

        builder.addCase(createBlog.fulfilled, (state, action) => {
            state.loading = false
            state.blogs = [action.payload]
        })

        builder.addCase(createBlog.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload.message
        })






        builder.addCase(getBlog.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getBlog.fulfilled, (state, action) => {
            state.loading = false
            state.blogs = action.payload
        })

        builder.addCase(getBlog.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload.message
        })










        builder.addCase(getSingleBlog.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getSingleBlog.fulfilled, (state, action) => {
            state.loading = false
            state.blog = action.payload
        })

        builder.addCase(getSingleBlog.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload.message
        })









        builder.addCase(getSUserBlog.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getSUserBlog.fulfilled, (state, action) => {
            state.loading = false
            state.userBlogs = action.payload
        })

        builder.addCase(getSUserBlog.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload.message
        })










        builder.addCase(deleteBlog.pending, (state) => {
            state.loading = true
        })

        builder.addCase(deleteBlog.fulfilled, (state, action) => {
            state.loading = false
            const {arg : {id}} = action.meta
            if (id) {
                state.userBlogs = state.userBlogs.filter((e)=>e._id !== id)
                state.blogs = state.blogs.filter((e)=>e._id !== id)
            }
        })

        builder.addCase(deleteBlog.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload.message
        })









        builder.addCase(updateBlog.pending, (state) => {
            state.loading = true
        })

        builder.addCase(updateBlog.fulfilled, (state, action) => {
            state.loading = false
            const {arg : {id}} = action.meta
            if (id) {
                state.userBlogs = state.userBlogs.map((e)=>e._id === id ? action.payload : e)
                state.blogs = state.blogs.map((e)=>e._id === id ? action.payload : e)
            }
        })

        builder.addCase(updateBlog.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload.message
        })

    }
})



export default blogSlice.reducer