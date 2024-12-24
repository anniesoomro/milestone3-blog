"use client";
import React from "react";


export default function About() {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="h-60 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url(/images/about-bg.jpg)"
        }}
      >
        
      </div>
      <h1 className="text-white text-4xl md:text-5xl font-bold bg-black bg-opacity-50 px-6 py-2 rounded mt-8 text-center hover:text-red-600 animate-color-change">
          About Us
        </h1>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8 md:flex md:items-start">
        {/* Left Content */}
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 animate-color-change">
            The Role of Technology in Transforming Travel Experiences
          </h2>
          <p className="text-gray-800 text-lg  mt-6 mb-4 leading-relaxed  ">
            At <strong>Exploring Horizons</strong>, we believe in the power of
            technology to redefine how we experience the world. From travel apps
            simplifying itineraries to virtual reality offering immersive
            previews of destinations, technology has become an integral part of
            modern travel.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Our mission is to bridge the gap between adventure and innovation.
            By embracing smart solutions like AI assistants, GPS, and blockchain
            security, we ensure that your travel experience is not only
            enjoyable but also safe and efficient. Let&apos;s explore the horizons
            together!
          </p>
        </div>

        {/* Right Images */}
        <div className="md:w-1/3 mt-6 md:mt-0 md:pl-6 flex flex-wrap justify-center space-y-4">
          <img
            src="/images/travel.jpg"
            alt="Travel Technology"
            className="w-full md:w-5/6 rounded shadow-lg"
          />
          <img
            src="/images/exploring.jpg"
            alt="Exploring Destinations"
            className="w-full md:w-5/6 rounded shadow-lg"
          />
          <img
            src="/images/smart.jpg"
            alt="Smart Travel"
            className="w-full md:w-5/6 rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
