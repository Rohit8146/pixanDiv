import React from 'react'
import Banner from './../components/Banner/Banner';
import LogoCarousel from './../components/Logo_Lists/LogoLists';
import About from './../components/About/About';
import OfferBox from './../components/what-we-offer/OfferBox';
import Portfolio from './../components/Our_portfolio/Portfolio';
import NewsLatter from './../components/NewsLatter/NewsLatter';

function Home() {
  return (
    <>
      <Banner />
      <LogoCarousel />
      <About />
      <OfferBox />
      <Portfolio />
      <NewsLatter />
    </>
  )
}

export default Home