import React from 'react'
import './Contact.css'
// import { FaLocationDot } from "react-icons/fa6";
export default function Contact() {
  return (
    <div className='contact'>
      <div className="backcolor"></div>
      <div className="contactbox">
        <h1 className="contact_heading">Get in Touch</h1>
        <p className='para'>We are here for you! How can we help?</p>
        <form action="post">
            
        <input type="text" placeholder="Enter your Name" id='name'/> 
        <input type="text" placeholder="Enter your email address" id='email'/>
        <textarea rows="4" cols={50} placeholder='Go ahead, we are listening......' id='listening'/>
        <input type='submit' value="SUBMIT" id='submit'/>
        </form>
          <img src='login.png' className='login'/>
          <div className="symbol1">
            <img src='location.png' className='location' />
            <div className='location_address'>674 Washington Avenue</div>
          </div>
          <div className="symbol2">
            <img src='mail.png' className='mail' />
            <div className='mail_address'>Johndoe123@Gmail.Com</div>
          </div>
          <div className="symbol3">
            <img src='phone.png' className='phone' />
            <div className='phone_address'>602-216-4243</div>
        </div>
      </div>
    </div>
  )
}
