"use client";
import React from "react";


export default function BlogPage() {
  return (
    <div>
      {/* Header Section with Background Image */}
      <div
        className="h-60 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/blog-bg.jpg')"
        }}
      >
    
      </div>

      {/* Blog Content Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Main Blog Content */}
        <div className="md:flex md:space-x-6">
          {/* Left Content */}
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 animate-color-change">
              How Technology is Redefining Travel
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              Technology has completely transformed the way we travel. From
              planning our trips to exploring new destinations, the role of
              innovation is undeniable. Tools like travel apps, virtual reality
              (VR), and AI assistants are streamlining the travel process and
              making experiences more personalized than ever.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              For instance, platforms like Google Maps help navigate unfamiliar
              cities, while VR allows us to take virtual tours of destinations
              before we visit. These advancements not only enhance convenience
              but also add excitement and safety to our travel adventures.
            </p>

            {/* Embedded Image */}
            <img
              src="/images/blog1.jpg"
              alt="Technology and Travel"
              className="w-full rounded shadow-lg my-6"
            />

            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
              Key Innovations in Travel
            </h3>
            <p className="text-gray-800 leading-relaxed mb-4">
              Here are some of the major ways technology is shaping travel:
              <ul className="list-disc ml-5 mt-2 text-gray-600">
                <li>
                  Travel Apps: Simplify bookings, itineraries, and reservations.
                </li>
                <li>
                  Smart Luggage: Offers GPS tracking, charging ports, and safety
                  features.
                </li>
                <li>
                  AI Chatbots: Provide 24/7 travel assistance and instant
                  responses.
                </li>
                <li>
                  Blockchain: Ensures data security for transactions and digital
                  passports.
                </li>
              </ul>
            </p>

            {/* Embedded Image */}
            <img
              src="/images/blog2.jpg"
              alt="Innovative Travel Technology"
              className="w-full rounded shadow-lg my-6"
            />

            <p className="text-gray-800 leading-relaxed">
              These innovations make travel not only efficient but also
              enjoyable. As we continue to embrace technology, the possibilities
              for exploration are endless.
            </p>
          </div>

          {/* Right Sidebar */}
          <div className="md:w-1/3 mt-6 md:mt-0 space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Related Posts
            </h3>
            <div className="bg-gray-100 p-4 rounded shadow-lg">
              <img
                src="/images/related-post.jpg"
                alt="Travel Apps"
                className="w-full rounded mb-4"
              />
              <h4 className="text-lg font-bold text-gray-800">
                Travel Apps: Your Digital Travel Buddy
              </h4>
              <p className="text-gray-600 text-sm">
                Discover how apps like TripIt and Google Maps simplify travel
                planning.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow-lg">
              <img
                src="/images/smartpost2.jpg"
                alt="Smart Luggage"
                className="w-full rounded mb-4"
              />
              <h4 className="text-lg font-bold text-gray-800">
                Smart Luggage: Travel Smartly and Safely
              </h4>
              <p className="text-gray-600 text-sm">
                Learn how smart luggage with GPS and safety features enhances
                your journeys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
