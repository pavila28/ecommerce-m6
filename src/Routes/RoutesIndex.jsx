import { Routes, Route } from 'react-router-dom'
import { Home, Login, Signup } from '@/Pages'
// import { useAuthContext } from '../Hooks/useAuthContext'

const RoutesIndex = () => {
  // const { isAuth } = useAuthContext()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default RoutesIndex
