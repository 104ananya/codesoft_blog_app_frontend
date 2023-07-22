import React from "react";
import { images } from "../constants";

const navItemsInfo = [
  { name: "Home" },
  { name: "Articles" },
  { name: "Pages" },
  { name: "Pricing" },
  { name: "FAQs" },
];

const NavItem = ({name}) => {
  return (
    <li>
      <a href="/">{name}</a>
    </li>
  );
};

const Header = () => {
  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-10 py-5 flex justify-between items-center">
        <div>
          <img src={images.Logo} alt="logo" />
        </div>
        <div className="flex gap-x-9 items-center">
          
          <ul className="flex gap-x-9 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} name={item.name} />
            ))}
          </ul>

          <button className="border-2 border-fourth px-6 py-2 rounded-full text-fourth font-semibold hover:bg-fourth hover:text-first ">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
