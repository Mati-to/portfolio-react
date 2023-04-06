import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './index.scss'

function Layout() {
  return (
    <div className='App'>
      <Navbar />
      <div className='page'>

        <Outlet />

      </div>
    </div>
  )
}

export default Layout