
import CardComponent from '../components/cardComponent';
import { useEffect } from "react"
import { useUserContext } from '../useUserContext'
import UserForm from './form';

function Home () {

 const {users , dispatch} = useUserContext()
 
 useEffect(() => {
  console.log(users)
    const fetchUsers = async () => {
    const response = await fetch('http://localhost:4000/api/users/')
    const json = await response.json()
     
      if (response.ok) {
      dispatch({type: 'SET_USERS', payload: json})
      console.log(users)
      }
    }

    fetchUsers()
    
  }, [ dispatch ])

  

return (
    <div style={{padding:'35px' , display:'flex' , gap:'15px' , flexDirection:'column' , width:'100%'}}>


<UserForm/>
    
   

<div style={{padding:'35px' , display:'flex' , gap:'15px' , flexDirection:'column' , width:'100%' , overflowY:'scroll' , height:'300px'}}>
{users && users.map(x => {
   return   <CardComponent user={x} key={x._id} />
    })}


  </div>



    </div>
 

   
  
  


)

}

export default Home;