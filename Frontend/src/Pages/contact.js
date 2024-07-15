import { useState } from "react";
import backgroundStyle from "../components/backgroundStyle";
import { NavLink } from "react-router-dom";

function Contact() {
    const [values, setValues] = useState({
        first: '',
        last: '',
        email: '',
        phone: '',
        message: ''
    });


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted',values);
        if (!values.first || !values.last || !values.email || !values.phone || !values.message) {
            alert('All fields are required');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/contact',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const data = await response.json();
            if (response.ok) {
                alert('Message sent');
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('failed to send messsage');
        }
    }

    return (
        <div style={backgroundStyle} className="md:h-screen">
            <nav className='flex items-center justify-between font-roboto shadow-xl pb-10 md:pb-0 md:pt-0   z-10'>
                <img
                    className='hidden md:block w-20 h-20 '
                    src='/assets/logo.png' alt='logo' />
                <div className='flex flex-row text-white text-2xl md:text-3xl mx-auto  items-center justify-center gap-2 md:gap-9  '>
                    <NavLink className="" to='/'>Home</NavLink>
                    <NavLink className="" to='/features'>Features</NavLink>
                    <NavLink className="" to='/history'>History</NavLink>
                </div>
                <NavLink to='/signup' className="hidden md:block border border-[#0E7443] bg-[#0E7443] w-24 h-12  md:w-36 md:h-16 font-bold rounded-2xl md:rounded-lg  text-1xl md:text-2xl text-center pt-3 text-white">LOG OUT</NavLink>
            </nav>
            <div className="flex  w-[80%] h-[70%] m-auto mt-24">
                <div className="bg-white opacity-50 w-[40%] h-[100%] ">
                    <img
                        className="hidden md:block mt-20 "
                        src="/assets/log-img.png" alt="" />
                </div>
                <div className=" overflow-hidden w-[60%] h-[100%]  bg-[#1C2031]">
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 m-3 gap-x-5 ">
                        <div>
                            <label className="text-white font-medium">First Name</label>
                            <div className="border-2 w-64 h-12 mt-3 border-[#0E7443] rounded-3xl flex justify-center items-center">
                                <input
                                    type="text"
                                    name="first"
                                    placeholder="Bright"
                                    value={values.first}
                                    onChange={handleChange}
                                    className=" w-full h-full rounded-3xl text-center  outline-none bg-[#1C2031] text-white text-opacity-50 font-serif "
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-white font-medium">Last Name</label>
                            <div className="border-2 flex items-center justify-center w-64 h-12 mt-3 border-[#0E7443] rounded-3xl">
                                <input
                                    type="text"
                                    name="last"
                                    value={values.last}
                                    onChange={handleChange}
                                    placeholder="Adjei"
                                    className=" w-full h-full rounded-3xl text-center outline-none bg-[#1C2031] text-white text-opacity-50 font-serif "
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <label className="text-white font-medium">Email</label>
                            <div className="border-2 flex items-center justify-center w-64 h-12 mt-3 border-[#0E7443] rounded-3xl">
                                <input
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="kwesman@gmail.com"
                                    className=" w-full h-full rounded-3xl text-center outline-none bg-[#1C2031] text-white text-opacity-50 font-serif"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <label className="text-white font-medium ">PHONE</label>
                            <div className="border-2 flex items-center justify-center w-64 h-12 mt-3 border-[#0E7443] rounded-3xl appearance-none">
                                <input
                                    type='number'
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    placeholder="+233502052267"
                                    className=" w-full h-full rounded-3xl outline-none text-center bg-[#1C2031] text-white text-opacity-50 font-serif"
                                />
                            </div>
                        </div>
                        <div className="mt-4 mb-4">
                            <label className="text-white font-medium">Message</label>
                            <div className="border-2 flex items-center justify-center  h-24 mt-3 border-[#0E7443] rounded-3xl">
                                <textarea
                                    type='text'
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    placeholder="Bright"
                                    className=" w-full h-full rounded-3xl text-left pt-4 outline-none bg-[#1C2031] text-white text-opacity-50  "
                                />
                            </div>
                        </div>
                        <div className="col-span-2">
                        <button type="submit" className="border border-[#0E7443] rounded-3xl bg-[#0E7443] hover:bg-[#0c3f26] w-full h-12 ">
                            SEND MESSAGE
                        </button>
                    </div>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}
export default Contact;