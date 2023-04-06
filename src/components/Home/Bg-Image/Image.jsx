import bgImage from '../../../../public/images/bg-image.png'
import './index.scss'

function Image() {
  return (
    <div className='bg-image-container'>
      <img src={bgImage} className='bg-image animate__animated animate__fadeIn' alt="" />

    </div>
  )
}

export default Image