import {React} from "react";
import { NavLink } from "react-router-dom";

import Search from "../components/search";
import Card from "../components/card";
import backgroundStyle from "../components/backgroundStyle";



function History() {
    
    return(
        <div style = {backgroundStyle} className="text-white h-full " >
           <nav className="flex shadow-xl pb-2">
                <div className="flex flex-col md:flex-row text-2xl md:text-3xl  justify-center gap-3 md:gap-8 p-3 items-center w-[80%] mx-auto">
                    <NavLink to='/' className=" font-extralight">Home</NavLink>
                   <Search />
                   <NavLink to='/features' className=" font-extralight">Features</NavLink>
                   <h1>History</h1>
                   
                </div>
           </nav>
           <Card />
        </div>
    )
}
export default History;