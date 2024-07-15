import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa'


function Search({ onSearchResults, initialData }) {

    const [date, setDate] = useState('')

    useEffect(() => {
        if (!date) {
            onSearchResults(initialData);
        }
    }, [date, initialData, onSearchResults])

    

    const handleSearch = async (e) => {
        const inputValue = e.target.value;
        setDate(inputValue);
        if (inputValue ==='') {
            onSearchResults(initialData);
            return;
        }

        try {
            const response = await axios.get('http://localhost:5000/search', { params: { date: inputValue } });
            onSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div>
            <div onClick={handleSearch} className='flex border border-[#0E7443] rounded-3xl w-80  h-12  bg-[#1C2031] justify-center items-center '>
                <FaSearch className='' />
                <input
                    className='bg-[#1C2031] text-xl font-extralight text-center focus:outline-none'
                    placeholder=' DD/MM/YYYY...'
                    type='text'
                    value={date}
                    onChange={handleSearch}

                />
            </div>
        </div>
    )
}

export default Search;