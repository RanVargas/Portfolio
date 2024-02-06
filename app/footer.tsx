import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#1550b6] rounded-lg shadow mt-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center">
          &copy; 2023-{currentYear}. Version 0.0.1. Made with burning passion by{" "}
          <a href="https://www.linkedin.com/in/ran-vargas-a72547128">
            Ran Vargas
          </a>
        </span>
        <span className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
