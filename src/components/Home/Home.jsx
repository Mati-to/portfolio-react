import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import bgImage from '../../assets/images/bg-image.png'
import './home.scss'

function Header() {
  return (
    <>
      <div className='homepage--container '>
        <div className='homepage--header animate__animated animate__fadeInLeft'>
          <h1 className='home-title'>Matias Alfaro</h1>
          <h2 className='home-sub'>Full-Stack Developer</h2>
          <ul className='home-list'>
            <Link className='social-link' to='https://www.linkedin.com/in/matiasalfaroc/'
              target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link className='social-link' to='https://github.com/Mati-to'
              target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link to={'/contact'} className='contact-button'>Contact Me</Link>
          </ul>
        </div>
        <img className='home-image animate__animated animate__fadeIn' src={bgImage} alt='' />
      </div>
    </>
  )
}

export default Header
