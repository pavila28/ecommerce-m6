import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import RoutesIndex from './Routes/RoutesIndex'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
