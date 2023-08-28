import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";


type IProps = {
    img:  StaticImageData;
    title : string;
    text:string;
}

const Feature:FC<IProps> = ({img , title , text})=>{
    return (
        <section className="pt-14 mx-auto  pb-20  items-center flex flex-col-reverse gap-10 md:flex-row-reverse ">
        <div className="space-y-4 flex-1 text-center lg:text-left px-4 md:px-20">
          <h1 className="text-gray-800 font-medium text-2xl sm:text-4xl ">
            {title}
          </h1>
          <p className="text-gray-400 max-w-md leading-relaxed sm:mx-auto lg:ml-0">
           {text}
          </p>
            <Link
              href=""
              className="mx-auto sm:mx-0 px-7 py-3 w-fit bg-blue-800 hover:bg-transparent hover:border-blue-800 text-white border-2 hover:text-blue-800 text-center rounded-md shadow-xl block"
            >
              More Info
            </Link>
       
        </div>
        <div className="relative flex-1 text-center mt-7 lg:mt-0  ">
          <Image
            src={img}
            width={1000}
            height={1000}
            alt="image"
            className="relative z-20 w-full mx-auto sm:w-10/12 p-4 md:pl-10 "
          />
          <div className="absolute z-10 -bottom-6 lg:-bottom-24  left-0 rounded-br-[150px] w-3/4 h-32 sm:h-48 md:h-72  xl:h-80 bg-indigo-500"></div>
        </div>
      </section>
    )
}

export default Feature;