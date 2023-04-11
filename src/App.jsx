import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import AboutMe from './components/AboutMe/AboutMe'
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
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
