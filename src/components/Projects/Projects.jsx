import pokemon from '../../assets/images/projects/project-pokemon.png'
import bingo from '../../assets/images/projects/project-bingo.png'
import patients from '../../assets/images/projects/project-patients.png'
import portfolio from '../../assets/images/projects/project-portfolio.png'
import Project from './Project'
import './projects.scss'


function Projects() {
  return (
    <div className='projects--container'>
      <h1 className='projects--container-title'>My Projects</h1>
      <div className='projects-sub'>
        <Project
          image={pokemon}
          title='Angular Pokemon'
          description='Search for your favorite Pokémon and mark it as your favorite!'
          a='https://6519a4bd3749896a54e29649--rococo-fox-bc8858.netlify.app/'
          links='https://github.com/Mati-to/angular_pokemon'
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
          links='https://github.com/Mati-to/slp-followup'
        />
        <Project
          image={portfolio}
          title='Portfolio'
          description="This website you're using right now!"
          links='https://github.com/Mati-to/portfolio-react'
        />
      </div>

    </div>
  )
}

export default Projects
