import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import FileBase from "react-file-base64"
import { useState } from 'react';
import Navbar from '../components/header/Navbar';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { createBlog, updateBlog } from '../redux/features/blogSlice';
import { useParams } from 'react-router-dom';

  


const AddEditBlog = () => {


  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')

  


const initialState = {
  title,
  description
}


const [blogData,setBlogData] = useState({...initialState})


const {id} = useParams()



const dispatch = useDispatch()
const {error,loading,userBlogs} = useSelector(state => state.blog)
const {user} = useSelector(state => state.auth)




useEffect(()=>{
if (id) {
  const singleBlog = userBlogs.find((blog)=> blog._id === id)

  
  
setTitle(singleBlog.title)
setDescription(singleBlog.description)
  
  
//   also tried not working
//   setBlogData({...singleBlog})


console.log(singleBlog);

}
},[id])




useEffect(()=>{
error && toast.error(error)
},[error])
     
if (loading) {
  return <div>loading...</div>
}

     
      
      const handelBlogSubmit =(e)=>{
e.preventDefault();

if (title && description) {
  const updatedBlogData = {...blogData,name:user?.result?.name}


  if (!id) {
    dispatch(createBlog ({updatedBlogData,toast}))
  }else{
    
    dispatch(updateBlog({id,updatedBlogData,toast}))
  }
}
setTitle("")
setDescription("")

      }
    return (

<>


<Navbar/>


<Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>



        <Card sx={{ maxWidth: 345,mt:5, bgcolor:"whitesmoke",textAlign:"center",mx:2 }}>
            <Typography  variant="h5" component="div" mt={3}>
              {id ? "Update Blog":"Add Blog"}
            </Typography>
        <form noValidate onSubmit={handelBlogSubmit}>  <CardContent>
            
                <TextField id="outlined-basic" value={title} label="Enter Title" onChange={(e)=>{
                    setTitle(e.target.value)
                }} variant="filled" sx={{m:2}} required fullWidth  />
                <textarea name="textarea" style={{padding:"10px"}} required value={description} onChange={(e)=>{
                    setDescription(e.target.value)
                }} id="tt" placeholder='Enter Description' cols="50" rows="10"></textarea>            
<div >

              <FileBase
                type="file"
                multiple={false}
                onDone={({base64})=>{setBlogData({title,description,imageFile:base64})}}
              />
            </div>
            
            
          </CardContent>
          <CardActions>
            <Button size="small" type='submit'>{id ? "update":"submit"}</Button>
          </CardActions>
          </form>
        </Card>
        </Box>
        
        </>
      );
}

export default AddEditBlog
