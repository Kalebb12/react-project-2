import { Toaster } from 'react-hot-toast'
import './App.css'
import Login from './pages/auth/login'
import HomePage from './pages/homePage'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from './context/globalContext'
import Register from './pages/auth/register'

function App() {
  const {user} = useContext(GlobalContext)


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