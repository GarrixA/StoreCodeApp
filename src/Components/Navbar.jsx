import React from 'react'
import { BiSolidShoppingBags } from "react-icons/bi";

function Navbar() {
    return (
        <div className="flex justify-between h-[10vh]">
            <div className="leftside flex flex-1 items-center gap-2 mx-8">
                <div className="log">
                <BiSolidShoppingBags />
                </div>
                <div className="stcode font-bold text-lg uppercase">
                    StoreCode
                </div>
            </div>
            <div className="rightside flex space-x-10 items-center xl:mr-12 xl:space-x-16 lg:mr-10">
                <div className="nlist">
                    <ul className="flex space-x-5 xl:text-2xl xl:space-x-16 lg:text-2xl lg:space-x-12 md:space-x-8 md:text-xl">
                        <li className="cursor-pointer hover:text-[#FCA61F]">Home</li>
                        <li className="cursor-pointer hover:text-[#FCA61F]">About</li>
                        <li className="cursor-pointer hover:text-[#FCA61F]">Contact</li>
                        <li className="cursor-pointer hover:text-[#FCA61F]">Blogs</li>
                        <li className="cursor-pointer hover:text-[#FCA61F]">Log in</li>
                    </ul>
                </div>
                <button className="button xl:text-[2rem] lg:text-[1.5rem] "> Register</button>
            </div>
        </div>
    )
}

export default Navbar
