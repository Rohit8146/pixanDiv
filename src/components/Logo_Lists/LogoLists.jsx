import React from "react";
import Slider from "react-slick";
import "./logo.css";
import logoOne from "../../assets/logo_2.jpg";
import logoTwo from "../../assets/logo_3.png";
import logoThree from "../../assets/logo_8.png";
import logofour from "../../assets/logo_5.webp";
import logofive from "../../assets/logo_6.webp";
import logoSix from "../../assets/logo_7.png";
import logoSeven from "../../assets/logo_9.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LogoCarousel() {
  const logos = [
    logoOne,
    logoTwo,
    logoThree,
    logofour,
    logofive,
    logoSix,
    logoSeven,
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="logo-carousel">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
