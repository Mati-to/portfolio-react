import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

function Header() {
  return (
    <div className='homepage--container'>
      <div className='homepage--header'>
        <h1 className='animate__animated animate__fadeInLeft'>Matias Alfaro</h1>
        <h2>Full-Stack Developer</h2>
        <ul>
          <Link className='social-link' to='https://www.linkedin.com/in/matías-alfaro-campos-b1990a265'
            target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link className='social-link' to='https://github.com/Mati-to'
            target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link to={'/contact'} className='contact-button'>Contact</Link>
        </ul>

      </div>

    </div>
  )
}

export default Header