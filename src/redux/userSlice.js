import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, getDocs,doc } from "firebase/firestore";
import db from "./firebase";
const initialState = {
  userList: []
}
export const addUser = createAsyncThunk('user/addUser', async (data) => {
  await addDoc(collection(db, "blogs"), data)
  return data
})
export const viewUser = createAsyncThunk('user/viewUser', async () => {
  const res = await getDocs(collection(db, "blogs"));
  const arr = []
  res.forEach((doc) => {
    console.log(doc.data())
    console.log(doc.id)
    const newBlog = {
      id: doc.id,
      ...doc.data()
    }
    arr.push(newBlog)
  })
  return arr
})

export const deleteUser = createAsyncThunk('user/deleteUser',async (id)=>{
    await deleteDoc(doc(db,'blogs',id))
    return id
})

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (response) => {
    response
      .addCase(addUser.fulfilled, (state, action) => {
        state.userList.push(action.payload)
      })
      .addCase(viewUser.fulfilled, (state, action) => {
        state.userList = action.payload
      })
      .addCase(deleteUser.fulfilled,(state,action)=>{
        console.log(action.payload)
        const id = action.payload;
        const filterData = state.userList.filter((blog)=>{
          return blog.id!==id
        })

      state.userList = filterData
      })

  }
})
export default userSlice.reducer