import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
 function Nav() {
  return (
   <div className=' d-flex justify-content-center poppins-regular bg-black rounded-top-5 '>
    <div className=' d-flex justify-content-center m-2 '>
    <Link className='m-3 px-4 text-decoration-none text-white' to={"/home"}><span className='purple-hover'>Home</span></Link>
    <Link className='m-3 px-4 text-decoration-none text-white' to={"/projects"}><span className='purple-hover'>Projects</span></Link>
    <Link className='m-3 px-4 text-decoration-none text-white'><span className='purple-hover'>Resume</span></Link>
    </div>
   </div>
  );
}
export default Nav;
