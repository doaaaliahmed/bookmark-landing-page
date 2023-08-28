import chrome from "../../public/images/logo-chrome.svg";
import firefox from "../../public/images/logo-firefox.svg";
import opera from "../../public/images/logo-opera.svg";
import Image from "next/image";
import dotted from "../../public/images/bg-dots.svg";

const Extentions = () => {
  const extentions = [
    { img: chrome, title: "Add to Chrome", text: "Minimum version 62" },
    { img: firefox, title: "Add to Firefox", text: "Minimum version 55" },
    { img: opera, title: "Add to Opera", text: "Minimum version 46" },
  ];

  return (
    <section className="xl:h-screen px-4 mx-auto  md:mt-48  ">
      <div className="mx-auto max-w-2xl flex flex-col items-center jusify-center gap-6">
        <h2 className="text-gray-800 font-medium text-2xl sm:text-4xl ">
          Download the extension
        </h2>
        <p className="text-gray-400 max-w-xl leading-relaxed text-center">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <ul className="lg:w-3/4 mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {extentions.map((item, idx) => (
          <li key={item.title} className={`rounded-lg shadow-xl mt-${idx*10} h-fit`}>
            <div className=" py-10 flex flex-col items-center justify-center gap-4 ">
              <Image src={item.img} alt={item.title} width={100} height={100} />
              <h4 className="text-gray-800 font-semibold">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
            <div className="relative w-full h-1">
              <Image src={dotted} fill className="" alt="dotted" />
            </div>

            <div className="py-3 my-4 mx-8 px-4 hover:text-indigo-600  text-center bg-indigo-600 hover:bg-transparent border-2 border-transparent hover:border-indigo-600 text-white  shadow-xl rounded">
              <a
                href=""
                className="  text-sm font-medium"
              >
                Add & Install Extension
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Extentions;
