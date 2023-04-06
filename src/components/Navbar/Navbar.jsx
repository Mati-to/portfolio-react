import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFolderOpen, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../public/images/matito-logo.png'

function Navbar() {
  return (
    <div className='navbar'>
      <Link
        to='/'
        className='home-logo' >
        <img src={Logo} alt='matito logo' />
      </Link>
      <nav>
        <NavLink to='/' exact='true' activeclassname='true'  className='link'>
          Home
        </NavLink>
        <NavLink to='/projects' exact='true' activeclassname='true' className='link'>
          Projects
        </NavLink>
        <NavLink to='/about-me' exact='true' activeclassname='true' className='link'>
          About Me
        </NavLink>
        <NavLink to='/about-me' exact='true' activeclassname='true' className='link'>
          Contact
        </NavLink>
      </nav>
      
    </div>
  )
}

export default Navbar