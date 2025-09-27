import React, { useEffect, useRef } from 'react';
import './banner.css';
import InputText from '../InputField/InputText';
import InfoBox from '../InfoBox/InfoBox';
import counterImage from '../../assets/800-count.png';
import secondCounterImage from '../../assets/500-count.png';
import thirdCounterImage from '../../assets/12-count.png';
import gsap from 'gsap';

export default function Banner() {
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const inputRef = useRef(null);

  const infoBoxData = [
    {
      title: 'Project Done',
      counterImage: counterImage
    },
    {
      title: 'Happy Clients',
      counterImage: secondCounterImage
    },
    {
      title: 'Project Done',
      counterImage: thirdCounterImage
    }
  ];

  useEffect(() => {
    // Animate title, tagline and input on initial load
    gsap.fromTo(
      [titleRef.current, taglineRef.current, inputRef.current],
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        stagger: 0.2 // small delay between animations
      }
    );
  }, []);

  return (
    <div className='container banner-container'>
      <div className='heading_infoBoxes'>
        {infoBoxData.map((item, index) => {
          return(
            <InfoBox key={index} counterImage={item.counterImage} text={item.title} />
          )
        })}
        <h1 ref={titleRef} className='bannerTitle'>
          We Build <span className='gradiant_bg'>Digital</span> Magic!
        </h1>
      </div>
      <p ref={taglineRef} className='tagline'>
        Pixandiv <span className='underline'></span> Where Pixels Dance & Divs Sing
      </p>
      <div ref={inputRef}>
        <InputText  />
      </div>
    </div>
  );
}
