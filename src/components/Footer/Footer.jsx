import React from 'react'
import TextSlider from '../TextSlider/TextSlider'
import './footer.css'
import FooterLinks from './FooterLinks'
import FooterLogo from '../../assets/footer-logo.png'
import FooterBg from '../../assets/footer-bg.png'
export default function Footer() {
const textArr = ['@pixandev', "Instagram", '@pixandev', "Instagram", '@pixandev', "Instagram", '@pixandev', "Instagram"]
  return (
    <div className='footer'>
      <h3 className='footer-title'>Follow Us</h3>
      <TextSlider textArr={textArr} />
      <div className='gradiant-bg'>
        <FooterLinks />
        <img src={FooterBg} className='footerbg' alt="Footer Logo" />
        <div className='container footer-content'>
            <img src={FooterLogo} className='footerlogo' alt="Footer Logo" />
            <h4>Have you got a Question?</h4>
            <div className='email-copyright'>
                <a href="mailto:raghu.pixandiv@gmail.com">
                    raghu.pixandiv@gmail.com
                </a>
                <div className='footer_links'>
                    <a href="#">
                        Terms of service
                    </a>
                    <a href="#">
                        Privacy Policy
                    </a>
                    <a href="#">
                        © 2025 — pixandiv
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
