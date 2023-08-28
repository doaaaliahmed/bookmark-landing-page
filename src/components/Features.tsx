"use client"
import Link from "next/link";
import { useState } from "react";
import img1 from '../../public/images/illustration-features-tab-1.svg';
import img2 from '../../public/images/illustration-features-tab-2.svg';
import img3 from '../../public/images/illustration-features-tab-3.svg';
import Feature from "./Feature";

const featuresList = [
    {title : 'Bookmark in one click' ,
     text:'Organize your bookmarks however you like. Our simple drag-and-drop interface  gives you complete control over how you manage your favourite sites.',
    img:img1},
    {title : 'Intelligent search' ,
     text:'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    img:img2},
    {title : ' Share your bookmarks' ,
     text:'Easily share your bookmarks and collections with others. Create a shareable  link that you can send at the click of a button.',
    img:img3},
]

const Features = () => {
    const tabItems = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];
    const [selectedItem, setSelectedItem] = useState<number>(0)

  return (
    <section className="xl:h-screen  mx-auto  pb-20  ">
      <div className="px-4 mx-auto max-w-2xl flex flex-col items-center jusify-center gap-6">
        <h2 className="text-gray-800 font-medium text-2xl sm:text-4xl ">
          Features
        </h2>
        <p className="text-gray-400 max-w-lg leading-relaxed text-center">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
     
      <div className="mt-20  max-w-xl mx-auto">
            <ul role="tablist" className="max-w-screen-xl mx-auto border-b flex flex-col sm:flex-row items-center justify-center gap-x-3 overflow-x-auto text-sm">
                {
                    tabItems.map((item, idx) => (
                        <li key={idx} className={` max-sm:w-10/12 text-center py-2 border-b-2 ${selectedItem == idx ? "border-red-400 text-gray-800" : "border-white text-gray-500"}`}>
                            <button
                                role="tab"
                                aria-selected={selectedItem == idx ? true : false}
                                aria-controls={`tabpanel-${idx + 1}`}
                                className="py-2.5 px-4 rounded-lg duration-150 lg:text-lg hover:text-gray-800 hover:bg-gray-50 active:bg-gray-100 font-medium"
                                onClick={() => setSelectedItem(idx)}
                            >
                                {item}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
       <Feature title={featuresList[selectedItem].title} text={featuresList[selectedItem].text} img={featuresList[selectedItem].img}/>
      
    </section>
  );
};

export default Features;
