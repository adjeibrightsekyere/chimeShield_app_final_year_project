import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



function SignIn() {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("form submitted", values)
    }
    return (
        <div className='h-screen overflow-hidden flex flex-col'>
            <div className=' grid grid-cols-2'>
                <div className=''>
                    <img
                        className=''
                        src='/assets/login.png' alt='login' />
                </div>
                <div className='flex bg-[#1C2031]'>
                    <div className='flex pl-40 pt-24 text-white '>
                        <form onSubmit={handleSubmit} className='flex flex-col  pl-12  '>
                            <h1 className=' text-4xl font-bold '>Welcome Back!</h1>
                            <div className='flex gap-5 mt-2'>
                                <h2 className=' text-base font-extralight'>Don't have an account yet?</h2>
                                <NavLink className='text-base font-medium' to='/signup'>Sign Up</NavLink>
                            </div>
                            <div className='mt-10'>
                                <label className=' text-base font-medium'>USERNAME</label>
                                <div className='flex border-2 w-80 h-16 border-[#0E7443] rounded-3xl bg-[#1C2031] mt-5 mb-5 items-center pl-5 gap-3'>
                                    <img src='/assets/user.png' alt='' className='w-9 h-9' />
                                    <input
                                        type='text'
                                        placeholder='kwesman...'
                                        name='username'
                                        value={values.username}
                                        onChange={handleChange}
                                        className='text-black w-full h-full bg-[#1C2031] outline-none rounded-3xl' />
                                </div>
                                <label className=' text-base font-medium '>PASSWORD</label>
                                <div className='flex border-2 w-80 h-16 border-[#0E7443] rounded-3xl bg-[#1C2031] mt-5  items-center pl-5 gap-3'>
                                    <img src='/assets/lock.png' alt='' className='w-9 h-9 bg-[#1C2031]' />
                                    <input
                                        type='password'
                                        placeholder='********'
                                        name='password'
                                        value={values.password}
                                        onChange={handleChange}
                                        className='text-black w-full h-full bg-[#1C2031] outline-none rounded-3xl' />
                                </div>
                                <div className='flex mt-5 gap-10 text-base font-extralight cursor-pointer'>
                                    <label className=' flex gap-2'>
                                        <input type='checkbox' />
                                        <span className=''>Keep me logged in</span>
                                    </label>
                                    <h2>Forgot password?</h2>
                                </div>
                                <div className='relative border-2 w-80 h-16 border-[#0E7443] rounded-3xl bg-[#0E7443]  mt-5'>
                                    <button type='submit'
                                        className=' absolute top-2 left-28 text-3xl font-semibold'>
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