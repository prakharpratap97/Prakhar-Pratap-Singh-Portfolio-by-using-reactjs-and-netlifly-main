import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowRightIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center p-4">
        <a
          href="#about"
          className="title-font font-medium text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 mb-4 md:mb-0 sm:text-center text-xl mr-4"
        >
          Prakhar Pratap Singh
        </a>

        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white mb-5"
          >
            {isOpen ? (
              <XIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          className={`md:flex md:items-center ${
            isOpen ? "block" : "hidden"
          } w-full md:w-auto`}
        >
          <div className="md:ml-auto flex flex-col md:flex-row items-center ">
            <a
              href="#projects"
              className="selected mr-5 hover:text-white m-2 md:mb-0 md:mr-8"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="selected mr-5 hover:text-white m-2 md:mb-0 md:mr-8"
            >
              Skills
            </a>
            <a
              href="https://www.linkedin.com/in/prakharpratap97-5190b9b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-3"
            >
              <FaLinkedin className="w-6 h-6 m-2 mb-2" />
            </a>
            <a
              href="https://github.com/prakharpratap97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-3"
            >
              <FaGithub className="w-6 h-6 m-2 mb-2" />
            </a>
            <a
              href="https://www.instagram.com/prakharpratap97/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-3"
            >
              <FaInstagram className="w-6 h-6 m-2 mb-2" />
            </a>
            <a
              href="#contact"
              className="selected inline-flex items-center bg-gray-800 border-0 py-2 px-4 focus:outline-none rounded m-2 "
            >
              Hire Me
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
