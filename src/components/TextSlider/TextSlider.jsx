import React, { useEffect, useRef, useState } from "react";
import StarImage from "../../assets/star-symbol.svg";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TextSlider({ textArr }) {
  const sliderRef = useRef(null);
  const [direction, setDirection] = useState("left"); // default direction

  useEffect(() => {
    if (sliderRef.current) {
      ScrollTrigger.create({
        trigger: sliderRef.current,
        start: "top 10%", // when top of section hits 50% of screen
        onEnter: () => setDirection("right"), // change direction
        onLeaveBack: () => setDirection("left"), // reset when scrolling back up
      });
    }
  }, []);

  return (
    <div className="slider-parent" ref={sliderRef}>
      <Marquee direction={direction} speed={300} gradient={false}>
        {textArr.map((item, index) => (
          <h3 key={index}>
            {item}{" "}
            <img
              src={StarImage}
              className="starimage rotating"
              alt="Star Image"
            />
          </h3>
        ))}
      </Marquee>
    </div>
  );
}
