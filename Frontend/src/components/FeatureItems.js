import React from "react";
import { NavLink } from "react-router-dom";




function Items (props) {
    return(
        <NavLink to={props.to}>
            <div>
                <img src={props.img} alt="" className="border rounded-full  bg-white w-28 h-28 ml-7" />
                <div className="flex gap-x-2 text-3xl font-semibold">
                    <h1 className="text-white">{props.h1}</h1>
                    <h1 className="text-[#0E7443]">{props.h2}</h1>
                    <h1 className="text-white">{props.h3}</h1>
                </div>
            </div>
        </NavLink>
    )
}

export default Items;