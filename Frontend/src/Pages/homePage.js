import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import backgroundStyle from '../components/backgroundStyle';
import Modal from '../components/modal';



function HomePage() {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const handleShowModal = (title, content) => {
        setModalContent({ title, content });
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div style={backgroundStyle} className=' h-screen relative'>
            <nav className='flex justify-center font-roboto shadow-xl pb-10 relative z-10'>

                <img
                    className=' w-20 h-20 absolute left-9 bottom-3'
                    src='/assets/logo.png' alt='logo' />
                <div className='flex flex-row text-white text-2xl md:text-3xl mx-auto items-center  justify-center gap-2 md:gap-9 p-3'>
                    <NavLink className="" to='/'>Home</NavLink>
                    <NavLink className="" to='/features'>Features</NavLink>
                    <NavLink className="" to='/history'>History</NavLink>
                </div>
                <NavLink to='/signup' className="border border-[#0E7443] bg-[#0E7443] w-24 h-12 absolute top-2 right-2 md:w-36 md:h-16 font-bold rounded-2xl md:rounded-lg md:absolute md:right-8 md:bottom-4 text-1xl md:text-2xl text-center pt-3 text-white">SIGN UP</NavLink>

            </nav>
            <div className='flex flex-col text-white font-roboto gap-y-5 md:gap-y-10 pl-10 pt-10'>
                <div className='text-3xl md:text-5xl font-bold font-roboto'>
                    <h1>Welcome to the</h1>
                    <div className='flex gap-2 '>
                        <h1 className='text-[#0E7443] font-roboto'>ChimeShield</h1>
                        <h1>app!</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-1xl md:text-3xl font-normal'>Connect and monitor your<br />
                        doorbell with ease
                    </h1>
                </div>
                <div>
                    <h1 className=' text-1xl md:text-2xl font-extralight'>Sign in to access your dashboard and live feed</h1>
                </div>
                <NavLink
                    className="text-2xl md:text-4xl font-bold border border-[#0E7443] bg-[#0E7443] rounded-lg w-48 h-16 text-center pt-1 "
                    to="/signin">Sign In</NavLink>
                <div className='cursor-pointer font-roboto-slab flex text-1xl md:text-3xl  font-normal md:gap-x-5 pl-2 gap-x-1 md:pl-9 border border-[#0E7443] bg-[#0E7443] rounded-3xl w-80 md:w-[700px] h-14 md:h-16 items-center'>
                    <h1
                        onClick={() => handleShowModal(
                            'Privacy Policy',
                            `
                            1. Introduction<br/>

                                Welcome to ChimeShield. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.<br/>

                            2. Information We Collect:<br/>

                                Personal Information,We may collect personal information such as your name, email address, and contact details when you sign up for our services.<br/>
                               
                            3. How We Use Your Information<br/>

                                We use the information we collect to:<br/>
                                Provide and maintain our services<br/>
                                Improve and personalize your experience<br/>
                                
                                Ensure the security and integrity of our app<br/>
                            4. Sharing Your Information<br/>

                                We do not sell or share your personal information with third parties except to:<br/>

                                Comply with legal obligations<br/>
                                Protect and defend our rights and property<br/>
                                
                            5. Security<br/>

                                We implement robust security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                            
                            `
                        )}
                    >
                        Privacy Policy
                    </h1>
                    <h1
                        onClick={() => handleShowModal(
                            'Terms of service',
                            `
                              <h2>1. Acceptance of Terms</h2>
                                <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                                <h2>2. Use of Our Service</h2>
                                <p>You must follow any policies made available to you within the services. Do not misuse our services. For example, do not interfere with our services or try to access them using a method other than the interface and the instructions that we provide.</p>
                               
                                <h2>7. Limitation of Liability</h2>
                                <p>To the extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.</p>
                                <h2>8. Changes to Terms</h2>
                                <p>We may modify these terms at any time. We will notify you of changes by posting the new terms on our website. Your continued use of the services constitutes your acceptance of the modified terms.</p>
                               
                            
                            `
                        )}
                    >
                        Terms of service
                    </h1>
                    <NavLink to='/contact' >Contact Us</NavLink>
                </div>

            </div>

            <img
                src='/assets/police-bg.png'
                alt=''
                className='absolute top-36 right-36 h-96 opacity-20 z-0' />

            <Modal show={showModal} onClose={handleCloseModal} title={modalContent.title}>
                <div dangerouslySetInnerHTML={{ __html: modalContent.content }} />
            </Modal>
        </div>
    )
}

export default HomePage;