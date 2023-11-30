import React, { useState } from 'react'
import { BiSolidShoppingBags } from "react-icons/bi";
import { IoMenuSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import '../index.css'

function Navbar() {

    const [openModal, setOpenModal] = useState(false);
    const toggleModal = ()=>{
        setOpenModal(!openModal);
        console.log("clicked")
    }

    return (
        <div  className="flex justify-between h-[10vh] shadow-lg">
            <div className="leftside flex flex-1 items-center gap-2 mx-8 text-pink-500 text-[1.4rem]">                
                <BiSolidShoppingBags className='sm:text-[2rem] text-[2.4rem]'/>
                
                <h1 className="stcode font-bold sm:text-[.90rem] uppercase mt-2">
                    StoreCode
                </h1>
            </div>
            <IoMenuSharp className='sm:hidden text-[2.4rem] m-6' onClick={toggleModal}/>
            <div className="rightside hidden sm:flex space-x-10 items-center xl:mr-12 xl:space-x-16 lg:mr-10 sm:space-x-10 sm:mr-6">
                <div className="nlist flex-1">
                    <ul className="flex space-x-5 xl:text-2xl xl:space-x-16 lg:text-2xl lg:space-x-12 md:space-x-8 md:text-xl sm:text-[.8rem] sm:space-x-6">
                        <li className="cursor-pointer hover:text-[#FCA61F]" onClick={toggleModal}>Home</li>
                        <li className="cursor-pointer hover:text-[#FCA61F]" onClick={toggleModal}>About</li>
                        <li className="cursor-pointer hover:text-[#FCA61F]" onClick={toggleModal}>Contact</li>
                        <li className="cursor-pointer hover:text-[#FCA61F]" onClick={toggleModal}>Blogs</li>
                    </ul>
                </div>
                <div className='flex items-center space-x-4 flex-1 sm:space-x-3 md:space-4 md:text-xl'>
                    <span className='cursor-pointer hover:text-[#FCA61F]' onClick={toggleModal}>Login</span>
                    <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:text-[1.2rem] md:px-4 md:pb-1 py-1 px-4 rounded sm:px-2 text-white text-xl sm:text-[.8rem] sm:py-[.001rem]" onClick={toggleModal}> Register</button>
                </div>

            </div>
            {
                openModal && (<div id='nav' className="rightside flex flex-col absolute top-20 bg-slate-500 sm:hidden space-x-10  xl:mr-12 xl:space-x-16 lg:mr-10 sm:space-x-10 sm:mr-6 w-full h-screen">
                <div className="nlist flex-1  flex items-cente m-8 text-[1.5rem]">
                    <ul className="flex flex-col sm:flex-row  xl:text-2xl xl:space-x-16 lg:text-2xl lg:space-x-12 md:space-x-8 md:text-xl sm:text-[.8rem] sm:space-x-6 text-white">
                        <li className="cursor-pointer hover:text-[#FCA61F] mt-8 flex items-center"><IoHome className='text-[2rem] mr-4 text-blue-800'/> Home</li>
                        <li className="cursor-pointer hover:text-[#FCA61F] mt-8 flex items-center"><FaPeopleGroup className='text-[2rem] mr-4 text-blue-800'/>About</li>
                        <li className="cursor-pointer hover:text-[#FCA61F] mt-8 flex items-center"><FaPhoneVolume className='text-[2rem] mr-4 text-blue-800'/>Contact</li>
                        <li className="cursor-pointer hover:text-[#FCA61F] mt-8 flex items-center"><ImBooks className='text-[2rem] mr-4 text-blue-800'/>Blogs</li>
                    </ul>
                </div>
                <div className='flex items-center space-x-4 flex-1 sm:space-x-3 md:space-4 md:text-xl text-[2.3rem]'>
                    <span className='cursor-pointer hover:text-[#FCA61F] font-bold'>Login</span>
                    <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:text-[1.2rem] md:px-4 md:pb-1 py-1 px-4 rounded sm:px-2 text-white text-xl sm:text-[.8rem] sm:py-[.001rem]"> Register</button>
                </div>

            </div>)
            }
        </div>
    )
}

export default Navbar
