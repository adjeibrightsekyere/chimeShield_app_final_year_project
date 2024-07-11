import React from "react";
import { NavLink } from "react-router-dom";
import backgroundStyle from "../components/backgroundStyle";
import Items from "../components/FeatureItems";



function Features() {

    return (
        <div style={backgroundStyle} className="md:h-screen">
            <nav className='flex items-center justify-between font-roboto shadow-xl pb-10 md:pb-0 md:pt-0   z-10'>
                <img
                    className='hidden md:block w-20 h-20 '
                    src='/assets/logo.png' alt='logo' />
                <div className='flex flex-row text-white text-2xl md:text-3xl mx-auto  items-center justify-center gap-2 md:gap-9  '>
                    <NavLink className="" to='/'>Home</NavLink>
                    <NavLink className="underline" to='/features'>Features</NavLink>
                    <NavLink className="" to='/history'>History</NavLink>
                </div>
                <NavLink to='/signup' className="hidden md:block border border-[#0E7443] bg-[#0E7443] w-24 h-12  md:w-36 md:h-16 font-bold rounded-2xl md:rounded-lg  text-1xl md:text-2xl text-center pt-3 text-white">LOG OUT</NavLink>
            </nav>
            <div className="body flex flex-col  ">
                <div className="paragraph flex  justify-center mt-10">
                    <div className="text-2xl md:text-3xl font-bold">
                        <div className="flex gap-x-3">
                            <h1 className="text-[#0E7443]">Discover the</h1>
                            <h1 className="text-white">powerfull</h1>
                        </div>

                        <div className="flex gap-x-3">
                            <h1 className="text-[#0E7443]">features of</h1>
                            <h1 className="text-white">our</h1>
                            <h1 className="text-[#0E7443]">app.</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center md:flex-row md:mx-auto gap-y-4 md:gap-x-5 mt-14">
                    <Items
                        img='/assets/liveFeed.png'
                        h1='Live'
                        h2='video'
                        h3='feed'
                        
                    />
                    <Items
                        img='/assets/history.png'
                        h1='Activity'
                        h2='history'
                        to='/history'
                        
                    />
                    <Items
                        img='/assets/notification.png'
                        h1='Notifications'
                        
                    />
                </div>

                <div className=" md:mt-28 mx-auto mb-3 mt-6 border cursor-pointer border-[#0E7443] bg-[#0E7443] hover:bg-[#0c3f26] md:rounded-2xl w-72 h-14 pt-2 md:w-[850px] md:h-20 text-2xl md:text-4xl text-white text-center  md:pt-4 font-bold md:m-auto">
                    Connect Device
                </div>
            </div>

        </div>
    )
}
export default Features;