import React from "react";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "About Us",
      link: "",
    },
    {
      name: "Service Menu",
      link: "",
    },
    {
      name: "Our Story",
      link: "",
    },
  ];
  return (
    <footer className="bg-[#fccab8] px-[5%] lg:px-[10%]">
      <div className="2xl:container mx-auto grid grid-cols-3">
        <div className=" flex justify-center py-10">
          <div className="grid place-content-center uppercase rounded-full border-[15px] border-[#fccab8] h-[200px] w-[200px] my-auto">
            <p className="text-4xl font-bold">salon</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          {links.map((lnk, index) => (
            <Link key={index} to={lnk.link} className="font-semibold">
              {lnk.name}
            </Link>
          ))}
        </div>
        <div className=" text-center py-10">
          <h3 className="text-4xl font-bold">Follow US</h3>
          <p className="text-lg w-2/3 text-center mx-auto mt-3">
            Don’t miss promotions, follow us for the latest news
          </p>
          <div className="flex gap-2 mt-5 justify-center">
            <Link to="/">
              <CgFacebook size={30} />
            </Link>
            <Link to="/">
              <FaInstagram size={30} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
