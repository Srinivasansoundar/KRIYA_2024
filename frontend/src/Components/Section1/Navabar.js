"use client"
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link"
function Navabar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSection = () => {
        setIsOpen(!isOpen);  // Toggle the menu state
    };
    return (
        <React.Fragment>
            {isOpen && (
                <div className="hidden lg:flex absolute top-0 left-0 transition-all w-1/2  max-h-max bg-white z-20 items-center">
                    <div className="lg:flex flex-col w-[25vw] h-full pl-[calc(100vw/24)] py-[calc(100vw/24)] justify-between">
                        <div className="lg:space-y-4 flex flex-col m-20 w-[80%]">

                            <button
                                onClick={() => {
                                    const element = document.getElementById("section3");
                                    console.log(element);
                                    element.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
                            >
                                Events
                            </button>
                            <button
                                onClick={() => {
                                    const element = document.getElementById("section4");
                                    console.log(element);
                                    element.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
                            >
                                Paper Presentations
                            </button>
                            <button
                                onClick={() => {
                                    const element = document.getElementById("section5");
                                    console.log(element);
                                    element.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
                            >
                                Workshops
                            </button>
                            <button
                                onClick={() => {
                                    const element = document.getElementById("section6");
                                    console.log(element);
                                    element.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
                            >
                                Sponsors
                            </button>
                            <button
                                onClick={() => {
                                    const element = document.getElementById("section7");
                                    console.log(element);
                                    element.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
                            >
                                Our Team
                            </button>
                            <button
                                onClick={() => {
                                    const element = document.getElementById("section8");
                                    console.log(element);
                                    element.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
                            >
                                FAQ
                            </button>
                            <button
                                onClick={() => {
                                    const element = document.getElementById("section9");
                                    console.log(element);
                                    element.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex row-span-3 bg-transparent flex-row justify-between">
                <div className=" sm:hidden lg:flex flex-col w-auto">
                </div>
                <div className="flex flex-col mt-10 items-start justify-start">
                    {/* Navigation Links */}
                    <ul className="flex flex-row justify-end text-sm ml-28">
                        <li
                            className="mt-5 text-sm text-gray-600 font-poppins uppercase hover:cursor-pointer tracking-wide hover:text-black mx-4"
                        >
                            <a href="https://campustour.psgtech.ac.in/" target="_blank" rel="noopener noreferrer">
                                Campus Tour
                            </a>
                        </li>

                        {/* Internal Link (Accommodation) */}
                        <li
                            className="mt-5 text-sm text-gray-600 font-poppins uppercase hover:cursor-pointer tracking-wide hover:text-black mx-4"
                        >
                            <Link href="/portal/accommodation">
                                Accommodation
                            </Link>
                        </li>

                        {/* Menu Toggle Button */}
                        <div className="flex ml-10 items-end justify-start h-full">
                            <button
                                className="h-16 w-16 bg-black rounded-full flex justify-center items-center"
                                onClick={toggleSection}
                            >
                                {!isOpen ? (
                                    <AiOutlineMenu className="text-white" size={20} />
                                ) : (
                                    <AiOutlineClose className="text-white" size={20} />
                                )}
                            </button>
                        </div>
                    </ul>

                    {/* Event Details Section */}

                </div>
            </div>
        </React.Fragment>
    )
}

export default Navabar