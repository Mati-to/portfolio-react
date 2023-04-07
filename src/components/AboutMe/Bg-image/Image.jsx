import { useState, useEffect } from 'react';
import Astronaut from '../../../assets/images/astronaut2.png'
import bgImage2 from '../../../assets/images/bg-image2.png'
import react from '../../../assets/images/icons/react-logo.svg'
import { gsap, Power1 } from 'gsap-trial'

import './index.scss'

function ImageAbout() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const floatAnimation = () => {
        const tlCan = gsap.timeline({ repeat: -1 });
        /*Can Animation*/
        tlCan
          //move top left
          .to('.can > .logo', { duration: 3, y: '-=30', x: '+=20', rotation: '-=5', ease: Power1.easeInOut })

          //move down right
          .to('.can > .logo', { duration: 2, y: '+=30', x: '-=20', rotation: '-=5', ease: Power1.easeInOut })

          .to('.can > .logo', { duration: 3, y: '-=20', rotation: '+=5', ease: Power1.easeInOut })

          .to('.can > .logo', { duration: 3, y: '+=20', rotation: '+=5', ease: Power1.easeInOut })

          .to('.can > .logo', { duration: 3, y: '-=50', ease: Power1.easeInOut })

          .to('.can > .logo', { duration: 3, y: '+=50', ease: Power1.easeInOut })

          .to('.can > .logo', { duration: 3, y: '-=30', ease: Power1.easeInOut })

          .to('.can > .logo', { duration: 3, y: '+=30', ease: Power1.easeInOut })

          .to('.can > .logo', { duration: 2, y: '-=30', ease: Power1.easeInOut })

          .to('.can > .logo', { duration: 2, y: '+=30', ease: Power1.easeInOut });

        gsap.to(tlCan, { duration: 27, ease: Power1.easeInOut });
      };
      floatAnimation();
    }
  }, [mounted]);

  return (
    <div className='can animate__animated animate__fadeIn'>
      <img className='astronaut-img' src={Astronaut} alt="" />
      <img className='bg-image2' src={bgImage2} alt="" />
      <img className='react-logo logo' src={react} alt="" />
    </div>
  )
}

export default ImageAbout;