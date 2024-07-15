import {React,  useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import Search from "../components/search";
import Card from "../components/card";
import backgroundStyle from "../components/backgroundStyle";




function History() {
    const [initialData, setInitialData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/getData')
            .then(response => {
                console.log('API Response:', response.data);
                setInitialData(response.data);
                setSearchResults(response.data);
            })
            .catch(error => {
                console.error('Error fetching data', error);
            });
    }, []);

    const handleSearchResults = (results) => {
        setSearchResults(results);
    }

   
    
    return(
        <div style = {backgroundStyle} className="text-white " >
           <nav className="flex shadow-xl pb-2">
                <div className="flex flex-col md:flex-row text-2xl md:text-3xl  justify-center gap-3 md:gap-8 p-3 items-center w-[80%] mx-auto">
                    <NavLink to='/' className=" ">Home</NavLink>
                   <Search onSearchResults={handleSearchResults} initialData={initialData} />
                   <NavLink to='/features' className=" ">Features</NavLink>
                   <NavLink className='underline' to="history">History</NavLink>
                   
                </div>
           </nav>
           <Card data={searchResults} />
        </div>
    )
}
export default History;