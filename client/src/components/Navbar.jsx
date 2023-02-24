import React, { useState, useEffect } from "react";

const Navbar = (props) => {
  const [navHeight, setNavHeight] = useState(96);
  const [isHovered, setIsHovered] = useState(false);

  function handleScroll() {
    const scrollPosition = window.pageYOffset;
    console.log(scrollPosition);
    scrollPosition > 200 ? setNavHeight(64) : setNavHeight(96);
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollPosition = window.pageYOffset;
    !isHovered && scrollPosition > 200 ? setNavHeight(64) : setNavHeight(96);
  }, [isHovered]);
  return (
    <nav
      className="flex items-center justify-around bg-danger fixed z-50 w-screen drop-shadow-custom1 nav-transition"
      style={{ height: navHeight }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-3xl tracking-widest text-primary drop-shadow-custom">
        MEDITUJ
      </h1>
      <div className="flex items-center">
        <h1
          onClick={props.howToMeditate}
          className="cursor-pointer font-normal text-primary mx-4 drop-shadow-custom"
        >
          Ako meditovať?
        </h1>
        <button className="hidden md:block my-2 w-32 bg-primary p-2 rounded-full cursor-pointer hover:bg-danger text-danger font-normal hover:text-primary hover:border border-primary border-solid drop-shadow-custom1">
          Web 3.0
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
