
import React from 'react';
import { BsLinkedin, BsInstagram, } from 'react-icons/bs';
import { SiGmail, SiYoutube } from 'react-icons/si';
import { CgScrollV } from 'react-icons/cg';
import Navabar from '@/Components/Section1/Navabar';
import Animation from '@/Components/Section1/Animation';
import Link from 'next/link';
// const variant1 = {
//     initial: {
//         opacity: 0
//     },
//     visible: {
//         opacity: 1,
//         transition: {
//             delay: 7,
//             duration: 0.5,
//         },
//     },
// };
function Section1() {
    return (
        <React.Fragment>          
            <div className="hidden lg:grid  px-20 min-h-screen w-auto bg-transparent relative z-10">
                <img className="hidden md:hidden lg:block absolute -z-10 h-screen w-screen" src="./Website.png" alt="" />
                 <Navabar/>
                 <div className="flex flex-col justify-end h-full items-end relative left-[6.2rem] mt-25 w-11/12">
                            <div className="flex justify-start items-start w-4/12">
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
                                            <div className="text-5xl flex ">
                                                <Animation n={40} /><span>+</span>
                                            </div>
                                            <h1 className="text-sm text-center tracking-wide uppercase">
                                                Events
                                            </h1>
                                        </div>
                                        <div className="w-1/3 flex flex-col items-center justify-between space-y-2">
                                            <div className="text-5xl flex">
                                                <Animation n={10} /><span>+</span>
                                            </div>
                                            <h1 className="text-sm text-center tracking-wide uppercase">
                                                Workshops
                                            </h1>
                                        </div>
                                        <div className="w-1/3 flex flex-col items-center justify-between space-y-5">
                                            <div className="text-5xl flex">
                                                <Animation n={4} /> <span>+</span>
                                            </div>
                                            <h1 className="text-xs text-center tracking-wide uppercase">
                                                Paper Presentations
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                 </div>
                <div className="flex row-span-2 bg-transparent max-w-full items-center justify-between">
                    <div className="flex flex-row space-x-8 justify-start mt-32">
                        {/* Social Media Buttons */}
                        <a href="https://www.linkedin.com/company/studentsunion-psgtech/" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin size={24} className="text-blue-500 shadow-lg hover:border-blue-700 hover:-translate-y-2 transition-all duration-500 ease-in-out" />
                        </a>
                        <a href="https://www.instagram.com/kriya_psgtech/" target="_blank" rel="noopener noreferrer">
                            <BsInstagram size={24} className="text-[#E4405F] hover:text-black hover:-translate-y-2 transition-all duration-500 ease-in-out" />
                        </a>
                        <a href="mailto:events@psgkriya.in" target="_blank" rel="noopener noreferrer">
                            <SiGmail size={25} className="text-gray-500 hover:text-black hover:-translate-y-2 transition-all duration-500 ease-in-out" />
                        </a>
                        <a href="https://youtube.com/c/StudentsUnionPSGTech" target="_blank" rel="noopener noreferrer">
                            <SiYoutube size={25} className="text-red-800 hover:text-black hover:-translate-y-2 transition-all duration-500 ease-in-out" />
                        </a>
                        <a href="https://linktr.ee/su.psgtech" target="_blank" rel="noopener noreferrer">
                            <div
                                className="w-6 h-6 invert opacity-60 hover:opacity-100 hover:-translate-y-2 transition-all duration-500 ease-in-out"
                                style={{
                                    background: `url(https://d1fdloi71mui9q.cloudfront.net/sdQF8AHkQY6RCSGRVJY5_HjZ8Yx97jSnr03x4)`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain",
                                }}
                            />
                        </a>
                    </div>

                    {/* Scroll Button */}
                    <div className="mt-32 ml-10">
                        <a href="#section2" className="text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black">
                            <CgScrollV size={30} />
                        </a>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex flex-col justify-evenly">
                        <div className="flex flex-row space-x-5 mr-2 mb-5">
                            <div className="flex flex-row space-x-6 lg:items-center justify-center w-full z-10">
                                <Link href="/auth?type=signup">
                                    <button className="lg:text-lg font-semibold text-white bg-[#3b82f6] shadow-lg hover:scale-110 px-6 py-2 rounded-lg transition-all">
                                        Register
                                    </button>
                                </Link>
                                <Link href="/auth?type=login">
                                    <button className="lg:text-lg font-semibold text-[#3b82f6] border-2 border-[#3b82f6] shadow-lg hover:scale-110 px-8 py-2 rounded-lg transition-all">
                                        Login
                                    </button>
                                </Link>
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
// const [consolee, setConsolee] = useState(0);

//     useEffect(() => {
//         window.addEventListener(
//             "scroll",
//             (event) => {
//                 setConsolee((window.pageYOffset / window.innerHeight).toFixed(2));
//             },
//             { passive: true }
//         );
//     }, [consolee]);