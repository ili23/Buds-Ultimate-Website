import React, { useState } from "react";
import { Link } from "gatsby";
import BudsLogo from "../images/icons/red-buds-logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav class="bg-transparent">
      <div class="w-screen flex flex-wrap items-center justify-between mx-auto py-6 md:pt-6 lg:pt-6 px-4 md:px-12 lg:px-12">
        <Link to="/">
          <div class="inline-flex">
            <img
              src={BudsLogo}
              class="h-10 md:h-14 lg:h-14 mr-1"
              alt="Buds Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Buds Ultimate at Cornell
            </span>
          </div>
        </Link>

        <button
          onClick={toggleMobileMenu}
          type="button"
          className="absolute top-0 right-0 m-8 items-center text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-[#1E1E1E] z-50">
            <div className="w-full md:hidden" id="navbar-default">
              <button
                onClick={closeMobileMenu}
                className="absolute top-0 right-0 m-8 text-white hover:text-red-700"
              >
                {/* Close button */}
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.95 5.95a1 1 0 010 1.414L11.414 10l3.536 3.536a1 1 0 01-1.414 1.414L10 11.414l-3.536 3.536a1 1 0 01-1.414-1.414L8.586 10 5.05 6.464a1 1 0 111.414-1.414L10 8.586l3.536-3.536a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul className="text-xl font-semibold flex flex-col p-4 md:p-0 mt-10 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                <li>
                  <Link
                    activeClassName="bg-red-400"
                    to="/"
                    className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClassName="bg-red-400"
                    to="/about"
                    className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClassName="bg-red-400"
                    to="/roster"
                    className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    Roster
                  </Link>
                </li>
                <li>
                  <Link
                    activeClassName="bg-red-400"
                    to="/contact"
                    className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    activeClassName="bg-red-400"
                    to="/donate"
                    className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    Donate
                  </Link>
                </li>
                <li>
                  <Link
                    activeClassName="bg-red-400"
                    to="/archive"
                    className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    Archive
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="text-xl font-semibold flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <Link
                activeClassName="text-blue-700"
                to="/"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClassName="text-blue-700"
                to="/about"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClassName="text-blue-700"
                to="/roster"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Roster
              </Link>
            </li>
            <li>
              <Link
                activeClassName="text-blue-700"
                to="/contact"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                activeClassName="text-blue-700"
                to="/donate"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Donate
              </Link>
            </li>
            <li>
              <Link
                activeClassName="text-blue-700"
                to="/archive"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Archive
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
