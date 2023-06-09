import React from 'react';
import Image from 'next/image';
import about from '../../public/assets/liz-warriors.jpg';
import AboutStyles from '@/styles/AboutStyles.module.scss'

const About = () => {
  return (
        <div className={AboutStyles.container}>
      <div className={AboutStyles.textContainer}>
        <h1>Lizzy Rothstein</h1>
        <p>Lizzy is a professional dancer from San Francisco, California. As a former NBA dancer for the Golden State Warriors, she has performed with artists including Maroon 5, E-40, Mistah F.A.B., Too Short, G-Eazy, and P-Lo. She was also the head coach of the Cal Dance Team at UC Berkeley. Lizzy now lives in Los Angeles, California and is the head coach of the UCLA Dance Team.</p>
      </div>
      <div className={AboutStyles.imageContainer}>
        <Image 
            src={about} 
            alt="Chase Center with the Warriors Dance Team"
            className={AboutStyles.image}
            priority
            />
      </div>
    </div>
  )
}

export default About