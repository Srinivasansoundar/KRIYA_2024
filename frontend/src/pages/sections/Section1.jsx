"use client"
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";  // Importing icons
import { useRouter } from 'next/navigation';  // Next.js router for navigation
import { BsLinkedin, BsInstagram, } from 'react-icons/bs';
import { SiGmail, SiYoutube } from 'react-icons/si';
import { CgScrollV } from 'react-icons/cg';
import { useSpring, animated } from "react-spring";
import { motion } from 'framer-motion';
const variant1 = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 7,
            duration: 0.5,
        },
    },
};
function Section1() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    function Number({ n }) {
        const [animate, setAnimate] = useState(true);
        const props = useSpring({
          from: { number: 0 },
          number: n,
          immediate: !animate,
          onRest: () => setAnimate(false), // Reset animation
          config: { mass: 1, tension: 20, friction: 10 },
        });
      
       
        useEffect(() => {
          const handleScroll = () => {
           
            setAnimate(true);  
          };
      
          window.addEventListener("scroll", handleScroll, { passive: true });
      
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, []);
      
        return <animated.span>{props.number.to((val) => val.toFixed(0))}</animated.span>;
      }
    const toggleSection = () => {
        setIsOpen(!isOpen);  // Toggle the menu state
    };
    const [consolee, setConsolee] = useState(0);

        useEffect(() => {
            window.addEventListener(
                "scroll",
                (event) => {
                    setConsolee((window.pageYOffset / window.innerHeight).toFixed(2));
                },
                { passive: true }
            );
        }, [consolee]);

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
            <div className="hidden lg:grid grid-rows-5 px-20 min-h-screen w-auto bg-transparent relative z-10">
                <img className="hidden md:hidden lg:block absolute -z-10 h-full w-full" src="./Website.png" alt="" />
                <div className="flex row-span-3 bg-transparent flex-row justify-between">
                    <div className=" sm:hidden lg:flex flex-col w-auto">
                    </div>
                    <div className="flex flex-col mt-10 items-start justify-start">
                        {/* Navigation Links */}
                        <ul className="flex flex-row justify-end text-sm ml-28">
                            <li
                                onClick={() => window.open("https://campustour.psgtech.ac.in/", "_blank")}
                                className="mt-5 text-sm text-gray-600 font-poppins uppercase hover:cursor-pointer tracking-wide hover:text-black mx-4"
                            >
                                Campus Tour
                            </li>

                            <li
                                onClick={() => router.push("/portal/accommodation")}
                                className="mt-5 text-sm text-gray-600 font-poppins uppercase hover:cursor-pointer tracking-wide hover:text-black mx-4"
                            >
                                Accommodation
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
                        <div className="flex flex-col justify-end h-full items-start relative left-[6.2rem] mt-28">
                            <div className="flex justify-start items-start">
                                <div className="w-full font-poppins text-2xl font-semibold tracking-wider text-gray-600">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]">
                                        February <br />
                                    </span>
                                    23<sup>rd</sup>, 24<sup>th</sup> & 25<sup>th</sup> 2024
                                </div>
                            </div>

                            {/* Main Event Heading */}
                            <div className="flex flex-col items-start justify-between mt-5">
                                <div className="w-full text-start text-4xl font-bold text-red font-poppins">
                                    <h1 className="leading-10">
                                        THE{" "}
                                        <span className="decoration-slate-700">
                                            GLOBAL CLASH OF <br />
                                        </span>
                                    </h1>
                                    TECHNO TALENTS
                                    <div className="w-[60%] lg:w-[80%] ml-8 lg:ml-0 h-[4px] bg-gradient-to-r rounded-[2px] from-[#3b82f6] to-[#8b5cf6]"></div>
                                </div>

                                {/* Event Statistics */}
                                <div className="flex">
                                    <div className="hidden lg:flex flex-row w-full text-[#3c4043] font-poppins font-semibold justify-between mt-10 space-x-10">
                                        <div className="w-1/3 flex flex-col items-center justify-between space-y-2">
                                            <div className="text-5xl">
                                                <Number n={40} />+
                                            </div>
                                            <h1 className="text-sm text-center tracking-wide uppercase">
                                                Events
                                            </h1>
                                        </div>
                                        <div className="w-1/3 flex flex-col items-center justify-between space-y-2">
                                            <div className="text-5xl">
                                                <Number n={10} />+
                                            </div>
                                            <h1 className="text-sm text-center tracking-wide uppercase">
                                                Workshops
                                            </h1>
                                        </div>
                                        <div className="w-1/3 flex flex-col items-center justify-between space-y-5">
                                            <div className="text-5xl">
                                                <Number n={4} />
                                            </div>
                                            <h1 className="text-xs text-center tracking-wide uppercase">
                                                Paper Presentations
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex row-span-2 bg-transparent max-w-full items-center justify-between">
                    <div className="flex flex-row space-x-8 justify-start mt-32">
                        {/* Social Media Buttons */}
                        <button
                            className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
                            onClick={() => window.open("https://www.linkedin.com/company/studentsunion-psgtech/", "_blank")}
                        >
                            <BsLinkedin size={24} className="text-blue-500 shadow-lg hover:border-blue-700" />
                        </button>
                        <button
                            className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
                            onClick={() => window.open("https://www.instagram.com/kriya_psgtech/", "_blank")}
                        >
                            <BsInstagram size={24} className="text-[#E4405F] hover:text-black" />
                        </button>
                        <button
                            className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
                            onClick={() => window.open("mailto:events@psgkriya.in", "_blank")}
                        >
                            <SiGmail size={25} className="text-gray-500 hover:text-black" />
                        </button>
                        <button
                            className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
                            onClick={() => window.open("https://youtube.com/c/StudentsUnionPSGTech", "_blank")}
                        >
                            <SiYoutube size={25} className="text-red-800 hover:text-black" />
                        </button>
                        <button
                            style={{
                                background: `url(https://d1fdloi71mui9q.cloudfront.net/sdQF8AHkQY6RCSGRVJY5_HjZ8Yx97jSnr03x4)`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                            }}
                            className="w-6 h-6 invert hover:-translate-y-2 opacity-60 hover:opacity-100 transition-all duration-500 ease-in-out"
                            onClick={() => window.open("https://linktr.ee/su.psgtech", "_blank")}
                        />
                    </div>

                    {/* Scroll Button */}
                    <div className="mt-32 ml-10">
                        <button
                            onClick={() => {
                                const element = document.querySelector("#section2");
                                if (element) element.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
                        >
                            <CgScrollV size={30} />
                        </button>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex flex-col justify-evenly">
                        <div className="flex flex-row space-x-5 mr-2 mb-5">
                            <div className="flex flex-row space-x-6 lg:items-center justify-center w-full z-10">
                                <button
                                    className="lg:text-lg font-semibold text-white bg-[#3b82f6] shadow-lg hover:scale-110 px-6 py-2 rounded-lg transition-all"
                                    onClick={() => router.push("/auth?type=signup")}
                                >
                                    Register
                                </button>
                                <button
                                    className="lg:text-lg font-semibold text-[#3b82f6] border-2 border-[#3b82f6] shadow-lg hover:scale-110 px-8 py-2 rounded-lg transition-all"
                                    onClick={() => router.push("/auth?type=login")}
                                >
                                    Login
                                </button>
                            </div>
                        </div>

                        {/* Footer Logo Section */}
                        <div className="flex flex-row mb-16 ml-10">
                            <div className="w-16 h-16 bg-contain bg-no-repeat"
                                style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/en/e/eb/PSG_College_of_Technology_logo.png)` }}>
                            </div>
                            <div className="flex flex-col ml-3">
                                <p className="font-semibold">Presented By Student Union</p>
                                <p className="text-sm">PSG College of Technology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>


    )
}

export default Section1