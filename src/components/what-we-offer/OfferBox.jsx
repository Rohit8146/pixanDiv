import React, { useEffect, useRef } from "react";
import './offer.css';
import OfferBlock from './OfferBlock';
import Button from '../Button/Button';
import img from '../../assets/submit-arrow.svg';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OfferBox() {
  const data = [
    {
      title: "Design That Speaks",
      para: "We craft intuitive UI/UX that feels just right."
    },
    {
      title: "Development That Works",
      para: "Fast, scalable, and responsive websites tailored to your needs."
    },
    {
      title: "Branding That Sticks",
      para: "A unique identity that tells your brand’s story."
    },
    {
      title: "Marketing That Converts",
      para: "SEO, ads, and strategy to get you noticed."
    }
  ];

  const blocksRef = useRef([]);

  useEffect(() => {
    if (blocksRef.current.length > 0) {
      gsap.fromTo(
        blocksRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: blocksRef.current[0],
            start: "top 120%",
          }
        }
      );
    }
  }, []);

  return (
    <div className='outer-section'>
    <div className='container what-we-offer'>
      <h2>What we Offer</h2>
      <div className='fourBoxes'>
        {data.map((item, index) => (
          <OfferBlock
            key={index}
            title={item.title}
            para={item.para}
            ref={(el) => (blocksRef.current[index] = el)}
          />
        ))}
      </div>
      <div className='offer_bottom'>
        <p className='bottom-text'>
          We don’t just build digital products — We build digital experiences.
        </p>
        <div className='button-box'>
          <Button title="Get in Touch" url="#" img={img} cssClass="button-hover-animation" />
        </div>
      </div>
    </div>
    </div>
  );
}
