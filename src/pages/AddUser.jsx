import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/userSlice'

const AddUser = () => {
  const { register, handleSubmit, reset } = useForm()

  const dispatch = useDispatch()

  async function regist(data){
    dispatch(addUser(data))
    alert("data inserted")
    reset()
  }
  return (
    <>
      <form action="" method="post" onSubmit={handleSubmit(regist)} className='col-6 mx-auto p-5 my-5 shadow'>
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
    </>
  )
}

export default AddUser
