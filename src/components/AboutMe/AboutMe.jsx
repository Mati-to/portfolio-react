import ImageAbout from './Bg-image/Image'
import './index.scss'

function AboutMe() {
  return (
    <div className='aboutme--container'>
      <div className='text-container'>
        <h1>About Me</h1>
        <p>Hello there! My name is Matías Alfaro. I've always had a passion for technology,
          especially computers, since I was a child.
          After graduating as a speech therapist, I discovered
          the world of web development in 2022 and realized that it was my true calling. I made the brave
          decision to change my profession and pursue something that I truly enjoy.
        </p>
        <p>
          Now, I am fully committed to studying and becoming a better web developer every day.
          I am excited about what the future holds and
          am eager to continue growing in this field.
        </p>
        <p>These are the technologies and frameworks that I have learned and worked with:</p>
        <ul className='list'>
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Node.Js</li>
          <li>ExpressJs</li>
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