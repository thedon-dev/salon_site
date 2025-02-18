import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Book Online",
      link: "/bookonline",
    },
    {
      name: "Service Menu",
      link: "servicemenu",
    },
    {
      name: "Our Story",
      link: "ourstory",
    },
  ];
  return (
    <nav className="px-[5%] lg:px-[10%] absolute text-white w-full left-0 text-sm">
      <div className="2xl:container mx-auto flex justify-between items-center border-b-4 border-white py-5">
        <div className="">
          <Link className="p-2 font-sans text-xl">Salon</Link>
        </div>
        <div className="flex items-center gap-5">
          {links.map((lnk, index) => (
            <Link to={lnk.link} className="px-2 py-1">
              {lnk.name}
            </Link>
          ))}
        </div>
        <div>
          <Link className="bg-[#fccab8] p-3 rounded text-black font-semibold">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
