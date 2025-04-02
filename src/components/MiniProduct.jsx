import React from 'react'
import thumbnail1 from '../images/thumbnail1.jpg'
import './MiniProduct.css'
import { Link } from "react-router-dom"

const MiniProduct = () => {
  return (
    <div className='thumbnail-wrapper'>
        <div className='thumbnail-img-box'>
            <img  src={thumbnail1}   />
        </div>
        <div className='thumbnail-content-box'>
            <h6 className='thumbnail-title'>
                <Link to="/">Nestle Original Coffee-Mate Coffee Creamer
                </Link>
            </h6>
            <small className='thumbnail-rating'>Rating: (4.3)</small>
            <div className='thumbnail-price-box'>
                <span>$32.85 </span>
                <span>$35.85 </span>
            </div>
        </div>
    </div>
  )
}

export default MiniProduct