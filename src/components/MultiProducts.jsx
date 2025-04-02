import React from 'react'
import MiniProduct from './MiniProduct'

const MultiProducts = () => {
  return (
    <>
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-lg-3">
                <h4 className='heading-underline mb-4'>Top Selling</h4>
                <MiniProduct/>
                <MiniProduct/>
                <MiniProduct/>                
            </div>
            <div className="col-lg-3">
                <h4 className='heading-underline mb-4'>Trending Products</h4>
                <MiniProduct/>
                <MiniProduct/>
                <MiniProduct/>                
            </div>
            <div className="col-lg-3">
                <h4 className='heading-underline mb-4'>Recently Added</h4>
                <MiniProduct/>
                <MiniProduct/>
                <MiniProduct/>                
            </div>
            <div className="col-lg-3">
                <h4 className='heading-underline mb-4'>Top Rated</h4>
                <MiniProduct/>
                <MiniProduct/>
                <MiniProduct/>                
            </div>
        </div>
    </div>
    </>
  )
}

export default MultiProducts