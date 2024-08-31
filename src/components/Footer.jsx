import React, { useState } from 'react';
import '../index.css'
import logo from '../assets/images/logo.svg'
import emailicon from '../assets/images/icon-email.svg'
import location from '../assets/images/icon-location.svg'
import phone from '../assets/images/icon-phone.svg'

import facebook from '../assets/images/facebook.svg'
import twitter from '../assets/images/twitter.svg'
import instagram from '../assets/images/instagram.svg'

const Footer = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setError(true);
        }else {
            setError(false);
            alert('Thank you! Your email has been successfully submitted.');
            setEmail('');
        }
    };
    
  return (
    <div className='text-white bg-footer-bg px-4 relative pt-60 sm:pt-44 lg:px-20  sm:pb-20'>
        <div className='bg-testimonials-bg px-7 py-14 rounded-md absolute -top-54 md:-top-36 transform -translate-x-1/2 left-1/2  w-5/6 lg:w-3/4'>
           <h3 className='text-2xl font-bold'>Get early access today</h3> 
           <p className='mt-5'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                questions, our support team would be happy to help you.
            </p>
            <form className='mt-5 flex flex-col md:flex-row' onSubmit={handleSubmit}>
                <label className='flex flex-col flex-1 md:mr-4'>
                    <input type="email" 
                        name='email' 
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder='email@example.com' 
                        className='p-4 w-full rounded-full text-gray-600 font-semibold outline-none' />
                        {error && (
                            <span className='text-sm text-light-red text-left'>Please enter a valid email address</span>
                        )}
                </label>
                <button type='submit' id='submitBtn' className='mt-5 w-full hover:bg-blue-300 md:mt-0 md:px-10 md:w-auto md:self-end text-white bg-blue-cta p-4 font-bold rounded-full'>Get Started For Free</button>
            </form>
        </div>
        <div className='mt-20 '>
            <img src={logo} alt="" className='w-28 h-8'/>
            <div className='sm:grid sm:grid-cols-2 text-center md:grid-cols-3 gap-x-10 lg:grid-cols-5 md:gap-y-10 lg:text-center'>
                <div className='mt-12 flex gap-4 '>
                    <img src={location} alt=""  className='h-5 w-5'/>
                    <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua
                    </p>
                </div>
                <div className='mt-5 sm:mt-12 flex flex-col'>
                    <span className='flex gap-4 md:justify-center '>
                        <img src={phone} alt="" className='h-5 w-5'/>
                        <p>+1-543-123-4567</p>
                    </span>
                    <span className='flex gap-4 mt-5 md:justify-center'>
                        <img src={emailicon} alt="" className='h-5 w-5'/>
                        <p>example@fylo.com</p>
                    </span>
                </div>
                <div className='flex flex-col gap-5 text-left mt-16 md:mt-12 md:text-center'>
                    <a href="">About Us</a>
                    <a href="">Jobs</a>
                    <a href="">Press</a>
                    <a href="">Blog</a>
                </div>
                <div className='flex flex-col gap-5 text-left mt-16 lg:mt-12 md:align-center md:mt-0 md:text-center'>
                    <a href="">Contact Us</a>
                    <a href="">Terms</a>
                    <a href="">Privacy</a>
                </div>
                <div className='flex gap-4 w-full justify-center mt-16 pb-10 lg:mt-12 md:mt-0'>
                    <a href=""><img src={facebook} alt="" className='h-9 w-9 hover:scale-110'/></a>
                    <a href=""><img src={twitter} alt="" className='h-9 w-9 hover:scale-110'/></a>
                    <a href=""><img src={instagram} alt="" className='h-9 w-9 hover:scale-110'/></a>
                </div>
            </div>
        </div>
    </div>     
  )
}

export default Footer