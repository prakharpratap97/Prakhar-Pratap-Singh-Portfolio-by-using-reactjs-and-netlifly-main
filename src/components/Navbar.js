import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center p-5">
        <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0 text-xl ml-3">
          Prakhar Pratap Singh
        </a>
        <div className="md:ml-auto flex items-center">
          <a href="#projects" className="selected mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="selected mr-5 hover:text-white">
            Skills
          </a>
          <a href="https://www.linkedin.com/in/prakharpratap97-5190b9b2/" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/prakharpratap97" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/prakharpratap97/" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
        <a href="#contact" className="selected inline-flex items-center bg-gray-800 border-0 py-2 px-4 focus:outline-none  rounded  mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
