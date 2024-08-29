import { Toaster } from 'react-hot-toast'
import './App.css'
import Login from './pages/auth/login'

function App() {
  return (
    <div>
      <Toaster />
      <Login/>
    </div>
  )
}

export default App