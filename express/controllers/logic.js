const mongoose = require('mongoose')

const User = require('../models/userModel')



//get all users

const getUsers = async (req, res) => {

    const users = await User.find({}).sort({createdAt:-1})

    res.status(200).json(users)
}


// get 1 user 

const getUser = async (req , res) => {

  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such user'})
  }

  const user  = await User.findById(id)

  if (!user) {
    return res.status(404).json({error: 'No such user'})
  }

  res.status(200).json(workout)




  
}





// create user


const createUser = async (req , res) => {

   const  {name , age , job} = req.body


   let empty = []


   if(!name){
    empty.push('name')
   }
   if(!age){
    empty.push('age')
   }
   if(!job){
    empty.push('job')
   }



   if(empty.length > 0){
    return res.status(400).json({error:'Empty fields! : ' , empty})
   }

   // add to mongo
   try {

    const user = await User.create({name,age,job})
    res.status(200).json(user)

   }catch(e){

     res.status(400).json({error:e.message})

   }


}


// delete a workout
const deleteUser = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such user'})
    }
  
    const user = await User.findOneAndDelete({_id: id})
  
    if(!user) {
      return res.status(400).json({error: 'No such user'})
    }
  
    res.status(200).json(user)
  }


  // delete all 

  const deleteAll = async (req , res) => {


    const user = await User.deleteMany({}) 
    res.status(200).json(user)
  }


  // update a workout
const updateUser = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such user'})
    }
  
    const user = await User.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!user) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(user)
  }





module.exports = {
    getUser , getUsers ,
    createUser , deleteUser ,
    updateUser , deleteAll
}


