import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';



function SignUp() {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPasswordVisble, setConfirmPasswordVisible] = useState(false)
    const navigate = useNavigate()

    const handleToggleVisibility = (field) => {
        if (field === "password") {
            setPasswordVisible(!passwordVisible);
        } else if (field === 'confirmPassword') {
            setConfirmPasswordVisible(!confirmPasswordVisble)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        axios.post('http://localhost:5000/signup', { username, email, password, confirmPassword })
            .then(result => {
                console.log(result)
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
                    <div className='flex md:pl-40 md:pt-4 pt-6  text-white '>
                        <form onSubmit={handleSubmit} className='flex flex-col  pl-12  '>
                            <h1 className=' text-4xl font-bold '>Welcome Back!</h1>

                            <div className='mt-10 '>
                                <label className=' text-base font-medium'>USERNAME</label>
                                <div className='flex border-2 w-80 h-12 border-[#0E7443] rounded-3xl bg-[#1C2031] mt-5 mb-5 items-center pl-5 gap-3'>
                                    <img src='/assets/user.png' alt='' className='w-9 h-9' />
                                    <input
                                        type='text'
                                        placeholder='kwesman'
                                        name='username'
                                        onChange={(e) => setUsername(e.target.value)}
                                        className='text-black w-full h-full bg-[#1C2031] outline-none rounded-3xl focus:outline-none ' />
                                </div>
                                <label className=' text-base font-medium'>EMAIL</label>
                                <div className='flex border-2 w-80 h-12 border-[#0E7443] rounded-3xl bg-[#1C2031] mt-5 mb-5 items-center pl-5 gap-3'>
                                    <img src='/assets/user.png' alt='' className='w-9 h-9' />
                                    <input
                                        type='email'
                                        placeholder='kwesman@gmail.com'
                                        name='email'
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='text-black w-full h-full bg-[#1C2031] outline-none rounded-3xl focus:outline-none ' />
                                </div>
                                <label className=' text-base font-medium '>PASSWORD</label>
                                <div className='flex border-2 w-80 h-12 border-[#0E7443] rounded-3xl bg-[#1C2031] mt-5 mb-5 items-center pl-5 gap-3'>
                                    <img src='/assets/lock.png' alt='' className='w-9 h-9 bg-[#1C2031]' />
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        placeholder='********'
                                        name='password'
                                        onChange={(e) => setPassword(e.target.value)}
                                        className='text-black w-full h-full bg-[#1C2031] outline-none rounded-3xl'
                                    />
                                    <img
                                        onClick={() => handleToggleVisibility('password')}
                                        src='/assets/eye.png'
                                        alt=''
                                        className='mr-2'
                                    />
                                </div>
                                <label className=' text-base font-medium '>CONFIRM PASSWORD</label>
                                <div className='flex border-2 w-80 h-12 border-[#0E7443] rounded-3xl bg-[#1C2031] mt-5 items-center pl-5 gap-3'>
                                    <img src='/assets/lock.png' alt='' className='w-9 h-9 bg-[#1C2031]' />
                                    <input
                                        type={ confirmPasswordVisble ? 'text' : 'password'}
                                        placeholder='********'
                                        name='confirmPassword'
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className='text-black w-full h-full bg-[#1C2031] outline-none rounded-3xl'
                                    />
                                    <img
                                        onClick={() => handleToggleVisibility('confirmPassword')}
                                        src='/assets/eye.png'
                                        alt=''
                                        className='mr-2'
                                    />
                                </div>

                                <div className='flex border-2 w-80 h-12 border-[#0E7443] rounded-3xl bg-[#0E7443] hover:bg-[#0c3f26] mt-7'>
                                    <button type='submit'
                                        className=' text-center mx-auto text-2xl font-semibold'>
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