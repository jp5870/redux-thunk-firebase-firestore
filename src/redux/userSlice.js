import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, getDocs, doc, setDoc } from "firebase/firestore";
import {db} from "./firebase";
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

export const deleteUser = createAsyncThunk('user/deleteUser', async (id) => {
  await deleteDoc(doc(db, 'blogs', id))
  return id
})

export const editUser = createAsyncThunk('/user/editUser', async (data) => {
  const { id } = data;
  await setDoc(doc(db, 'blogs', id), data);
  return data
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
      .addCase(deleteUser.fulfilled, (state, action) => {
        console.log(action.payload)
        const id = action.payload;
        const filterData = state.userList.filter((blog) => {
          return blog.id !== id
        })

        state.userList = filterData
      })
      .addCase(editUser.fulfilled, (state, action) => {
        console.log(action.payload)
        const { id } = action.payload;
        const index_number = state.userList.findIndex((blog) => {
          return blog.id === id
        })
        if(index_number!=-1){
          state.userList[index_number]= action.payload
        }
      })

  }
})

const arr = [45, 44, 32, 11, 23];
arr[2] = 45;
export default userSlice.reducer