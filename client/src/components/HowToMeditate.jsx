import React, { useState, useEffect } from "react";
import howToMeditateData from "../data/howToMeditate";

const liStyles =
  "text-xl font-bold text-primary drop-shadow-lg py-4 leading-12 ";

const pStyles =
  "flex items-center text-danger p-8 drop-shadow-custom1 bg-primary rounded-3xl mx-4";

const HowToMeditateElement = (props) => {
  return (
    <div className="md:hover:scale-125 hover:scale-110 transition-all m-4">
      <li className={liStyles}>{props.headline}</li>
      <p id={props.id} className={pStyles}>
        {props.description}
      </p>
    </div>
  );
};

const HowToMeditate = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.pageYOffset;
      const opacity = Math.min(scrollPosition / 700, 1);
      setOpacity(opacity);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const howToMeditateElements = howToMeditateData.map((data) => {
    return (
      <HowToMeditateElement
        id={data.id}
        headline={data.headline}
        description={data.description}
      />
    );
  });

  return (
    <div
      id="howTo"
      className="flex flex-col items-center min-h-screen  opacity-div "
      style={{ opacity }}
    >
      <h1 className="text-3xl font-bold text-primary text-center drop-shadow-lg md:pt-32 pt-48 pb-8 px-16">
        5 praktických krokov ako meditovať:
      </h1>
      <ul className="flex flex-col items-center md:w-1/2 text-center pb-24">
        {howToMeditateElements}
      </ul>
    </div>
  );
};

export default HowToMeditate;
