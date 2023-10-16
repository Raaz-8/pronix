import FeedbackCard from "./feedback";
import Carousel from "nuka-carousel";
import user1 from "../assets/user-1.jpg"

const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: "https://i.imgur.com/Dn0qoCG.png",
  },
  {
    id: "feedback-2",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Mayur Thakur",
    title: "Founder & Leader",
    img: "https://i.imgur.com/fk8eEvW.png",
  },
  {
    id: "feedback-3",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: "https://i.imgur.com/dLxxRDy.png",
  },
];

const Testimonials = () => (
  <section
    id="clients"
    className={`sm:py-16 py-6 flex items-center flex-col h-auto`}
  >
    <div className="w-full flex items-center md:flex-row flex-col sm:mb-16 mb-6  z-[1] ">
      <h2 className="flex items-center w-full flex-col text-4xl text-amber-700 font-semibold max-sm:text-xl">
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
    </div>
    <Carousel
      renderCenterLeftControls={({ previousSlide }) => (
        <button onClick={previousSlide}>
          <i className="fa fa-arrow-left" />
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button onClick={nextSlide}>
          <i className="fa fa-arrow-right" />
        </button>
      )}
      autoplay
      autoplayInterval={6000}
      wrapAround={true}
    >
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </Carousel>
  </section>
);

export default Testimonials;
