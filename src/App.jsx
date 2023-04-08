import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/Aboutme'
import Contact from './components/Contact/Contact'
import './App.scss'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
