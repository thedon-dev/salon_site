import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "/",
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
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="px-[5%] lg:px-[10%] absolute text-white w-full left-0 text-sm">
      <div className="2xl:container mx-auto flex justify-between items-center border-b-4 border-white py-5">
        <div className="">
          <Link className="p-2 font-sans text-xl">Salon</Link>
        </div>
        <div
          className={`${
            navOpen ? "left-0" : "-left-[100%] lg:left-0"
          } h-screen fixed text-black w-2/3 lg:relative top-0 lg:h-fit flex flex-col justify-center lg:justify-start lg:flex-row items-center gap-10 lg:gap-5 bg-white lg:bg-transparent transition-all duration-300`}
        >
          {links.map((lnk, index) => (
            <NavLink
              key={index}
              to={lnk.link}
              className={({ isActive }) =>
                isActive
                  ? "text-[#fccab8] px-2 py-1"
                  : "text-black lg:text-white px-2 py-1"
              }
            >
              {lnk.name}
            </NavLink>
          ))}
          <div className="lg:ms-auto mt-10 lg:mt-0">
            <Link className="bg-[#fccab8] p-3 rounded text-black font-semibold">
              Contact Us
            </Link>
          </div>
        </div>

        <button
          onClick={() => setNavOpen(!navOpen)}
          className="block lg:hidden"
        >
          {navOpen ? <BiX size={45} /> : <FaBars size={30} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
