import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/header/Navbar'
import { getBlog } from '../redux/features/blogSlice'
import Card from '../components/card/Card'

const Home = () => {
  
  const {blogs,loading} = useSelector(state => state.blog)
  
  const dispatch = useDispatch()
useEffect(()=>{

dispatch(getBlog())

},[])


if (loading) {
  return <div>loading...</div>
}

  return (
    <div>
      <Navbar/>
      <Typography variant='h2' textAlign={'center'} my={3}> Daily Blogs</Typography>
      <Container>
{blogs.length ===0 && (
  <Typography variant='h4'>No blogs</Typography>
)}
<Grid container sx={{mt:5}}>
  {blogs && blogs.map((item,ind)=>{
return(
 <Grid item lg={4} md={6 }sm={12} key={ind}> <Card {...item} /></Grid>
)

})}

</Grid>



      </Container>
    </div>
  )
}

export default Home
