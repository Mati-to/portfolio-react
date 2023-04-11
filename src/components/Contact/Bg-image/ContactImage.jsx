import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import spaceLaunch from '../../../assets/images/space-launch.jpg'
import './contact-img.scss'

function ContactImage() {
  return (
    <div className='image-container'>
      <img className='launch-image' src={spaceLaunch} alt='rocket launch' />
      <h2 className='subtitle animate__animated animate__fadeInUp'>Ready to take your website to the next frontier? Let's work together!</h2>
      <ul className='contact-list animate__animated animate__fadeInUp'>
        <Link className='link-icons' to='https://www.linkedin.com/in/matías-alfaro-campos-b1990a265'
          target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link className='link-icons' to='https://github.com/Mati-to'
          target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <p>matiasalfaro2.a@gmail.com</p>
      </ul>
    </div>
  )
}

export default ContactImage