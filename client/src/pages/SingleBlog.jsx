import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import { useEffect } from 'react';
import { getSingleBlog } from '../redux/features/blogSlice';
import Navbar from '../components/header/Navbar';


const SingleBlog = () => {

const dispatch = useDispatch()

const {blog} = useSelector(state => state.blog)

const {id} = useParams()

useEffect(()=>{
if(id){
dispatch(getSingleBlog(id))
}
},[id])



  return (
    <>
   <Navbar/>
    <Box sx={{m:2,p:5,display:"flex",flexDirection:"column",alignItems:"center",boxShadow: "-6px 3px 22px 4px rgba(0,0,0,0.11)",
webkitBoxShadow: "-6px 3px 22px 4px rgba(0,0,0,0.11)",
mozBoxShadow: "-6px 3px 22px 4px rgba(0,0,0,0.11)",height:"100vh"}}>

<Typography variant='h5' sx={{my:5}}>Title : {blog?.title}</Typography>

<Box sx={{maxWidt:"100%",display:"flex",justifyContent:"center",alignContent:"center"}}>
      <img src={blog?.imageFile} alt="image" style={{maxWidth:"90%"}} />
</Box>


<Typography variant='p' sx={{mt:5}}>Description :<br/> {blog?.description}</Typography>

<Typography variant='b' sx={{mt:5}}>Created by : <i>{blog?.name}</i></Typography>
    </Box>


    </>
  )
}

export default SingleBlog
