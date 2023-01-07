import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';



function CardCmp({title,description,imageFile,name,_id,createdAt}) {


const expand = (str)=>{
  if (str) {
    
  
if (str.length > 45) {
  str = str.substring(0, 45)+"..."
}
}
return str

}




 
  return (
    <Card sx={{ maxWidth: 345,my:3 }}>
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
        <Typography variant="h6" color="text.secondary">
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
        </CardContent>
    </Card>
  );
}

export default CardCmp