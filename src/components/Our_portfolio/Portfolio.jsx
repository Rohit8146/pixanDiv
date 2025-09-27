import React, { useEffect, useRef } from "react";
import "./portfolio.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubHeading from "../SubHeading/SubHeading";
import PortfolioCards from "./PortfolioCards";
import Button from "../Button/Button";
import img from "../../assets/submit-arrow.svg";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const h2Ref = useRef(null);
  const cardsRef = useRef([]);

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

    // Portfolio cards animation
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2, // delay between cards
          ease: "power2.out",
          scrollTrigger: {
            trigger: h2Ref.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const workItems = [
    {
      title: "Gleamoro",
      description: "A shimmering digital home for a jewelry brand.",
      tags: ["4 Weeks", "Branding & Website"],
    },
    {
      title: "Mannen-Zaak",
      description: "A bold, sleek website for a men's care brand.",
      tags: ["4 Weeks", "Branding & Website"],
    },
    {
      title: "So In Love",
      description: "Branding that makes beauty shine from the inside out.",
      tags: ["4 Weeks", "Branding & Website"],
    },
    {
      title: "Hotel Management App",
      description: "A seamless experience designed for effortless booking.",
      tags: ["4 Weeks", "Branding & Website"],
    },
  ];

  return (
    <div className="outer-section">
    <div className="container portfolio">
      <SubHeading text="Our Work" />
      <h2 ref={h2Ref} className="portfolio-title">
        Our Portfolio
      </h2>
      <div className="protfolio_list">
        {workItems.map((item, index) => (
          <PortfolioCards
            key={index}
            item={item}
            ref={(el) => (cardsRef.current[index] = el)}
          />
        ))}
      </div>
      <div className="button-box">
        <Button
          title="Explore Work"
          url="#"
          img={img}
          cssClass="button-hover-animation"
        />
      </div>
    </div>
    </div>
  );
}
