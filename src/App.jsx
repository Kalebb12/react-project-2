import { Toaster } from 'react-hot-toast'
import './App.css'
import Login from './pages/auth/login'
import HomePage from './pages/homePage'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from './context/globalContext'
import Register from './pages/auth/register'
import Spinner from './components/svgs/spinner'

function App() {
  const {user ,loading} = useContext(GlobalContext)
  if(loading){
    return <div className='flex items-center justify-center w-full h-screen'>
      <Spinner w={100} h={100}/>
    </div>
  }
  return (
    <div>
      <Toaster />
  
      <Routes>
        <Route path="/" element={user?<HomePage />: <Navigate to="/login"/>} />
        <Route path="/login" element={!user?<Login />: <Navigate to="/"/>} />
        <Route path="/register" element={!user?<Register/>:<Navigate to="/"/>} />
      </Routes>
    </div>
  )
}

export default App