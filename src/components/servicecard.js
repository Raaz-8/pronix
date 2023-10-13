import React, { useEffect, useRef, useState } from "react";

const serv = [
  {
    id: "service-1",
    content: "Money is only a tool. It will take you wherever you wish.",
    name: "Herman Jensen",
    img: "https://i.pinimg.com/originals/83/ec/da/83ecdad9125ee4569cebe1fe85aa6e31.jpg",
  },
  {
    id: "service-2",
    content: "Money makes your life easier. ",
    name: "Steve Mark",
    img: "https://i.pinimg.com/originals/83/ec/da/83ecdad9125ee4569cebe1fe85aa6e31.jpg",
  },
  {
    id: "service-3",
    content:
      "It is usually people in the money business, finance, and international trade",
    name: "Kenn Gallagher",
    img: "https://i.pinimg.com/originals/83/ec/da/83ecdad9125ee4569cebe1fe85aa6e31.jpg",
  },
  {
    id: "service-3",
    content:
      "It is usually people in the money business, finance, and international trade",
    name: "Kenn Gallagher",
    img: "https://i.pinimg.com/originals/83/ec/da/83ecdad9125ee4569cebe1fe85aa6e31.jpg",
  },
  {
    id: "service-3",
    content:
      "It is usually people in the money business, finance, and international trade",
    name: "Kenn Gallagher",
    img: "https://i.pinimg.com/originals/83/ec/da/83ecdad9125ee4569cebe1fe85aa6e31.jpg",
  },
  {
    id: "service-3",
    content:
      "It is usually people in the money business, finance, and international trade",
    name: "Kenn Gallagher",
    img: "https://i.pinimg.com/originals/83/ec/da/83ecdad9125ee4569cebe1fe85aa6e31.jpg",
  },
  {
    id: "service-3",
    content:
      "It is usually people in the money business, finance, and international trade",
    name: "Kenn Gallagher",
    img: "https://i.pinimg.com/originals/83/ec/da/83ecdad9125ee4569cebe1fe85aa6e31.jpg",
  },
  {
    id: "service-3",
    content:
      "It is usually people in the money business, finance, and international trade",
    name: "Kenn Gallagher",
    img: "https://i.pinimg.com/originals/83/ec/da/83ecdad9125ee4569cebe1fe85aa6e31.jpg",
  },
  {
    id: "service-3",
    content:
      "It is usually people in the money business, finance, and international trade",
    name: "Kenn Gallagher",
    img: "https://i.pinimg.com/originals/83/ec/da/83ecdad9125ee4569cebe1fe85aa6e31.jpg",
  },
  {
    id: "service-3",
    content:
      "It is usually people in the money business, finance, and international trade",
    name: "Kenn Gallagher",
    img: "https://i.pinimg.com/originals/83/ec/da/83ecdad9125ee4569cebe1fe85aa6e31.jpg",
  },
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
      <div className="container flex w-full justify-between mt-8 mx-auto text-center items-center">
        <RevealOnScroll className="w-full flex justify-between">
          {serv.map((card) => (
            <div className="max-sm:w-5/12 p-2 outline outline-2 outline-amber-600 float-left flex flex-col justify-center m-4">
              <img
                className="h-48 max-sm:h-32"
                alt="ServiceCard"
                src={card.img}
              />
              <p className="m-2 text-amber-600 font-semibold">{card.name}</p>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Servicecard;
