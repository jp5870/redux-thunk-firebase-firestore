import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import AddUser from './pages/AddUser'
import ViewUser from './pages/ViewUser'
import Update from './pages/Update'
import Signup from './pages/Auth/Signup'
function App() {

  return (
    <>
      <Routers>
        <Header />
        <Routes>
          <Route path='/' element={<AddUser />}></Route>
          <Route path='/view' element={<ViewUser />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
        <Footer />
      </Routers>
    </>
  )
}

export default App
