import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className=' mx-5 px-5 p-2'>
      <div className='d-flex flex-column border-purple px-4 pt-3 crounded rounded-5 bg-body'>
        <h2 className=' text-capitalize'>important projects</h2>
          <ul>
            <li className='my-1'>
              <Link className=' text-decoration-none text-dark '><span className=''>E-commerce Api</span></Link>
            </li>
             <li className='my-1'>
              <Link className=' text-decoration-none text-dark '><span className=''>Fresh cart E-commerce (Front-end) </span></Link>
            </li>
             <li className='my-1'>
              <Link className=' text-decoration-none text-dark '><span className=''>Job search Api</span></Link>
            </li>
             <li className='my-1'>
              <Link className=' text-decoration-none text-dark '><span className=''>simple social media Api</span></Link>
            </li>
          </ul>
      </div>
    </div>
  )
}
export default Sidebar