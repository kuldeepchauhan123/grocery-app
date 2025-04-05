import React from 'react'
import {Link} from 'react-router-dom'
import category1 from '../images/category-1.svg'

const CategoryFilter = () => {
  return (
    <div className='filterBox p-4 pb-2 border rounded-3 bg-white shadow'>
        <h4 className='heading-underline mb-4'>Category</h4>
        <ul className='ps-1 list-unstyled'>
            <li className='d-flex justify-content-between align-items-center border p-3 rounded mb-3'>
                <Link>
                <img src={category1} width={"25"}/>
                <span className='d-inline-block ms-2'>Milk & Dairies</span>
                </Link>
                <span className='d-flex align-items-center justify-content-center bg-success rounded-5 text-white p-2' style={{width:"20px", height:"20px", fontSize: 12}}>30</span>
            </li>
            <li className='d-flex justify-content-between align-items-center border p-3 rounded mb-3'>
                <Link>
                <img src={category1} width={"25"}/>
                <span className='d-inline-block ms-2'>Milk & Dairies</span>
                </Link>
                <span className='d-flex align-items-center justify-content-center bg-success rounded-5 text-white p-2' style={{width:"20px", height:"20px", fontSize: 12}}>24</span>
            </li>
            <li className='d-flex justify-content-between align-items-center border p-3 rounded mb-3'>
                <Link>
                <img src={category1} width={"25"}/>
                <span className='d-inline-block ms-2'>Milk & Dairies</span>
                </Link>
                <span className='d-flex align-items-center justify-content-center bg-success rounded-5 text-white p-2' style={{width:"20px", height:"20px", fontSize: 12}}>18</span>
            </li>
            <li className='d-flex justify-content-between align-items-center border p-3 rounded mb-3'>
                <Link>
                <img src={category1} width={"25"}/>
                <span className='d-inline-block ms-2'>Milk & Dairies</span>
                </Link>
                <span className='d-flex align-items-center justify-content-center bg-success rounded-5 text-white p-2' style={{width:"20px", height:"20px", fontSize: 12}}>32</span>
            </li>
            <li className='d-flex justify-content-between align-items-center border p-3 rounded'>
                <Link>
                <img src={category1} width={"25"}/>
                <span className='d-inline-block ms-2'>Milk & Dairies</span>
                </Link>
                <span className='d-flex align-items-center justify-content-center bg-success rounded-5 text-white p-2' style={{width:"20px", height:"20px", fontSize: 12}}>24</span>
            </li>
        </ul>
    </div>
  )
}

export default CategoryFilter