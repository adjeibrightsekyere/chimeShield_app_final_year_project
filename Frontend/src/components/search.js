import axios from 'axios';
import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa'


function Search() {

    const [date, setDate] = useState('')
    const [results, setResults] = useState([]);
    
    const handleSearch = async () => {
      
        try {
            const response = await axios.get('http://localhost:5000/search', { params: {date} });
            setResults(response.data);
        } catch (error) {
            console.error('Error faetching data:', error);
        }
    }
    
    return (
        <div>
            <div onClick={handleSearch} className='flex rounded-3xl  relative'>
                <FaSearch  className='absolute left-9 top-7 md:left-20 md:bottom-4' />
                <input
                    className='border border-[#0E7443] rounded-3xl w-80 md:w-[465px] h-16 md:h-[70px] bg-[#1C2031] text-2xl font-extralight text-center focus:outline-none'
                    placeholder='search DD/MM/YYYY...'
                    type='text'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    onKeyPress={(e) => {
                        if(e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                    onBlur={handleSearch}
                />

            </div>
            <div className="results">
                {results.map((result, index) => (
                    <div key={index} className="result-item">
                        <p>Date: {new Date(result.date).toLocaleDateString()}</p>
                        <p>Time: {result.time}</p>
                        <p>Item: {result.item}</p>
                        <p>Duration: {result.duration}</p>
                        {/* Render other fields as needed */}
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Search;