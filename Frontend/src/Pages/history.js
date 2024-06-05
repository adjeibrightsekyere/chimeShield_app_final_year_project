import React from "react";
import securityshield from '../assets/securityshield.png'
import Search from "../components/search";
import Card from "../components/card";


function History() {

    const backgroundStyle = {
        backgroundImage: `url(${securityshield})`,
        width: '100%',
        height: '100vh',
        backgroundPosition: "center",
        backgroundSize: 'cover',
        backgroundColor: '#1C2031'
    }
    return(
        <div style = {backgroundStyle} className="text-white" >
           <nav className="flex shadow-xl pb-2">
                <div className="flex text-[40px] gap-8 pt-4 pl-48">
                    <h1 className=" font-extralight">Home</h1>
                   <Search />
                   <h1 className=" font-extralight">Features</h1>
                   <h1>History</h1>
                   
                </div>
           </nav>
           <Card/>
        </div>
    )
}
export default History;