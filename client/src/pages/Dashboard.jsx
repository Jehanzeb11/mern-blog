import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getSUserBlog} from '../redux/features/blogSlice'
import Navbar from "../components/header/Navbar"
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import UserCard from '../components/card/UserCard'

const Dashboard = () => {

    const {user} = useSelector(state => state.auth)
    const {userBlogs} = useSelector(state => state.blog)

    const dispatch = useDispatch()


    const userId = user?.result?._id

    useEffect(()=>{
if (userId) {
    dispatch(getSUserBlog(userId))
}
    },[userId])



  return (
    <>
    <Navbar/>
<Typography variant='h3' textAlign={"center"} mt={5}>{user?.result?.name}'s Dashboard</Typography>

<Box sx={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",flexDirection:"column"}}>

{userBlogs.length ===0 &&(
      <Typography variant='h4'>No blogs</Typography>

)}


 {userBlogs && userBlogs.map((item)=>{
    return(

       <UserCard key={item._id} {...item}/>
    )
})}
</Box>


    </>
  )
}

export default Dashboard
