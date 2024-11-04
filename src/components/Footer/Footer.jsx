import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div
      data-aos="fade-up"
      className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl"
    >
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">
              Car Rental
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur, nam adipisci! Maiores.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow></FaLocationArrow>
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt></FaMobileAlt>
              <p>+880 123456789</p>
            </div>
            {/* social handles */}
            <div className="flex items-center gap-3">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300"></FaInstagram>
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300"></FaFacebook>
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300"></FaLinkedin>
              </a>
            </div>
          </div>
          {/* Navlinks */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* first col */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center">
                  important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => {
                    return (
                      <li
                        className="cursor-pointer hover:text-primary duration-300"
                        key={data.title}
                      >
                        <span className="mr-2">&#11162;</span>
                        <a href={data.link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* second col */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => {
                    return (
                      <li
                        className="cursor-pointer hover:text-primary duration-300"
                        key={data.title}
                      >
                        <span className="mr-2">&#11162;</span>
                        <a href={data.link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* third col */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => {
                    return (
                      <li
                        className="cursor-pointer hover:text-primary duration-300"
                        key={data.title}
                      >
                        <span className="mr-2">&#11162;</span>
                        <a href={data.link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
