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
    <footer className="bg-[#fccab8] px-[5%] lg:px-[10%] py-20 ">
      <div className="2xl:container mx-auto grid lg:grid-cols-3">
        <div className=" flex justify-center lg:py-10">
          <div className="grid place-content-center uppercase rounded-full border-[15px] lg:border-[#fccab8] h-[200px] w-[200px] my-auto">
            <p className="text-4xl font-bold">salon</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5  lg:gap-2 mt-20">
          {links.map((lnk, index) => (
            <Link key={index} to={lnk.link} className="font-semibold">
              {lnk.name}
            </Link>
          ))}
        </div>
        <div className="mt-20 lg:mt-0 text-center flex flex-col justify-center">
          <h3 className="text-3xl font-bold">Follow US</h3>
          <p className="w-2/3 text-center mx-auto mt-3">
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

      <p className="font-bold"></p>
    </footer>
  );
};

export default Footer;
