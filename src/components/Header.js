import React from 'react';

export default function Header() {
    return(
    <section id="header">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi,
            <br className="hidden lg:inline-block" />My name is Davide, Frontend Web Developer
          </h1>
          <div className="flex justify-center">
            <a
              href="#about"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-2xl text-lg">
              About
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-2xl"
            alt="hero"
            src="./mockupPc.png"
          />
        </div>
      </div>
    </section>
    );
}