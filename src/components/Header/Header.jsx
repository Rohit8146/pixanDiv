import React, { useState } from 'react'
import HeaderLinks from './HeaderLinks'
import './Header.css'
import logo from '../../assets/pixandiv-logo.svg'
import Button from '../Button/Button'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";


export default function Header() {

  const [showHeader , setShowHeader] = useState(false)

  const headerHandler = () => {
    setShowHeader(!showHeader)
  }
  const handleCross = () => {
    setShowHeader(!showHeader)
  }
    const menuLinks = [
        {
            "title" : "Home",
            "url" : "/"
        },
        {
            "title" : "Projects",
            "url" : "/projects"
        },
        {
            "title" : "About",
            "url" : "/about"
        }
    ]
  return (
    <div className='outer-section'>
    <div className={showHeader ? 'container header-style showheader' : 'container header-style'}>
      <a href="#">
        <img src={logo} class="logo" />
      </a>
      <div class="header_links_container">
        <div onClick={handleCross} className='x-cross'>
          <RxCross1 size={24} color='#511FCE' />
        </div>
        {menuLinks.map(({title, url}) => {
          return (
              <HeaderLinks title={title} url={url} />
          )
        })}
        <Button title='Enquire Now!' url="#" cssClass="enquire_btn" />
      </div>
      <div className='hamburger_icon'>
        <button onClick={headerHandler}>
          <RxHamburgerMenu size={30} color='#511FCE' />
        </button>
      </div>

      
    </div>
    </div>
  )
}
