import React from 'react'
import {auth} from '../../redux/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {
  async function signup(){
    await createUserWithEmailAndPassword(auth,'jaypatel@gmail.com','5870')
    .then((res)=>{
      console.log(res.user)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <button onClick={signup}>click</button>
    </div>
  )
}

export default Signup
