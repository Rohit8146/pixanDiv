import React from 'react'
import LeftArrow from '../../assets/submit-arrow.svg'
import './inputText.css'
export default function InputText({placeholder}) {
  return (
    <div className='input-field'>
      <input type="text" placeholder={placeholder ? placeholder : "Let’s Create Something Unforgettable"} />
      <button type='button' className='submit-btn'><img src={LeftArrow} /></button>
    </div>
  )
}
