import React, { useEffect, useRef, useState } from "react";
import s1 from '../assets/services-1.jpg'
import s2 from '../assets/services-2.jpg'
import s3 from '../assets/services-3.jpg'
import s4 from '../assets/services-4.jpg'
import s5 from '../assets/services-5.jpg'
import s6 from '../assets/services-6.jpg'

const serv = [
  {
    id: "service-1",
    content: "Web development involves creating and maintaining websites. This can include front-end development, back-end development, and full-stack development. It also often involves using various programming languages and frameworks.",
    name: "Web Development",
    img: s1,
  },
  {
    id: "service-2",
    content: "Data entry services involve inputting data from various sources into digital formats. This can include tasks like transcribing handwritten documents, entering data from spreadsheets into databases, or populating e-commerce product catalogs.",
    name: "Data Entry",
    img: s2,
  },
  {
    id: "service-3",
    content:
      "Data analytics is the process of examining, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making. It often involves tools like Excel, SQL, Python, and specialized data analytics software.",
    name: "Data Analytics",
    img: s3,
  },
  {
    id: "service-4",
    content:
      "Creative design services encompass graphic design, UI/UX design, and branding. This includes creating visual elements for websites, apps, marketing materials, logos, and other design assets to enhance the overall look and feel of a brand.",
    name: "Creative Designs",
    img:s4,
  },
  {
    id: "service-5",
    content:
      "Content writing services involve creating written content for websites, blogs, marketing materials, and other digital platforms. Content writers produce articles, blog posts, product descriptions, and other forms of written content to inform and engage the target audience.",
    name: "Content Writing",
    img: s5,
  },
  {
    id: "service-6",
    content:
      "Event management services cover the planning, organization, and execution of events, such as conferences, exhibitions, trade shows, weddings, and corporate events. This includes logistics, budgeting, marketing, and ensuring that the event runs smoothly.",
    name: "Event Management",
    img: s6,
  }
];

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll);
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  const classes = `transition-opacity duration-1000
		${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

const Servicecard = () => {
  return (
   
      <div>
        <RevealOnScroll className="w-full flex justify-center max-sm:float-none ">
          {serv.map((card) => (
       
              <div key={card.id} class="p-10 float-left text-amber-600">
                <div  class="max-w-sm rounded overflow-hidden shadow-lg ">
                  <img class="w-full" src={card.img} alt={card.name}></img>
                  <div class="px-6 py-4 text-amber-700">
                    <p class="font-bold text-xl mb-2">{card.name}</p>
                    <p class=" text-base pb-8">{card.content}</p>
                  </div>
                </div>
              </div>
        
          ))}
        </RevealOnScroll>
      </div>
 
  );
};

export default Servicecard;
