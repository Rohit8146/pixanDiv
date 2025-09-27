import React, { forwardRef } from 'react';
import arrow from '../../assets/next-arrow.svg';

const OfferBlock = forwardRef(({ title, para }, ref) => {
  return (
    <div className='offer-block' ref={ref}>
      <h3>{title}</h3>
      <p>{para}</p>
      <a href='#' className="shine-btn">
        Get Quote
        <img src={arrow} alt="arrow" />
      </a>
    </div>
  );
});

export default OfferBlock;
