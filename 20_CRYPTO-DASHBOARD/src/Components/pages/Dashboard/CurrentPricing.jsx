import React from 'react'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";
import graph from './assets/graph.jpg'

const CurrentPricing = () => {
    const Weeks = [
        {
            title: "1H",
        },
        {
            title: "1D",
            isActive: true,
        },
        {
            title: "1W",
        },
        {
            title: "1M",
        },
        // {
        //     title: "6M",
        // },
        // {
        //     title: "1Y",
        // },
        // {
        //     title: "ALL",
        // },

    ]
    return (
        <div className='flex flex-col'>
            <div className='font-medium flex justify-between'>
                <div className='flex flex-wrap justify-between'>
                    <div className='flex flex-col sm:gap-1 my-[15px] sm:my-[0px]'>
                        <h2 className='text-[14px] text-gray-700'> Current Price </h2>
                        <div className='flex flex-wrap sm:gap-5 text-[24px]'>
                            <h2 className='flex items-center text-[20px]'>
                                Rs. 200
                                <span className=' ml-[5px] text-green-800 flex items-center text-[14px]  font-semibold '> <MdOutlineArrowOutward className='text-2xl' /> 4.0% </span></h2>
                        </div>
                    </div>
                </div>

                <div className='w-[50%] flex items-center justify-end md:justify-center gap-2 sm:gap-4'>
                    <div className='flex items-center gap-2 bg-purple-800 hover:bg-purple-600 py-[5px] px-[10px] rounded-lg text-white'>
                        <BsFillPlusCircleFill />
                        Buy
                    </div>
                    <div className='flex items-center gap-2 bg-purple-800 hover:bg-purple-600 py-[5px] px-[10px] rounded-lg text-white'>
                        <AiFillMinusCircle />
                        <div>
                            Sell
                        </div>

                    </div>
                </div>
            </div>



            <div className='w-[40%] flex justify-around py-[4px] rounded-lg self-end bg-slate-300 mr-[5%]'>
                {
                    Weeks.map((item, index) => (
                        <button key={index} className={`${item.isActive ? "bg-white" : ""} hover:bg-white text-[12px] font-medium flex items-center justify-center rounded-lg py-[2px] px-[7px]`}>{item.title}</button>
                    ))
                }
            </div>
            <div className='w-full '>
                <img src={graph} className='w-full' alt="" />
                <div className='flex justify-around items-center  text-gray-700 text-[13px]'>
                    <p>10:15 AM</p>
                    <p>12:00 PM</p>
                    <p>1:45 PM</p>
                    <p>3:15 PM</p>
                    <p>5:00 PM</p>
                </div>
            </div>

        </div>
    )
}

export default CurrentPricing