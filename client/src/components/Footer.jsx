import React from "react";

const Footer = (props) => {
  return (
    <footer className="bg-danger text-primary drop-shadow-custom1 text-white py-10">
      <div className="container mx-auto flex item-center  justify-between">
        <div className="w-full flex flex-col items-center">
          <div className=" sm:w-1/2 lg:w-1/4 mb-8">
            <h2 className="font-bold text-lg mb-4">Kontaktuj nás</h2>
            <p>1234 Hlavná ul.</p>
            <p>Dolný Lopašov, SK</p>
            <p>+421 123 456 789</p>
            <p>info@medituj.sk</p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <div className=" sm:w-1/2 lg:w-1/4 mb-8">
            <ul className="list-none">
              <li className="cursor-pointer" onClick={props.home}>
                Domov
              </li>
              <li className="cursor-pointer" onClick={props.howToMeditate}>
                Ako meditovať?
              </li>
              <li className="cursor-pointer" onClick={props.meditate}>
                Medituj
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-800 mt-8 pt-8 text-sm text-center">
        <p>&copy; 2023 Medituj. Všetky práva vyhradené.</p>
      </div>
    </footer>
  );
};

export default Footer;
