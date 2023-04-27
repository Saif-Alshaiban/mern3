import '../index.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react'
import { useUserContext } from '../useUserContext'

const UserForm = () => {
  const { dispatch } = useUserContext()

  const [name, setname] = useState('')
  const [age, setage] = useState('')
  const [job, setjob] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
 
    const User = {name, age, job}
    
    const response = await fetch('http://localhost:4000/api/users/', {
      method: 'POST',
      body: JSON.stringify(User),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!name || !age || !job)  {
      setError(json.error)
      setEmptyFields(emptyFields.push('name'))
      
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setname('')
      setage('')
      setjob('')
      dispatch({type: 'CREATE_USER', payload: json})
    }

  }



const generateRandom = () => {

const names = [
  'saif','ahmad','sultan','khalid'
]
const jobs = [
  'dev','eng','dr','ceo'
]

  let x = Math.floor((Math.random() * 40) + 18);

  let name = Math.floor((Math.random() * 4) + 0);
  let job = Math.floor((Math.random() * 4) + 0);

  setname(names[name])
  setjob(jobs[job])
  setage(x)
  handleSubmit()
  

}




  const deleteAll = async () => {


    const response = await fetch('http://localhost:4000/api/users/',{
      method:'DELETE'
    })
    const json = await response.json()
     
      if (response.ok) {
      dispatch({type: 'DELETE_ALL', payload: json})
      
      }

  }

  return (
    <form className="create" onSubmit={handleSubmit}
    > 
      <h3>Add a New User</h3>

      
      <TextField id="outlined-basic" label="Name" variant="outlined" type="text" 
        onChange={(e) => setname(e.target.value)} 
        value={name}
        error={name === ''}
        helperText={name === "" ? 'Empty field!' : ' '}
        />
        

        <TextField id="outlined-basic" label="Age" variant="outlined" type="number" 
        onChange={(e) => setage(e.target.value)} 
        value={age}
        error={age === ''}
        helperText={age === "" ? 'Empty field!' : ' '}
       />


<TextField id="outlined-basic" label="Job" variant="outlined" type="text" 
        onChange={(e) => setjob(e.target.value)} 
        value={job}
        error={job === ''}
        helperText={job === "" ? 'Empty field!' : ' '}
        />

     

      <Button type='submit' variant='outlined'>Add User</Button>
      <Button onClick={deleteAll} variant='outlined'>Delete All Users</Button>
      <Button onClick={generateRandom} variant='outlined'>Generate Random User</Button>

     
      {error && <div className="error">{error}</div>}
    </form>
    
  )
}

export default UserForm