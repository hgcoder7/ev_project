import { useState } from 'react'
import {
  Routes,
  Route,
  Link
} from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Searchbox from './components/Searchbox/Searchbox'
import Products1 from './components/Products/Products1'
import Home from './components/Home/Home'
import Gallery1 from './components/Gallery/Gallery1'
import Contact from './components/Contact/Contact'

const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className="header">
          <Navbar/>
      </div>
      <div className="search">
        <Searchbox/>
      </div>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Home' element={<Home/>}/>
          <Route exact path='/Products1' element={<Products1/>}/>
          <Route exact path='/Gallery1' element={<Gallery1/>}/>
          <Route exact path='/Contact' element={<Contact/>}/>
      </Routes>
      
    </div>
  )
}

export default App
