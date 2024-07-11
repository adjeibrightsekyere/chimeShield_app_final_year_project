import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import axios from 'axios';

function SignIn() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/signin', {username, password})
        .then(result => {
            console.log(result)
            if(result.data === "success") {
                navigate('/features')
            }
            
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='h-screen bg-[#1C2031] overflow-hidden flex flex-col'>
            <div className=' grid grid-cols-2'>
                <div className='hidden md:block'>
                    <img
                        className=''
                        src='/assets/login.png' alt='login' />
                </div>
                <div className='flex bg-[#1C2031]'>
                    <div className='flex md:pl-40 md:pt-24 pt-16 text-white '>
                        <form onSubmit={handleSubmit} className='flex flex-col  pl-12  '>
                            <h1 className=' text-4xl font-bold '>Welcome Back!</h1>
                            <div className='flex gap-5 mt-2'>
                                <h2 className=' text-base font-extralight'>Don't have an account yet?</h2>
                                <NavLink className='text-base font-medium' to='/signup'>Sign Up</NavLink>
                            </div>
                            <div className='mt-10'>
                                <label className=' text-base font-medium'>USERNAME</label>
                                <div className='flex border-2 w-80 h-14 border-[#0E7443] rounded-3xl bg-[#1C2031] mt-5 mb-5 items-center pl-5 gap-3'>
                                    <img src='/assets/user.png' alt='' className='w-9 h-9' />
                                    <input
                                        type='text'
                                        placeholder='kwesman...'
                                        name='username'
                                        onChange={(e) => setUsername(e.target.value)}
                                        className='text-black w-full h-full bg-[#1C2031] outline-none rounded-3xl focus:outline-none ' />
                                </div>
                                <label className=' text-base font-medium '>PASSWORD</label>
                                <div className='flex border-2 w-80 h-14 border-[#0E7443] rounded-3xl bg-[#1C2031] mt-5  items-center pl-5 gap-3'>
                                    <img src='/assets/lock.png' alt='' className='w-9 h-9 bg-[#1C2031]' />
                                    <input
                                        type='password'
                                        placeholder='********'
                                        name='password'
                                        onChange={(e) => setPassword(e.target.value)}
                                        className='text-black w-full h-full bg-[#1C2031] outline-none rounded-3xl' />
                                </div>
                                <div className='flex mt-5 gap-10 text-base font-extralight cursor-pointer'>
                                    <label className=' flex gap-2'>
                                        <input type='checkbox' />
                                        <span className=''>Keep me logged in</span>
                                    </label>
                                    <h2>Forgot password?</h2>
                                </div>
                                <div className='flex border-2 w-80 h-14 border-[#0E7443] rounded-3xl bg-[#0E7443] hover:bg-[#0c3f26] mt-5'>
                                    <button type='submit'
                                        className='mx-auto  text-3xl font-semibold'>
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;