import React from 'react';
import { FaFacebookF,FaGithub, FaLinkedinIn } from "react-icons/fa";
import './footer.css'
function Footer(){
  return <>
  <div className=' d-flex justify-content-center poppins-regular bg-black'>
    <div className=' d-flex justify-content-center m-2 '>
    <a className='m-3 px-4 text-decoration-non text-white ' target='_blank' href='https://web.facebook.com/abdalrhman.mostafa.549/'><FaFacebookF  className='purple-hover'/></a>
    <a className='m-3 px-4 text-decoration-none text-white ' target='_blank' href='https://www.linkedin.com/in/abdelrahman-mostafa-913368261'><FaLinkedinIn className='purple-hover'/></a>
    <a className='m-3 px-4 text-decoration-none text-white ' target='_blank' href='https://github.com/bodymostafa1'><FaGithub className='purple-hover'/></a>
    </div>
   </div>
  </>
}
export default Footer;
