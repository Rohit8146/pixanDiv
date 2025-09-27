import React from 'react'
import './button.css'

export default function Button({ title, url, img, cssClass }) {
  return (
    <div>
      <a className={`${cssClass}`} href={url}>
        {cssClass === "button-hover-animation" ? (
          <>
            {/* Double text for sliding/reveal animation */}
            <span className="button-title_inner">
              <span>{title}</span> <br />
              <span>{title}</span>
            </span>

            {/* Double image for sliding/reveal animation */}
            <span className="button-image_inner">
              <span>
                {img && <img src={img} alt="arrow" />}
              </span>
              <span>
                {img && <img src={img} alt="arrow" />}
              </span>
            </span>
          </>
        ) : (
          <>
            <span className="btn-text">{title}</span>
            {img && <img src={img} alt="arrow" className="btn-icon" />}
            <span className="shine"></span>
          </>
        )}
      </a>
    </div>
  )
}
