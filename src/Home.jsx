import React, { useState } from 'react';
import Logo from './assets/images/logo.png'
import Star from './assets/images/star.png'
import Globe from './assets/images/globe.png'
import Phone from './assets/images/phone.png'
import Vocabp from './assets/images/vocabp.jpg'
import Friend from './assets/images/friend.jpg'
import Grammer from './assets/images/grammer.jpg'

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-r from-purple-500 to-pink-500" id="home">
                <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <a href="#">
                                <img className="w-auto h-6 sm:h-7" src={Logo} alt="Logo" />
                            </a>
                            <h3 className="text-xl font-bold text-white">EFORISM</h3>
                        </div>

                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-white hover:text-gray-300 focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                {!isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" stroke="white" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" stroke="white" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-purple-700 lg:bg-transparent shadow-md lg:shadow-none lg:mt-0 lg:p-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                            }`}
                    >
                        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-8">
                            <a className="text-white hover:text-pink-200 transition-colors duration-300 transform" href="#home">Home</a>
                            <a className="text-white hover:text-pink-200 transition-colors duration-300 transform" href="#about">About</a>
                            <a className="text-white hover:text-pink-200 transition-colors duration-300 transform" href="#feature">Feature</a>
                            <a className="text-white hover:text-pink-200 transition-colors duration-300 transform" href="#contact">Contact</a>
                        </div>

                        <a className="block px-5 py-2 mt-4 text-sm text-center text-white bg-pink-500 rounded-lg lg:mt-0 hover:bg-pink-400 lg:w-auto transition-colors duration-300 md:ml-6" href="#">
                            Get started
                        </a>
                    </div>
                </nav>

                <div className="container px-6 py-16 mx-auto text-center">
                    <div className="max-w-lg mx-auto">
                        <h1 className="text-3xl font-semibold text-white lg:text-4xl">Navigate the World Easily Expert English Skills for Tourism.</h1>
                        <p className="mt-6 text-pink-100">Master essential English skills for seamless travel experiences, making your global adventures more enriching and enjoyable.</p>
                        <button className="px-5 py-2 mt-6 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-pink-500 focus:outline-none">
                            JOIN WITH US
                        </button>
                    </div>

                    <div className="flex justify-center mt-10">
                        <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="App Preview" />
                    </div>
                </div>
            </section>

            {/* Topic */}

            <div className="relative py-16 bg-pink-100" >
                <div className="container relative m-auto px-6 text-gray-500 md:px-12">
                    <div className="text-center w-full mx-auto px-4 sm:px-6 lg:px-8 z-20">
                        <h2 className="text-3xl font-extrabold text-purple-600  sm:text-4xl mb-16 drop-shadow-lg">
                            <span className="block">
                                Ready to Achieve Greatness?
                            </span>
                            <span className="block ">
                                The time is now.
                            </span>
                        </h2>
                    </div>
                    <div className="grid gap-16 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
                        <div className="p-6 bg-white bg-opacity-100 backdrop-filter backdrop-blur-lg rounded-3xl shadow-lg ">
                            <div className='bg-purple-500 h-20 w-20 flex justify-center items-center rounded-full mx-auto mb-8'>
                                <img src={Star} alt="3D Icon 1" className="w-24 h-24" />
                            </div>
                            <h3 className="text-xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg mb-8">
                                Interactive Language Learning Tools
                            </h3>

                            <p className="mt-2 text-gray-400 text-justify ">Designed to facilitate language learning through interactive methods. This feature combines modern technology with practical activities, allowing users to practice language skills through conversation simulations, listening exercises, and interactive quizzes, all aimed at improving language proficiency in an engaging and effective way.</p>
                        </div>
                        <div className="p-6 bg-white bg-opacity-100 backdrop-filter backdrop-blur-lg rounded-3xl shadow-lg ">
                            <div className='bg-purple-500 h-20 w-20 flex justify-center items-center rounded-full mx-auto mb-8'>
                                <img src={Globe} alt="3D Icon 1" className="w-24 h-24" />
                            </div>
                            <h3 className="text-xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg mb-8">
                                Comprehensive Cultural Insights
                            </h3>

                            <p className="mt-2 text-gray-400 text-justify "> Provide in-depth understanding of diverse cultures, helping users to navigate and appreciate cultural differences. This feature offers valuable information on customs, traditions, and social norms, enabling users to connect more meaningfully and respectfully with people from various backgrounds, enhancing their overall travel or professional experience.</p>
                        </div>
                        <div className="p-6 bg-white bg-opacity-100 backdrop-filter backdrop-blur-lg rounded-3xl shadow-lg ">
                            <div className='bg-purple-500 h-20 w-20 flex justify-center items-center rounded-full mx-auto mb-8'>
                                <img src={Phone} alt="3D Icon 1" className="w-24 h-24" />
                            </div>
                            <h3 className="text-xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg mb-8">
                                Real-Time Travel Assistance
                            </h3>

                            <p className="mt-2 text-gray-400 text-justify ">Offers immediate support and guidance during your travels, providing up-to-date information, tips, and help whenever you need it. This feature ensures a smoother and more enjoyable journey by addressing any challenges or questions in real time, helping you navigate unfamiliar locations with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* About */}
            <section className="bg-gradient-to-r from-purple-500 to-pink-500" id="about">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="lg:pr-10">

                            <h5 className="mb-4 text-4xl font-extrabold leading-none text-white">
                                Discover More About Us and Our Commitment to Excellence.<br className="hidden md:block" />

                            </h5>
                            <p className="mb-6 text-white">
                                Our commitment to enhancing English skills for tourism is at the heart of what we do. With a focus on practical, real-world application, we provide comprehensive language training designed to empower professionals and travelers alike. Our tailored programs cover everything from essential communication skills to cultural insights, ensuring our learners can navigate the global tourism landscape with confidence. Whether you're preparing for a career in the tourism industry or simply looking to enrich your travel experiences, our expert guidance and interactive tools will equip you with the language proficiency and cultural understanding needed to excel.
                            </p>
                            <hr className="mb-5 border-gray-300" />
                            <div className="flex items-center space-x-4">
                                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path
                                            d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
                                    <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                        <circle cx="15" cy="15" r="4"></circle>
                                        <path
                                            d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path
                                            d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                                        <path
                                            d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <img className="object-cover w-full" src={Logo} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature */}
            <section className='relative py-16 bg-pink-100' id="feature">
                <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div className="text-center">
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-pink-500">
                            Features
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-purple-700 sm:text-4xl md:mx-auto  text-center">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-purple-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">Discover</span>
                        </span>{' '}
                        Exceptional English Learning Features
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg text-center">
                        Enhance your tourism English with essential tools and real-time support.
                    </p>
                </div>


                <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-32 px-6 py-16 max-w-7xl mx-auto">
                    <div className="lg:w-1/2 text-gray-700">
                        <h2 className="text-3xl font-bold text-purple-700 sm:text-4xl mb-4">Vocabulary,Pronunciation and more Learn Topic.</h2>
                        <p className="mb-6">
                            Expand your English proficiency with tailored topics covering vocabulary, pronunciation, and more—designed to enhance your communication in the tourism industry."
                        </p>
                        <a href="#" className="inline-block px-5 py-2 text-sm font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-500 transition-colors duration-300">
                            Learn More
                        </a>
                    </div>

                    <div className="lg:w-1/2">
                        <img src={Vocabp} alt="Tourism Image" className="rounded-lg shadow-lg object-cover w-full h-80 lg:h-auto" />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-32 px-6 py-16 max-w-7xl mx-auto">

                    <div className="lg:w-1/2">
                        <img src={Friend} className="rounded-lg shadow-lg object-cover w-full h-80 lg:h-auto" />
                    </div>

                    <div className="lg:w-1/2 text-gray-700 my-3">
                        <h2 className="text-3xl font-bold text-purple-700 sm:text-4xl mb-4">Talk with your friends.</h2>
                        <p className="mb-6">
                            Engage in conversations with your friends to effortlessly enhance your English fluency. By practicing daily, you'll not only improve your language skills but also build the confidence needed for effective communication in any situation.
                        </p>
                        <a href="#" className="inline-block px-5 py-2 text-sm font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-500 transition-colors duration-300">
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-32 px-6 py-16 max-w-7xl mx-auto">
                    <div className="lg:w-1/2 text-gray-700">
                        <h2 className="text-3xl font-bold text-purple-700 sm:text-4xl mb-4">Mastering Grammar Essentials.</h2>
                        <p className="mb-6">
                            Strengthen your communication skills with essential grammar rules, clear examples, and interactive exercises for confident, accurate language use.
                        </p>
                        <a href="#" className="inline-block px-5 py-2 text-sm font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-500 transition-colors duration-300">
                            Learn More
                        </a>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <img src={Grammer} alt="Tourism Image" className="rounded-lg shadow-lg object-cover w-full h-72" />
                    </div>
                </div>



            </section>

            {/* Portofolio */}
            <section className="bg-gray-50">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 sm:text-4xl  drop-shadow-lg capitalize lg:text-5xl ">Relevant Topic For Learning</h1>
                    <p className='text-slate-400 text-center my-3 mb-16'>Relevant topics for learning empower students with practical skills and knowledge directly applicable to their future careers.</p>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                        <div className="relative flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-fitur1">
                            <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Basic English Skill</h2>
                                <p className="mt-2 text-lg tracking-wider text-purple-400 uppercase font-bold">Topic</p>
                            </div>
                        </div>
                        <div className="relative flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-fitur2">
                            <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Self Introduction</h2>
                                <p className="mt-2 text-lg tracking-wider text-purple-400 uppercase font-bold">Topic</p>
                            </div>
                        </div>
                        <div className="relative flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-fitur3">
                            <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Kitchen Area</h2>
                                <p className="mt-2 text-lg tracking-wider text-purple-400 uppercase font-bold">Topic</p>
                            </div>
                        </div>
                        <div className="relative flex items-end overflow-hidden bg-cover rounded-lg h-96 bg-fitur4">
                            <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Understanding Customer Service</h2>
                                <p className="mt-2 text-lg tracking-wider text-purple-400 uppercase font-bold">Topic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="relative py-16 bg-pink-50" id="contact">
                <form className="flex w-full max-w-sm space-x-3 mx-auto">
                    <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow ">
                        <div className="mb-6 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 ">
                            Contact us !
                        </div>
                        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                            <div className="col-span-2 lg:col-span-1">
                                <div className=" relative ">
                                    <input type="text" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name" />
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <div className=" relative ">
                                    <input type="text" id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email" />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <label className="text-gray-700" htmlFor="name">
                                    <textarea className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                                    </textarea>
                                </label>
                            </div>
                            <div className="col-span-2 text-right">
                                <button type="submit" className="py-2 px-4  bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

            </section>


            {/* Footer */}
            <footer className="px-4 divide-y bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full ">
                                <img className="w-auto h-6 sm:h-7" src={Logo} alt="Logo" />
                            </div>
                            <span className="self-center text-2xl font-semibold">EFORISM</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase">About</h3>

                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase ">Feature</h3>
                            <ul className="space-y-1">
                                <li>
                                    <p className="text-white">Pronunciation</p>
                                </li>
                                <li>
                                    <p className="text-white">Vocabulary</p>
                                </li>
                                <li>
                                    <p className="text-white">Grammer</p>
                                </li>
                                <li>
                                    <p className="text-white">Talk with Friends</p>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="uppercase ">Contact</h3>

                        </div>
                        <div className="space-y-3">
                            <div className="uppercase ">Social media</div>
                            <div className="flex justify-start space-x-3">
                                <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                        <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                                        <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
                                        <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-sm text-center text-white">© 2024 EFORISM</div>
            </footer>

        </div>
    )
}

export default Home
