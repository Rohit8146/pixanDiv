import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Arrow from "../../assets/left-arrow.png";
import "./about-us.css";
import video from "../../assets/video-overlay.png";
import SubHeading from "../SubHeading/SubHeading";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const h2Ref = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Heading color animation
    if (h2Ref.current) {
      gsap.fromTo(
        h2Ref.current,
        { color: "#1e1e1e83" },
        {
          color: "#000000",
          duration: 3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: h2Ref.current,
            start: "top 80%",
            end: "top 0%",
            scrub: true,
          },
        }
      );
    }

    // Animate the whole section scale on scroll
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 135%", 
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="outer-section">
    <div className="container about-section" ref={sectionRef}>
      <SubHeading text="About Us" />
      <h2 ref={h2Ref} className="about-title">
        Passionate about crafting powerful narratives <img src={Arrow} alt="arrow" />
      </h2>
      <p>
        We bring ideas to life. Whether you need a sleek UI, an unforgettable brand,
        or a website that works like a charm, we craft it with passion, precision,
        and a sprinkle of digital wizardry.
      </p>
      <div className="image_wrapper">
        <img src={video} alt="video overlay" />
      </div>
    </div>
    </div>
  );
}
