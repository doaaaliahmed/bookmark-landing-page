import Link from "next/link";
import Image from "next/image";
import Logo from '../../public/images/logo-bookmark.svg';
import facebook from '../../public/images/icon-facebook.svg';
import twitter from '../../public/images/icon-twitter.svg';

const Footer = ()=>{
    const navigation = [
        { title: "Features", path: "/" },
        { title: "Pricing", path: "/" },
        { title: "Contact", path: "/" },
       
    ]

    return (
        <footer className=" bg-blue-900 w-full   md:text-sm ">
        <div className={`  w-full uppercase items-center  px-4 md:px-20 py-6 gap-10 flex flex-col md:flex-row items-center justify-between`}>
            <div className=" py-3 md:py-5 block flex flex-col md:flex-row items-center justify-start gap-10 md:gap-20">
                <Link href="/">
                    <Image
                        src={Logo}
                        width={120}
                        height={50}
                        alt="Float UI logo"
                    />
                </Link>
             
                <ul className=" justify-end items-center space-y-6 md:flex  md:space-x-10 md:space-y-0">
                    {
                        navigation.map((item, idx) => {
                            return (
                                <li key={idx} className=" max-md:text-center text-white  hover:text-[hsl(0,94%,66%)]">
                                    <Link href={item.path} className="block">
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                   
                   
                </ul>
          
            </div>
          
            
             <div className='md:mt-0 flex items-center justify-center gap-10 block'>
                       
                       <Link href="/" className="">
                          <Image src={facebook} width={25} height={25} alt='facebook'/>
                       </Link>
                       <Link href="/" className="">
                       <Image src={twitter} width={30} height={30} alt='twitter'/>
                       </Link>
                  
            </div>
        </div>
    </footer>
    )
}

export default Footer;