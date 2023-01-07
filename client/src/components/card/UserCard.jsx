import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import {deleteBlog} from "../../redux/features/blogSlice"
import { toast } from 'react-hot-toast';


function UserCard({title,description,imageFile,name,_id,createdAt}) {


const dispatch = useDispatch()



const expand = (str)=>{
  if (str) {
    if (str.length > 45) {
  str = str.substring(0, 40)+"..."
}
  }


return str

}

const handleDelete=(id)=>{
if (window.confirm("are you sure you want to delete this Blog")) {
  dispatch(deleteBlog({id,toast}))
}



}


 
  return (
    <Card sx={{ maxWidth: 345,my:5,bgcolor:"whitesmoke" }}>
      <CardHeader        
        subheader={"created: "+" "+moment(createdAt).fromNow()}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageFile}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary" textAlign={"center"}>
          {title}
        </Typography>
      </CardContent>
        <CardContent>
          <Typography paragraph>
            {expand(description)}
            <Link to={`/singleblog/${_id}`}>read more</Link>
          </Typography>
         
          <Typography variant='b'>
   Creator :  "{name}"
          </Typography>
          <Box textAlign={"center"}>
          <Button color='secondary'><Link to={`/editblog/${_id}`}><EditIcon/></Link></Button>
          <Button color='error' onClick={()=> handleDelete(_id)} ><DeleteIcon/></Button></Box>
        </CardContent>
    </Card>
  );
}

export default UserCard