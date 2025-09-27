import React from 'react'

export default function FooterLinks() {
    const footerLinks = [
        {
            title: "X/Twitter",
            url: "#"
        },
        {
            title: "Dribbble",
            url: "#"
        },
        {
            title: "Youtube",
            url: "#"
        },
        {
            title: "Linkedin",
            url: "#"
        }
    ]
    return (
        <div className='footer-links'>
            {footerLinks.map((item) => {
                return(
                    <a className='footerlink' href={item.url} >
                        {item.title}
                    </a>
                )
            })}
        </div>
    )
}
