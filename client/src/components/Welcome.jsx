import React from "react";
import heroImage from "../assets/meditation.png";

const Welcome = (props) => {
  return (
    <div
      id="welcome"
      className="flex flex-col md:flex-row items-center justify-between w-3/4 h-screen mx-auto"
    >
      <div className="flex flex-col items-center justify-center  md:h-1/3 md:w-1/2 text-center md:pt-16 pt-32">
        <h1 className="text-3xl font-bold text-primary drop-shadow-custom py-8">
          Objav silu meditácie
        </h1>
        <h3 className="text-secondary text-lg drop-shadow-custom pb-8">
          Odomkni svoju myseľ a nájdi vnútorný pokoj
        </h3>
        <div className="flex items-center justify-between h-16">
          <button
            className="relative  w-32 my-2 bg-primary p-2 rounded-full cursor-pointer hover:bg-danger text-danger font-normal hover:text-primary hover:border border-primary border-solid drop-shadow-custom1"
            onClick={props.meditate}
          >
            Medituj
          </button>
        </div>
      </div>
      <div className=" md:w-1/2 w-3/4">
        <img
          src={heroImage}
          alt="hero-image"
          className="rounded-full drop-shadow-custom  md:w-3/4  h-3/4 max-h-128  mt-16 mx-auto"
        />
      </div>
    </div>
  );
};

export default Welcome;
