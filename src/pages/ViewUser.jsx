import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { viewUser, deleteUser } from '../redux/userSlice';

const ViewUser = () => {

  const { userList } = useSelector((state) => state.users);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(viewUser())
  }, [dispatch])

  console.log(userList)

  function trash(id) {
    dispatch(deleteUser(id));
    alert("deleted")
  }
  return (
    <>
      <table className='table table-hover table-striped table-success container'>
        <thead>
          <tr>
            <th>s.no</th>
            <th>blog name</th>
            <th>blog date</th>
            <th>blog desc</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {
            userList.map((blog, index) => {
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{blog.blog_title}</td>
                    <td>{blog.blog_date}</td>
                    <td>{blog.blog_desc}</td>
                    <td><button className='btn btn-danger' onClick={() => trash(blog.id)}>delete</button></td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default ViewUser
