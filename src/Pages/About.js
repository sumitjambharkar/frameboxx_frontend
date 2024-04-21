import React from 'react'

const About = () => {
  return (
    <div>
 
<section class="about section" id="about">
  <div>
    <h2 className='hedtitle'>About Us</h2>
  </div>
  <div class="about__container container grid">
    
    <div class="about__perfil">
      <div class="about__image">
        <img src="https://frameboxx.in/upload/files/header/THE-JOURNEY-OF-FRAMEBOXX-1.jpg"/>

     
      </div>
    </div>

    <div class="about__info">
    <h2><b>The Journey of Frameboxx</b></h2>
      <h5>
      Our journey started in the year 2008, with a vision of becoming India’s 
      leading education brand in the animation industry. A team of spirited
       entrepreneurs and passionate educators came together to create Frameboxx.
        Our governing council comprised of technical experts and experienced trainers,
         is headed by Mr. Rajesh R. Turakhia,who has experience of over 20 years
          in Animation and Visual Effects industry, he has created two of the
           leading brands in this field.
      </h5>

        
        <h5>
       <b> Our biggest strength: Frameboxx is the only national training studio that
         is owned and run by Industry professionals.</b>
        </h5>
  
      <div class="about__buttons">
        <a href="#contact" class="button">
         <button class="button-81">Contact Me</button>
        </a>

        <a href="https://www.linkedin.com/" target="_blank" class="button__ghost">
          <i class="ri-linkedin-box-line"></i>
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About