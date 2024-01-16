import './styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Greeting, Counter, Home, Todo } from './pages'
import { Nav } from './components'

function App() {

    return (
      <div className='main'>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/greeting' Component={Greeting}/>
            <Route path='/counter' Component={Counter}/>
            <Route path='/todo' Component={Todo} />
          </Routes>
        </Router>
      </div>
    )
  }

export default App
