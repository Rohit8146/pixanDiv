import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderLinks({title, url}) {
    
  return (
    <div>
        <NavLink className='header-links' to={url} >{title}</NavLink>
    </div>
  )
}
