import React from 'react'
import { HiOutlineHome } from "react-icons/hi2";
import { Link } from "react-router-dom";
import './InnerBanner.css'

const InnerBanner = () => {
  return (
    <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12">
            <div className="innerbanner">
              <div className="innerbanner-content">
                <h1 className='fw-semibold'>Snack</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/" className="lh-base">
                        <HiOutlineHome /> Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/">Shop</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Snack
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default InnerBanner