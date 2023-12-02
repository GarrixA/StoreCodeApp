import React from 'react'
import image1 from '../Images/test1.png'
import image2 from '../Images/image-8.png'
import image3 from '../Images/fashon1.png'
import image4 from '../Images/image44.png'
import image5 from '../Images/images (2).jpeg'

function InterImages() {
    return (
        <div className='flex h-full space-x-4 sm:ml-0 ml-10'>
            <div className='flex flex-col h-full justify-between'>
                <div className='bg-red-400 w-[11rem] md:w-[15rem] md:h-[15rem] h-[11rem] rounded-t-[30%] rounded-br-[30%] rounded-bl-[80%] overflow-hidden shadow-[30px_60px_90px_10px_rgb(248,113,113)]'>
                    <img src={image1} alt="image1" className=' object-cover'/>
                </div>
                <div className=' bg-black w-[6rem] h-[6rem] rounded-full overflow-hidden relative bottom-4 right-8'>
                    <img src={image2} alt="image2" />
                </div>
                <div className=' relative bottom-14 left-[4.4rem] bg-gradient-to-t from-slate-800 via-slate-500 to-slate-300 w-[7rem] h-[6rem] rounded-t-[50%] rounded-bl-[50%] overflow-hidden'>
                    <img src={image3} alt="image3" className='w-[8rem] h-[6rem] mt-4'/>
                </div>
            </div>
            <div className=' flex flex-col items-end'>
                <div className=' bg-pink-600 w-[6rem] h-[6rem] rounded-t-[50%] rounded-bl-[50%] overflow-hidden'>
                    <img src={image4} alt="image4" />
                </div>
                <div className=' bg-blue-500 w-[6rem] h-[12rem] rounded-t-full rounded-b-full overflow-hidden'>
                    <img src={image5} alt="image5" className=' h-[12rem]'/>
                </div>
            </div>
        </div>
    )
}

export default InterImages
