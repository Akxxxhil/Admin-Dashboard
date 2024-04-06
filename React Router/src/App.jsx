
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Career from './Components/Career'
import About from './Components/About'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <nav>
        <ul>

          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/career">career</NavLink>
          </li>
          


        </ul>
      </nav>

      <Routes>

        <Route path='/Home' element={<Home></Home>} />
        <Route path='/About' element={<About></About>} />
        <Route path='/career' element={<Career></Career>} />
        <Route path='/*' element={<h1>not found page</h1>} />




      </Routes>
    </>
  )
}

export default App
