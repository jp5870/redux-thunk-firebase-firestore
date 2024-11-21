import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editUser, viewUser } from '../redux/userSlice'

const Update = () => {
  const { id } = useParams()
  const { register, handleSubmit, reset } = useForm()
  const redirect = useNavigate()

  const dispatch = useDispatch()

  const {userList} = useSelector((state) => state.users)

  console.log("userList.............")
  console.log(userList)
  const singleUser = userList.find((user) => {
    return user.id === id
  })

  useEffect(()=>{
    dispatch(viewUser())
    reset(singleUser)
  },[])

  function update(data){
    dispatch(editUser(data))
    alert("update")
    redirect('/view')
  }


  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit(update)} className='col-6 mx-auto p-5 my-5 shadow'>
        <div className='mt-4'>
          <input type="text" {...register('blog_title')} className='form-control' placeholder="Enter Blog Title" />
        </div>
        <div className='mt-4'>
          <input type="date" {...register('blog_date')} className='form-control' placeholder="Enter Blog date" />
        </div>
        <div className="mt-4">
          <textarea {...register('blog_desc')} className='form-control' placeholder="Enter Blg Description"></textarea>
        </div>
        <div className="mt-4">
          <button className='btn btn-success w-100'>submit</button>
        </div>
      </form>
    </div>
  )
}

export default Update
