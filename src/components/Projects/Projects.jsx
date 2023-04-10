import quotes from '../../assets/images/project-quotes.png'
import bingo from '../../assets/images/project-bingo.png'
import patients from '../../assets/images/project-patients.png'
import Project from './Project'
import './projects.scss'


function Projects() {
  return (
    <div className='projects--container'>
      <h1 className='projects--container-title'>My Projects</h1>
      <div className='projects-sub'>
        <Project
          image={quotes}
          title='Quotes-Generator'
          description='With one click you will receive a random quote from an important person, accompanied by 
          his/her image.'
          a='https://bespoke-mochi-13802c.netlify.app/'
          links='https://github.com/Mati-to/Quote-generator'
        />
        <Project
          image={bingo}
          title='Bingo/Lota'
          description='Call numbers between 1 and 99 randomly. You can do it manually or set an interval for 
          automatic selection. It keeps a record of the numbers that have come up for later consultation.'
          a='https://spiffy-bublanina-387eab.netlify.app/'
          links='https://github.com/Mati-to/loteria-app'
        />
        <Project
          image={patients}
          title='Patients Follow-up'
          description='This app allows to track patients therapies, to be more organized about the last activities, 
          evaluations, entry date and more.'
          a='https://fancy-youtiao-271738.netlify.app/'
          links='https://github.com/Mati-to/pacientes_app'
        />
        <Project
          image='portfolio'
          title='Portfolio'
          description="This website you're using right now!"
          links='https://github.com/Mati-to/portfolio-react'
        />
      </div>

    </div>
  )
}

export default Projects