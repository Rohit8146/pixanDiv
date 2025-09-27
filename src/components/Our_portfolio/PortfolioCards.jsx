import React, { forwardRef } from 'react';
import placeholderImage from '../../assets/placeholder_image.png';

const PortfolioCards = forwardRef(({ item }, ref) => {
  return (
    <div className='portfolio_card' ref={ref}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className='tags-box'>
        {item.tags.map((tag, index) => (
          <p className='tag' key={index}>
            {tag}
          </p>
        ))}
      </div>
      <img src={placeholderImage} alt="card-image" />
    </div>
  );
});

export default PortfolioCards;
