import React from 'react'
import './FeaturedBox.css'



const FeaturedBox = (props) => {
  return (
    <div className='featuredBox pointer'>
      <img src={props.img} />
      <div className='featuredBox-Content'>
      <h6>{props.title}</h6>
      <small>{props.tagline}</small>
      </div>
    </div>
  )
}

export default FeaturedBox