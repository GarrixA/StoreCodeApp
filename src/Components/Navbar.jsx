import React, { useState } from 'react'
import { BiSolidShoppingBags } from "react-icons/bi";
import { IoMenuSharp } from "react-icons/io5";
import '../index.css'

function Navbar() {

    const [openModal, setOpenModal] = useState(false);
    const toggleModal = ()=>{
        setOpenModal(!openModal);
        console.log("clicked")
    }

    return (
        <div  className="flex justify-between shadow-lg">
            <div className="flex flex-1 items-center text-pink-500 md:m-4 sm:space-x-2 sm:p-4 md:p-4 md:space-x-4 m-4 space-x-2">                
                <BiSolidShoppingBags className='sm:text-[2rem] md:text-[2.4rem] text-[2rem]'/>
                
                <h1 className="stcode font-bold md:text-[.90rem] uppercase mt-2 sm:text-[.8em]">
                    StoreCode
                </h1>
            </div>
            <IoMenuSharp className='sm:hidden text-[2.4rem] m-6' onClick={toggleModal}/>
            <div className="rightside hidden sm:flex items-center flex-[2]">
                <div className="nlist flex-1 ">
                    <ul className="flex items-center justify-center space-x-4">
                        <li className="cursor-pointer hover:text-[#FCA61F] xl:p-4 xl:text-[1.2rem] lg:p-3 text-[1.1rem] md:p-2 md:text-[1rem] sm:text-[.8rem] sm:p-1">Home</li>
                        <li className="cursor-pointer hover:text-[#FCA61F] xl:p-4 xl:text-[1.2rem] lg:p-3 text-[1.1rem] md:p-2 md:text-[1rem] sm:text-[.8rem] sm:p-1">About</li>
                        <li className="cursor-pointer hover:text-[#FCA61F] xl:p-4 xl:text-[1.2rem] lg:p-3 text-[1.1rem] md:p-2 md:text-[1rem] sm:text-[.8rem] sm:p-1">Contact</li>
                        <li className="cursor-pointer hover:text-[#FCA61F] xl:p-4 xl:text-[1.2rem] lg:p-3 text-[1.1rem] md:p-2 md:text-[1rem] sm:text-[.8rem] sm:p-1">Blogs</li>
                    </ul>
                </div>
                <div className='flex items-center flex-1 justify-end sm:mr-4'>
                    <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:text-[1.2rem] md:pb-1 py-1 px-4 rounded  text-white text-xl sm:text-[1rem] xl:m-4 xl:p-1 xl:pb-2 xl:px-5 lg:pb-1 lg:px-4 lg:m-3 md:px-3 md:m-3 sm:m-1 sm:px-4 sm:py-0 " onClick={toggleModal}>Login</button>
                    <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:text-[1.2rem] md:pb-1 py-1 px-4 rounded  text-white text-xl sm:text-[1rem] xl:m-4 xl:p-1 xl:pb-2 xl:px-5 lg:pb-1 lg:px-4 lg:m-3 md:px-3 md:m-3 sm:m-1 sm:px-4 sm:py-0 " onClick={toggleModal}> Register</button>
                </div>

            </div>
            {
                openModal && (<div id='nav' className="rightside flex font-nunito flex-col absolute top-[5.4rem] bg-slate-500 sm:hidden space-x-10  xl:mr-12 xl:space-x-16 lg:mr-10 sm:space-x-10 sm:mr-6 w-full h-screen">
                <div className="nlist flex-1  flex items-cente m-8 text-[1.5rem]">
                    <ul className="flex flex-col sm:flex-row  xl:text-2xl xl:space-x-16 lg:text-2xl lg:space-x-12 md:space-x-8 md:text-xl sm:text-[.8rem] sm:space-x-6 text-white">
                        <li className="cursor-pointer hover:text-[#FCA61F] mt-8 flex items-center" onClick={toggleModal}>Home</li>
                        <li className="cursor-pointer hover:text-[#FCA61F] mt-8 flex items-center" onClick={toggleModal}>About</li>
                        <li className="cursor-pointer hover:text-[#FCA61F] mt-8 flex items-center" onClick={toggleModal}>Contact</li>
                        <li className="cursor-pointer hover:text-[#FCA61F] mt-8 flex items-center" onClick={toggleModal}>Blogs</li>
                    </ul>
                </div>
                <div className='flex items-center space-x-4 flex-1 justify-start'>
                    <span className='cursor-pointer hover:text-[#FCA61F] font-bold text-xl text-white'>Login</span>
                    <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:text-[1.2rem] md:px-4 md:pb-1 py-1 px-4 rounded sm:px-2 text-white text-xl sm:text-[.8rem] sm:py-[.001rem]"> Register</button>
                </div>

            </div>)
            }
        </div>
    )
}

export default Navbar
