import axios from "axios";


const ins = axios.create({baseURL : 'http://localhost:5050'})

ins.interceptors.request.use((req)=>{
if (localStorage.getItem("user")) {
    req.headers.Authorization =`Bearer ${JSON.parse(localStorage.getItem('user')).token
}`
}
return req
})

export const createBlog = (blogData) => ins.post("/blog", blogData);
export const getBlog = () => ins.get("/blog");
export const getSingleBlog = (id) => ins.get(`/blog/${id}`);
export const deleteBlog = (id) => ins.delete(`/blog/${id}`);
export const updateBlog = (id,updatedData) => ins.put(`/blog/${id}`,updatedData);
export const getUserBlogs = (UserId) => ins.get(`/blog/userBlogs/${UserId}`);