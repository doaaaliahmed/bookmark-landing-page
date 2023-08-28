import Link from "next/link";
import heroImage from "../../public/images/illustration-hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="xl:h-screen  mx-auto  pb-20  items-center flex flex-col-reverse gap-10 md:flex-row ">
      <div className="space-y-4 flex-1 text-center lg:text-left px-4 md:px-20">
        <h1 className="text-gray-800 font-medium text-2xl sm:text-4xl xl:text-5xl">
          A Simple Bookmark Manager
        </h1>
        <p className="text-gray-400 max-w-lg leading-relaxed sm:mx-auto lg:ml-0">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="pt-10  items-stretch lg:items-center justify-center gap-2 flex flex-col lg:flex-row lg:justify-start">
          <Link
            href=""
            className="px-7 py-3 w-full bg-blue-800 hover:bg-transparent hover:border-blue-800 text-white border-2 hover:text-blue-800 text-center rounded-md shadow-xl block sm:w-auto"
          >
            Get it on Chrome
          </Link>
          <Link
            href=""
            className="px-7 py-3 w-full bg-gray-100 hover:border-gray-700 border-2 shadow-xl text-gray-700 text-center rounded-md block sm:w-auto"
          >
            Try it on Firefox
          </Link>
        </div>
      </div>
      <div className="relative flex-1 text-center mt-7 lg:mt-0  ">
        <Image
          src={heroImage}
          width={3000}
          height={3000}
          alt="heroImage"
          className="relative z-20 w-full mx-auto sm:w-10/12  lg:w-full "
        />
        <div className="absolute z-10 bottom-0 lg:-bottom-10  right-0 rounded-bl-[150px] w-3/4 h-32 sm:h-48 md:h-72  xl:h-80 bg-indigo-500"></div>
      </div>
    </section>
  );
};
export default Hero;
