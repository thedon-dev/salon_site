import React from "react";
import mainbg from "../assets/salon_background.png";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import scissors from "../assets/scissors.png";
import makeup from "../assets/makeup.png";
import manicure from "../assets/manicure.png";
import skincare from "../assets/skincare.png";
import facial from "../assets/facial.png";

const HomePage = () => {
  const serviceMenu = [
    { name: "Hair", image: scissors },
    { name: "Makeup", image: makeup },
    { name: "Manicure/Pedicure", image: manicure },
    { name: "Skincare", image: skincare },
    { name: "Facial", image: facial },
  ];
  return (
    <>
      <section
        className="py-32 px-[5%] lg:px-[10%]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
          url(${mainbg})
        `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="font-bold text-5xl text-white text-center mt-20">
            Always Make Room For A{" "}
            <span className="text-[#fccab8]">
              Little <br /> Beauty
            </span>{" "}
            In Your Life.
          </h1>
          <div className="mt-20 flex gap-5 justify-center">
            <Button destination={"/bookappointment"} text="Book Appointment" />
            <Link
              to="servicemenu"
              className="px-5 py-3 border font-semibold border-[#fccab8] hover:bg-[#fccab8] hover:text-black rounded text-lg text-[#fccab8] transition-all duration-300"
            >
              Service Menu
            </Link>
          </div>
        </div>

        <div className="2xl:container mx-auto flex justify-between text-xs font-semibold text-center text-white mt-28">
          <div className="flex flex-col justify-center items-center p-3">
            <h3 className="mb-2">CONTACT</h3>
            <p>T: 09057696490</p>
            <p>viktoh7351@gmail.com</p>
          </div>
          <div className="flex flex-col justify-center items-center p-3">
            <h3 className="mb-2">HOURS</h3>
            <p>Mon to Fri: 7:30am - 6:00pm</p>
            <p>Sat: 9:00am - 5:00pm</p>
            <p>Sun: 9:00am - 4:00pm</p>
          </div>
          <div className="flex flex-col justify-center items-center p-3">
            <h3 className="mb-2">lOCATION</h3>
            <p className="">
              85 Royal Mint Street, London, <br />
              E1 8LG United Kingdom
            </p>
          </div>
        </div>
      </section>

      <section className="px-[5%] lg:px-[10%] py-32 bg-white">
        <div className="2xl:container mx-auto">
          <h1 className="text-5xl text-center font-bold">Service Menu</h1>
          <div className="mt-14 flex justify-around">
            {serviceMenu.map((service, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 justify-center items-center"
              >
                <img
                  src={service.image}
                  alt=""
                  className="object-fit w-12 h-12"
                />
                <p className="text-sm font-semibold mt-4">{service.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-24 text-center">
            <p className="text-lg w-1/2 mx-auto">
              Get your nails done for great mood. Simple pleasures can make your
              week, not just day.
            </p>
            <div className="mt-10">
              <Button destination={"/servicemenu"} text="View Service Menu" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
