import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { PiTwitterLogoBold } from "react-icons/pi";
import { GrInstagram } from "react-icons/gr";
import { SlSocialLinkedin } from "react-icons/sl";

function Footer() {
    return (
        <div className='bg-blue-900 text-white sm:h-56 flex flex-col  justify-between pb-14'>
            <div className='sm:flex mx-10 h-full pb-4 grid grid-cols-2'>
                <div className='flex-1 flex flex-col justify-evenly'>
                    <h1 className='uppercase font-bold'>storecode</h1>
                    <div className='flex font-bold text-white space-x-2'>
                        <span><FaFacebookF /></span>
                        <span><PiTwitterLogoBold /></span>
                        <span><GrInstagram /></span>
                        <span><SlSocialLinkedin /></span>
                    </div>
                </div>
                <div className='flex-1 flex flex-col justify-evenly mt-8'>
                    <h1 className='flex- font-bold text-xl'>Company</h1>
                    <div className='flex-[] flex flex-col space-y-2'>
                        <span>About uUs</span>
                        <span>Carreers</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
                <div className='flex-1 flex flex-col justify-evenly mt-8'>
                    <h1 className='font-bold text-xl'>Quick Links</h1>
                    <div className='flex flex-col'>
                        <span>Blog</span>
                        <span>For Shopper</span>
                        <span>For Influences</span>
                        <span>Query form</span>
                    </div>
                </div>
                <div className='flex-1 flex flex-col justify-evenly mt-11'>
                    <h1 className='font-bold text-xl'>Contact Us</h1>
                    <div className='flex flex-col '>
                        <span>Kharadi, Pune, India</span>
                        <span>Phone - +91-987847594</span>
                        <span>Email: support@storecode.in</span>
                    </div>
                </div>
            </div>
            <div className='mx-10 mt-6'>
                <hr />
                <p>@ 2023 STORECODE, All right reserved.</p>
            </div>
        </div>
    )
}

export default Footer
