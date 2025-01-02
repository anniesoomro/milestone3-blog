"use client";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="h-60 md:h-80 bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "url(/images/about-bg.jpg)",
        }}
      >
        {/* Dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-white text-4xl md:text-5xl font-bold bg-black bg-opacity-50 px-6 py-2 rounded mt-8 text-center z-10 hover:text-gray-600 transition-colors duration-300">
          About Us
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8 md:flex md:items-start space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-2/3 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            The Role of Technology in Transforming Travel Experiences
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
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
        <div className="md:w-1/3 md:pl-6 flex flex-wrap justify-center space-y-4">
          <Image src="/images/travel.jpg"
            alt="Travel Technology"width={300} height={300}
            className="w-full md:w-5/6 rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
          />
          <Image
            src="/images/exploring.jpg"
            alt="Exploring Destinations" width={300} height={300}
            className="w-full md:w-5/6 rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
          />
          <Image
            src="/images/smart.jpg"
            alt="Smart Travel"
            width={300} height={300}
            className="w-full md:w-5/6 rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}