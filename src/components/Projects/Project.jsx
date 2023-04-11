import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './projects.scss'

function Project(props) {

  const { image, title, description, links, a } = props

  return (
    <div className='project'>
      <div className='project-container'>
        <a target='_blank' href={a}>
          <img
            className='project-image'
            src={image}
          />
          <div className='project-text-container'>
            <p className='project-description'>
              {description}
            </p>
          </div>
        </a>
      </div>
      <div className='project-out'>
        <h3 className='project-title'>
          <strong>{title}</strong>
        </h3>
        <Link className='project-links' to={links}
          target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
    </div>
  )
}

export default Project