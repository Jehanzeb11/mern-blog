import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import { login } from '../redux/features/authSlice'

const Login = () => {

const dispatch = useDispatch()


const {loading, error} = useSelector(state => state.auth)

const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => { 
    e.preventDefault()

const val ={
  email,
  password
}

if (email && password) {
  dispatch(login({val,navigate,toast}))
}

  }



  useEffect(()=>{
error && toast.error(error)
  },[error])



  if (loading) {
  return <div>loading...</div>
}


  
  return (
    <>
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: "100%"}}>

<Typography variant='h3' sx={{mt:5}}>Login</Typography>

     <form noValidate onSubmit={handleLogin} style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",minWidth:"30%",marginTop:"3rem"}}>
        
          <TextField id="outlined-basic" sx={{my:1}} required={true} label="email" type="email" value={email} variant="outlined" fullWidth onChange={(e) => {
            setEmail(e.target.value)
          }} />
          <TextField id="outlined-basic2" sx={{my:1}} required={true} label="Password" type="password" value={password} fullWidth variant="outlined" onChange={(e) => {
            setPassword(e.target.value)
          }} />





<Link to='/register'><Typography > Don't have Account Make One</Typography></Link>



          <Button type="submit" sx={{my:3}} fullWidth variant="contained" color='secondary'>Login</Button>
        

      </form>
</Box>
    </>
  )
}

export default Login
