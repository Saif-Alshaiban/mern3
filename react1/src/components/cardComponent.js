import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useUserContext } from '../useUserContext';



function CardComponent ({user}) {
   const { dispatch } = useUserContext()

   const deleteUser = async () => {
      const response = await fetch('http://localhost:4000/api/users/' + user._id, {
         method: 'DELETE'
       })
       const json = await response.json()
   
       if (response.ok) {
         dispatch({type: 'DELETE_USER', payload: json})
       }


   }

    return (
        <Card sx={{ width:'65%', height:'220px'}}>
         
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
          <Button onClick={deleteUser} variant='outlined' size="small">Delete</Button>
        </CardActions>
      </Card>
    )

}

export default CardComponent;