import * as React from "react";
import { Link } from "gatsby";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Github from "../images/icons/github.png";
const Footer = () => {
  const socialMedia = () => {
    const createIcon = (input, link) => {
      return (
        <div className="flex justify-center items-center">
          <a href={link} rel="noreferrer" target="_blank">
            {input}
          </a>
        </div>
      );
    };
    return (
      <div className="w-max flex flex-col justify-center md:flex-row lg:flex-row z-10 md:left-5 lg:left-5 md:space-x-2 lg:space-x-2">
        {createIcon(
          <FaTwitter className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8" />,
          "https://twitter.com/BudsUltimate"
        )}
        {createIcon(
          <FaInstagramSquare className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8" />,
          "https://www.instagram.com/budsultimate/"
        )}
        {createIcon(
          <FaYoutube className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8" />,
          "https://www.youtube.com/@budsultimate278"
        )}
        {createIcon(
          <FaFacebook className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8" />,
          "https://www.facebook.com/CornellBudsUltimate/"
        )}
      </div>
    );
  };

  return (
    <div className="px-[5%] w-screen bg-red-400 md:px-[15%] lg:px-[15%] text-black pb-4 h-[30vh] content-center flex justify-center items-center">
      <div className="grid grid-cols-12 pt-6 flex flex-row ">
        <div className="col-start-1 col-end-4 md:col-end-6 lg:col-end-6">
          <p className="hidden md:block lg:block xl:block text-3xl">
            Buds Ultimate
          </p>

          <div className="pt-3">{socialMedia()}</div>
          <div className="text-xs pt-5 hidden md:block lg:block xl:block">
            <a
              href="https://github.com/ili23"
              className="flex flex-row"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <div>Site by Iram L.</div>
              <img className="h-4" src={Github} alt="Github"></img>{" "}
            </a>
          </div>
        </div>
        <div className="col-start-4 col-end-13 md:col-start-8 md:col-end-12 lg:col-start-8 lg:col-end-12 text-xl">
          <p className="text-3xl hidden md:block lg:block xl:block">Explore</p>
          <div className="flex">
            <ul className="flex text-xs flex-row pt-3 divide-x divide-black md:text-lg lg:text-lg">
              <li className="pr-2 md:pr-4 lg:pr-4">
                <Link activeClassName="underline" to="/">
                  Home
                </Link>
              </li>
              <li className="px-2 md:px-4 lg:px-4">
                <Link activeClassName="underline" to="/about">
                  About
                </Link>
              </li>
              <li className="px-2 md:px-4 lg:px-4">
                <Link activeClassName="underline" to="/roster">
                  Roster
                </Link>
              </li>
              <li className="px-2 md:px-4 lg:px-4">
                <Link activeClassName="underline" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="px-2 md:px-4 lg:px-4">
                <Link activeClassName="underline" to="/donate">
                  Donate
                </Link>
              </li>
              <li className="px-2 md:px-4 lg:px-4">
                <Link activeClassName="underline" to="/archive">
                  Archive
                </Link>
              </li>
            </ul>
          </div>
          <p className="bold text-xs pt-5">
            This organization is a registered student organization of Cornell
            University.
          </p>
          <div className="text-xs pt-5 md:hidden lg:hidden xl:hidden text-black">
            <a
              href="https://github.com/ili23"
              className="flex flex-row"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <div>Site by Iram L.</div>
              <img className="h-4" src={Github} alt="Github"></img>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
