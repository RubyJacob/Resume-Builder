import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:'purple'} } className=' text-light d-flex justify-content-center align-items-center flex-column'>
        <h1>Contact Us</h1>
        <h3> <MdMailOutline /> resumebuilder@gmail.com</h3>
        <h3> <FaPhoneAlt /> 9755603421</h3>
        <h4>Connect with Us</h4>
        <div className='d-flex justify-content-center'>
        <FaWhatsapp className='me-3' size={30}/>
        <FaInstagram className='me-3'size={30}/>
        <FaLinkedin size={30} />
        </div>
        <h5 className='p-2'>Designed and built using React</h5>

    </div>
  )
}

export default Footer