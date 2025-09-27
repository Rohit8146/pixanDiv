import React, { useEffect, useRef } from 'react'
import './newslatter.css'
import InputText from '../InputField/InputText'
import bgLogo from '../../assets/pixanDiv-logo.png'
import leftimage from '../../assets/footer_logo_arrow_left.png'
import rightimage from '../../assets/footer_logo_arrow_right.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function NewsLatter() {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Left image moves from center -> left
        gsap.fromTo(
          leftRef.current,
          { x: 500, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
            },
          }
        )

        // Right image moves from center -> right
        gsap.fromTo(
          rightRef.current,
          { x: -500, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
            },
          }
        )

        // Inner content scales from 0 -> 1
        gsap.fromTo(
          contentRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
            },
          }
        )
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [])

  return (
    <div className='outer-section'>
    <div ref={sectionRef} className='container newslatter_section'>
      <img ref={leftRef} src={leftimage} className='footer-left' alt="left decoration"/>
      {/* <img src={bgLogo} className='newlatter-bg-logo' alt="newsletter logo"/> */}
      
      <div ref={contentRef} className='newslatter-content'>
        <h2>Interested in working together?</h2>
        <p>
          Let's talk and explore the endless possibilities for your business
          success. Book a call today for a free consultation.
        </p>
        <InputText placeholder="Let's Talk" />
      </div>

      <img ref={rightRef} src={rightimage} className='footer-right' alt="right decoration"/>
    </div>
    </div>
  )
}
