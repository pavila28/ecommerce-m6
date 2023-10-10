import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext'
import Header from './Components/Header/Header'
import RoutesIndex from './Routes/RoutesIndex'

function App () {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
