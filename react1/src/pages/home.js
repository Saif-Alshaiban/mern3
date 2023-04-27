
import CardComponent from '../components/cardComponent';
import { useEffect } from "react"
import { useUserContext } from '../useUserContext'
import UserForm from './form';
function Home () {

 const {users , dispatch} = useUserContext()
 

 useEffect(() => {
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
    
    {users && users.map(x => {
   return   <CardComponent user={x} key={x._id} />
    })}




    </div>
 

   
  
  


)

}

export default Home;