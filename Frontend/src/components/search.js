import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa'


function Search() {

    const [input, setInput] = useState('')
    const handleChange = (value) => {
        setInput(value)
    }
    return (
        <div>
            <div className='flex rounded-3xl  relative'>
                <FaSearch  className='absolute left-9 top-7 md:left-20 md:bottom-4' />
                <input
                    className='border border-[#0E7443] rounded-3xl w-80 md:w-[465px] h-[70px] bg-[#1C2031] text-2xl font-extralight text-center focus:outline-none'
                    placeholder='search by date...'
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />

            </div>

        </div>
    )
}

export default Search;