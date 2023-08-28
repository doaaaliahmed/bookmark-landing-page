"use client"

import { useState } from "react";

const NewsLetter = () => {
    const [email , setEmail] = useState('');
    const [errorMessage , setErrorMessage] = useState(false);
    const emailHandler = (e : any)=>{
        setEmail(e.target.value);

    }

    const submitEmail=(e:any)=>{
        e.preventDefault();
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setErrorMessage(false);
            setEmail('')
        }else  setErrorMessage(true);

    }

  return (
    <section className="py-14 bg-blue-600 ">
      <div className=" mx-4 px-4 py-14  md:px-8 md:mx-8">
        <div className="relative z-10 max-w-lg mx-auto sm:text-center">
          <div className="space-y-6 flex flex-col items-center justify-center">
            <span className="text-xl text-white uppercase text-center ">
              35,000+ already joined
            </span>
            <p className="text-2xl sm:text-4xl text-white text-center font-medium">
              Stay up-to-date with what we’re doing
            </p>
          </div>
          <div className="mt-6">
            <form
              onSubmit={(e) => submitEmail(e)}
              className="flex flex-col sm:flex-row items-stretch  sm:items-start justify-center rounded-lg p-1 gap-2  sm:mx-auto"
            >
              <div className={`w-full ${errorMessage ? 'bg-red-500' : ''} rounded-lg p-1`}>
                <input
                  
                  placeholder="Enter your email"
                  className="text-gray-500 w-full p-2 outline-none rounded-lg"
                  value={email}
                  onChange={(e)=> emailHandler(e)}
                />
                {errorMessage && <div
                  className="text-left text-sm text-white pt-1 pl-2"
                  role="alert"
                >
                  Whoops! make sure it&apos;s an email
                </div>}
              </div>

              <button type='submit' className="sm:w-48 py-2 px-4 rounded-lg  text-white bg-red-500 hover:bg-white hover:text-red-500  border border-transparent hover:border-red-500  duration-150 outline-none shadow-md focus:shadow-none sm:px-4">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
