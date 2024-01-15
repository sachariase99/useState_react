import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Deletemecomp } from './components'
import { Deletemepage } from './pages'

function App() {

    return (
      <>
        <Router>
          <Deletemecomp />
          <Routes>
            <Route path='/' Component={Deletemepage} />
          </Routes>
        </Router>
      </>
    )
  }

export default App
