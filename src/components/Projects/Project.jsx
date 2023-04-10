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
        <p className='project-links'>
          {links}
        </p>
      </div>
    </div>
  )
}

export default Project