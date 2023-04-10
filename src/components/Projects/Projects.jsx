import quotes from '../../assets/images/project-quotes.png'
import bingo from '../../assets/images/project-bingo.png'
import patients from '../../assets/images/project-patients.png'
import Project from './Project'
import './projects.scss'


function Projects() {
  return (
    <div className='projects--container'>
      <h1 className='projects--container-title'>Projects title here</h1>
      <div className='projects-sub'>
        <Project
          image={quotes}
          title='Quotes-Generator'
          description='of type and scrambled it to make a type specimen book. It has survived not 
          only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
          a='https://bespoke-mochi-13802c.netlify.app/'
          links=''
        />
        <Project
          image={bingo}
          title='Bingo/Lota'
          description='Call numbers between 1 and 99 randomly. You can do it manually or set an interval for 
          automatic selection. It keeps a record of the numbers that have come up for later consultation.'
          a='https://spiffy-bublanina-387eab.netlify.app/'
          links=''
        />
        <Project
          image={patients}
          title='Patients Follow-up'
          description='This app allows to track patients therapies, based on my experience and needs as a 
          speech therapist.'
          a='https://fancy-youtiao-271738.netlify.app/'
          links=''
        />
        <Project
          image='portfolio'
          title='Portfolio'
          description=''
          links=''
        />
      </div>

    </div>
  )
}

export default Projects