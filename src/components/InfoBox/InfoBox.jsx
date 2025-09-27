// InfoBox.jsx
import React, { useEffect, useRef } from 'react'
import './info.css'
import gsap from 'gsap'

export default function InfoBox({ counterImage, text, replayKey }) {
  const boxRef = useRef(null)
  const tlRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      tlRef.current = gsap.timeline()
        .from(boxRef.current, {
          x: 400,          
          opacity: 0,
          duration: 2,
          ease: 'power3.out'
        })
    }, boxRef)

    tlRef.current && tlRef.current.play(0)

    return () => ctx.revert() 
  }, [replayKey]) 

  return (
    <div ref={boxRef} className='infoBox'>
      <img src={counterImage} className='count-image' alt={text} />
      <h4>{text}</h4>
    </div>
  )
}
