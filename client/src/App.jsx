import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Greeting from './components/greeting.jsx/greeting'

function App() {

    return (
      <>
        <Router>
          <Greeting />
          <Routes>
          </Routes>
        </Router>
      </>
    )
  }

export default App
