import ImageAbout from './Bg-image/Image'
import './index.scss'

function AboutMe() {
  return (
    <div className='aboutme--container'>
      <div className='text'>
        <h1>About Me</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Saepe fuga fugiat distinctio omnis accusantium velit voluptate eveniet
          veniam ratione culpa voluptatum blanditiis perspiciatis, mollitia natus hic ut laborum magnam odit?</p>
      </div>

      <ImageAbout />
    </div>
  )
}

export default AboutMe