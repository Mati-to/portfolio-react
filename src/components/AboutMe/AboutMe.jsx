import ImageAbout from './Bg-image/Image'
import './aboutme.scss'

function AboutMe() {

  return (
    <div className='aboutme--container'>
      <div className='about-text-container'>
        <h1 className='about-title'>About Me</h1>
        <p>Hello there! My name is Matías Alfaro, and I'm a Full-Stack Developer. I've always had a passion for technology,
          especially computers, but after finishing school, my path diverted to health care.  
          After graduating and working as a speech therapist, I discovered
          the world of web development in 2022 and realized that it was my true calling. I made the brave
          decision to change my profession and pursue something that I truly enjoy.
        </p>
        <p>
          Now, I am fully committed to studying and becoming a better web developer every day.
          I am excited about what the future holds and
          am eager to continue growing in this field.
        </p>
        <p>These are some of the technologies and frameworks that I have learned and worked with:</p>
        <ul className='about-list'>
          <li>Javascript</li>
          <li>Angular</li>
          <li>ReactJs</li>
          <li>PHP</li>
          <li>Python</li>
          <li>Node.Js</li>
          <li>ExpressJs</li>
          <li>MySQL</li>
          <li>Oracle DB</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className='image-container'>
        <ImageAbout />
      </div>
    </div>
  )
}

export default AboutMe
