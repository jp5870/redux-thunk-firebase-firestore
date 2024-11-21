import React from 'react'
import {auth} from '../../redux/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {
  async function signup(){
    await createUserWithEmailAndPassword(auth,'jyoti12@gmail.com','122345')
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
