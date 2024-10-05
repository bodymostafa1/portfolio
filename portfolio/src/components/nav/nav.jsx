import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
 function Nav() {
  return (
   <div className='bg-black d-flex justify-content-center text-bg-dark container poppins-regular'>
    <div className=' d-flex justify-content-center m-2 rounded-5  border-purple bg-body'>
    <Link className='m-3 px-4 text-decoration-none text-dark '><span className=''>Home</span></Link>
    <Link className='m-3 px-4 text-decoration-none text-dark'><span className=''>Projects</span></Link>
    <Link className='m-3 px-4 text-decoration-none text-dark'><span className=''>Resume</span></Link>
    </div>
   </div>
  );
}
export default Nav;
