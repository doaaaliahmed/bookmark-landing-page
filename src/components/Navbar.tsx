"use client";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/logo-bookmark.svg';
import facebook from '../../public/images/icon-facebook.svg';
import twitter from '../../public/images/icon-twitter.svg';
import { useState } from "react";



const Navbar = ()=>{
    const [state, setState] = useState(false);
    const navigation = [
        { title: "Features", path: "/" },
        { title: "Pricing", path: "/" },
        { title: "Contact", path: "/" },
       
    ]

    return (
        <nav className=" md:bg-white w-full  md:static md:text-sm ">
        <div className={`${state ? 'h-screen bg-[#0e1d4be0] fixed ':''} z-40  w-full uppercase items-center  px-4 md:px-20 md:py-6 max-w-screen-xl mx-auto md:flex`}>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link href="/">
                    <Image
                        src={logo}
                        width={120}
                        height={50}
                        alt="Float UI logo"
                    />
                </Link>
                <div className="md:hidden">
                    <button className="text-gray-500 hover:text-gray-800"
                        onClick={() => setState(!state)}
                    >
                        {
                            state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )
                        }
                    </button>
                </div>
            </div>
            <div className={` flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                <ul className=" justify-end items-center space-y-6 md:flex  md:space-x-10 md:space-y-0">
                    {
                        navigation.map((item, idx) => {
                            return (
                                <li key={idx} className="max-md:border-b-[1px] border-gray-400 max-md:pb-4 max-md:text-center text-white md:text-gray-700 hover:text-[hsl(0,94%,66%)]">
                                    <Link href={item.path} className="block">
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                   
                    <div className=' space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                       
                            <Link href="/" className="block py-2 px-6 font-medium text-center text-white md:bg-[hsl(0,94%,66%)] hover:bg-transparent border-2 border-white md:border-transparent hover:border-[hsl(0,94%,66%)] hover:text-[hsl(0,94%,66%)] rounded shadow md:inline">
                                Login
                            </Link>
                       
                    </div>
                </ul>
            </div>
            {state && <div className='mt-48 block md:hidden flex items-center justify-center gap-6'>
                       
                       <Link href="/" className="">
                          <Image src={facebook} width={25} height={25} alt='facebook'/>
                       </Link>
                       <Link href="/" className="">
                       <Image src={twitter} width={30} height={30} alt='twitter'/>
                       </Link>
                  
            </div>}
        </div>
    </nav>
    )
}

export default Navbar;