import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';



function SignUp() {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/signup', { username, email, password, confirmPassword })
            .then(result => {console.log(result)
            navigate('/signin')
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
                    <div className='flex md:pl-40 md:pt-8 pt-6  text-white '>
                        <form onSubmit={handleSubmit} className='flex flex-col  pl-12  '>
                            <h1 className=' text-4xl font-bold '>Welcome Back!</h1>

                            <div className='mt-10'>
                                <label className=' text-base font-medium'>USERNAME</label>
                                <div className='flex border-2 w-80 h-14 border-[#0E7443] rounded-3xl bg-[#1C2031] mt-5 mb-5 items-center pl-5 gap-3'>
                                    <img src='/assets/user.png' alt='' className='w-9 h-9' />
                                    <input
                                        type='text'
                                        placeholder='kwesman'
                                        name='username'
                                        onChange={(e) => setUsername(e.target.value)}
                                        className='text-black w-full h-full bg-[#1C2031] outline-none rounded-3xl focus:outline-none ' />
                                </div>
                                <label className=' text-base font-medium'>EMAIL</label>
                                <div className='flex border-2 w-80 h-14 border-[#0E7443] rounded-3xl bg-[#1C2031] mt-5 mb-5 items-center pl-5 gap-3'>
                                    <img src='/assets/user.png' alt='' className='w-9 h-9' />
                                    <input
                                        type='email'
                                        placeholder='kwesman@gmail.com'
                                        name='email'
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='text-black w-full h-full bg-[#1C2031] outline-none rounded-3xl focus:outline-none ' />
                                </div>
                                <label className=' text-base font-medium '>PASSWORD</label>
                                <div className='flex border-2 w-80 h-14 border-[#0E7443] rounded-3xl bg-[#1C2031] mt-5 mb-5 items-center pl-5 gap-3'>
                                    <img src='/assets/lock.png' alt='' className='w-9 h-9 bg-[#1C2031]' />
                                    <input
                                        type='password'
                                        placeholder='********'
                                        name='password'
                                        onChange={(e) => setPassword(e.target.value)}
                                        className='text-black w-full h-full bg-[#1C2031] outline-none rounded-3xl' />
                                </div>
                                <label className=' text-base font-medium '>CONFIRM PASSWORD</label>
                                <div className='flex border-2 w-80 h-14 border-[#0E7443] rounded-3xl bg-[#1C2031] mt-5 items-center pl-5 gap-3'>
                                    <img src='/assets/lock.png' alt='' className='w-9 h-9 bg-[#1C2031]' />
                                    <input
                                        type='password'
                                        placeholder='********'
                                        name='confirmPassword'
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className='text-black w-full h-full bg-[#1C2031] outline-none rounded-3xl' />
                                </div>

                                <div className='relative border-2 w-80 h-14 border-[#0E7443] rounded-3xl bg-[#0E7443] hover:bg-[#44c285] mt-7'>
                                    <button type='submit'
                                        className=' absolute top-2 left-28 text-3xl font-semibold'>
                                        Sign Up
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

export default SignUp;