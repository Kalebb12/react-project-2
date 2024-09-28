import { Toaster } from 'react-hot-toast'
import './App.css'
import Login from './pages/auth/login'
import HomePage from './pages/homePage'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from './context/globalContext'
import Register from './pages/auth/register'
import Spinner from './components/svgs/spinner'
import ProductDetails from './pages/productDetails'
import ProductCategory from './pages/productCategory'
import NotFound from './pages/NotFound'
import SearchProducts from './pages/searchProducts'

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
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={!user?<Login />: <Navigate to="/"/>} />
        <Route path="/register" element={!user?<Register/>:<Navigate to="/"/>} />
        <Route path='/productDetails/:id' element={<ProductDetails />} />
        <Route path='/category/:title' element={<ProductCategory />} />
        <Route path='/products' element={<SearchProducts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App