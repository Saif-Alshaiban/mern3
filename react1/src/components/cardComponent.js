import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function CardComponent ({user}) {

    return (
        <Card sx={{ width:'400px', height:'220px' }}>
         
        <CardContent>
        <h3>Name : {user.name} </h3>
    <Typography>
       Age : {user.age}
    </Typography>

    <Typography>
       Job : {user.job}
    </Typography>

    <Typography>
       ID : {user._id}
    </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
    )

}

export default CardComponent;