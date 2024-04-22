import React from 'react'
import '../App.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className=' container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='firstfoot'>

                <p>Management</p>
                <p>Placements</p>
                <p>FAQ's</p>

              </div>
            </div>

            <div className='col-lg-4'>
              <div className='secondfoot'>
                <p>Technical</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
              </div>
            </div>

            <div className='col-lg-4'>

              <div className='thirdfoot'>
                <div className='footicon'>
                  <p>info@frameboxx.in</p>
                </div>
                <div className='fotnum'>
                  <p>9321623789</p>
                </div>
                <div className='adrssfot'>
                  <p className='pf'>Mhatre Pen Building, 3rd floor, 310, B wing,</p>
                  <p className='pf'> Senapati Bapat Marg, Dadar West,</p>
                  <p className='pf'> Mumbai, Maharashtra 400028</p>
                </div>
              </div>

            </div>
          </div>

          <div>
            <h6 className='foot'>  © 2024 FRAMEBOXX ANIMATION AND VISUAL EFFECTS PRIVATE LIMITED.</h6>
          </div>

        </div>
      </div>
  )
}

export default Footer