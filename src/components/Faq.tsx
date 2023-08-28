const faqsList = [
  {
    q: "What is Bookmark?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    q: " How can I request a new browser?",
    a: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    q: "Is there a mobile app?",
    a: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed  sollicitudin ex et ultricies bibendum.",
  },
  {
    q: "What about other Chromium browsers?",
    a: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam  vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const Faq = () => {
  return (
    <section className=" px-4 mx-auto my-20 ">
      <div className="mx-auto max-w-2xl flex flex-col items-center jusify-center gap-6">
        <h2 className="text-gray-800 font-medium text-2xl sm:text-4xl ">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 max-w-xl leading-relaxed text-center">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <details key={idx} className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5  border-b border-gray-300 py-6 text-gray-900 hover:text-red-600">
              <h2 className="font-medium">{item.q}</h2>

              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 font-bold text-indigo-600 hover:text-red-600 active:text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4  leading-relaxed text-gray-600">{item.a}</p>
          </details>
        ))}
    </div>
    <div className="text-center">
    <button
        className="mx-auto mt-10 text-center py-2.5 px-4 rounded-lg duration-150 lg:text-lg bg-indigo-600 text-gray-200 hover:text-indigo-600 border-2 border-transparent hover:border-indigo-600 mx-auto  hover:bg-transparent "
        
      >
        More Info
      </button>
    </div>
  
    
    </section>
  );
};

export default Faq;
