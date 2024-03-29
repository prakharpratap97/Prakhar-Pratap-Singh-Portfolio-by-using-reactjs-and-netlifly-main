import React from "react";
import { FaDownload } from "react-icons/fa";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Prakhar Pratap Singh
          </h1>
          <p className="mb-8 leading-relaxed">
            A Front-end Web Developer with 4 months of internship experience in
            React JS, JavaScript, HTML, and CSS
          </p>
          <h2>
            I am a Computer Science Engineering graduate and have worked on
            various projects showcasing my skills in these technologies. <br />{" "}
            Check out my portfolio to view my past projects and learn more about
            my abilities. Please feel free to contact me for any inquiries.
          </h2>
          <br />

          <div className="flex justify-center">
            <a
              href="#contact"
              className=" selected inline-flex flex justify-center text-white bg-green-500 border-0 py-2 px-5 focus:outline-none  rounded text-lg "
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4  selected flex justify-center inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-5 focus:outline-none  hover:text-white rounded text-lg"
            >
              Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1hK1n1hW3VpLtRWkH1BwBhaC0d26DM3ea/view?usp=share_link"
              className="ml-4  selected inline-flex flex justify-center text-gray-400 bg-gray-800 border-0 py-2 px-5 focus:outline-none  hover:text-white rounded text-lg"
            >
              <FaDownload className="mr-2 mt-1 h-5 w-5 &nbsp" /> View Resume
            </a>
            {/* <a
              href="https://drive.google.com/file/d/1cyrfrOVh1rntv7ieD1uDL4RiFh98yLLr/download"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              download
            >
               Download Resume
            </a> */}
          </div>
        </div>
        <div className="md:max-w-md md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded responsive-image card"
            alt="hero"
            src="./Prakhar Pratap Singh.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
