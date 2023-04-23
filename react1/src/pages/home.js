
import CardComponent from '../components/cardComponent';
import { useEffect, useState } from "react"
import { useUserContext } from '../useUserContext'
function Home () {

 const {users , dispatch} = useUserContext()
 const [employees , setEmployees ] = useState('')

 useEffect(() => {
    const fetchUsers = async () => {
    const response = await fetch('http://localhost:4000/api/users/')
    const json = await response.json()
     setEmployees(json)
      if (response.ok) {
        dispatch({type: 'SET_USERS', payload: json})
      }
    }

    fetchUsers()
    
  }, [dispatch])

  

return (
    <div style={{padding:'35px' , display:'flex' , gap:'15px' , flexDirection:'column'}}>

    
    {employees && employees.map(x => {
   return   <CardComponent user={x} key={x._id} />
    })}



    </div>
 

   
  
  


)

}

export default Home;