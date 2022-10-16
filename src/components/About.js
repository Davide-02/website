import React from "react";
import { User, Phone, Mail, LocationMarker} from "heroicons-react";

export default function About() {
  return (
    <section id="about">
      <div className="flex justify-center space-x-4 container px-80 py-10 mx-auto">
        <div className="px-2 pb-2 divide-blue-600 flex-initial text-center bg-zinc-700 justify-center rounded-2xl">
          <div className="justify-center lg:w-full md:w-1/2 w-5/6">
            <img
              className="inline-block mt-2 ml-2 mr-2 mb-2 max-h-48 object-cover object-center rounded-2xl"
              alt="logo"
              src="./io.jpg"
            />
            <h1 className="text-white sm:text-2xl text-2xl font-medium ">Davide Scalone</h1>
          </div>
          <hr className="mt-2 mb-2"></hr>
          <Mail className="text-white inline-block"/>
          <p>davidescalone15@gmail.com</p><br/>
          <Phone className="text-white inline-block"/>
          <p>+39 334 2048806</p><br/>
          <LocationMarker className="text-white inline-block"/>
          <p>Italy</p>
        </div>

        <div className="flex-auto bg-zinc-800 text-center mb-20 rounded-2xl">
          <User className="w-10 inline-block mt-4 mb-4" />

          <h1 className="text-center sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            About Me
          </h1>
          <p className="whitespace-normal text-center leading-relaxed ml-12 mr-12">
            My name is Davide Scalone and my long-term goal is to become a
            qualified Front-end programmer. I desire to put myself at the
            service of learning and gain work experience in this area.
            Enterprising and determined personality, I obtained the High School
            Degree in Computer Science and Telecommunications. I can count on
            strong motivation and the desire to grow professionally as a
            Programmer, proactively contributing to the achievement of
            individual and team goals.
          </p>
          <a
              href="#skills"
              className="inline-flex mt-4 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-2xl text-lg">
              Skills
            </a>
        </div>
      </div>
    </section>
  );
}
