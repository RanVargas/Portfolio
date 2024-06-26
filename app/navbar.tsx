"use client";
import Link from "next/link";
import React from "react";
import Contact from "./contact/page";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" bg-[#1550b6]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            RAN VARGAS
          </span>
        </div>
        <button
          onClick={handleToggle}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-bold flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 group">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#expertise"
                className="block py-2 px-3 text-white rounded [&:not(:hover)]:text-black md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent"
              >
                Expertise
              </Link>
            </li>
            <li>
              <Link
                href="/#Projects"
                className="block py-2 px-3 text-white rounded [&:not(:hover)]:text-black md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#experience"
                className="block py-2 px-3 text-white rounded [&:not(:hover)]:text-black md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-white rounded [&:not(:hover)]:text-black md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
