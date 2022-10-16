import React from "react";

export default function Navbar() {
  return (
    <section id="navbar">
      <div className="flex justify-center py-4 ">
      <div className=" lg:max-w-lg  lg:w-full md:w-1/2 w-5/6">
          <img
            className="max-h-24 object-cover object-center rounded-2xl"
            alt="logo"
            src="./io.jpg"
          />
          </div>
        <a
          href="#navbar"
          className="inline-flex text-white border-0 py-2 px-6 focus:outline-none text-lg"
        >
          Home
        </a>
        <a
          href="#about"
          className="inline-flex text-white border-0 py-2 px-6 focus:outline-none text-lg"
        >
          About
        </a>
        <a
          href="#skills"
          className="inline-flex text-white border-0 py-2 px-6 focus:outline-none text-lg"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="max-h-12 inline-flex text-white bg-blue-600 hover:bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-2xl text-lg"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
