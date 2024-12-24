import React from "react";
import { FaUmbrellaBeach, FaMountain, FaCity } from "react-icons/fa";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-300 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[5px] hover:text-black text-red-600">
          The Role of Technology in Transforming Travel Experiences
        </h2>

        <div
          className="mt-8 h-60 sm:h-80 md:h-96 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url(/images/feature-bg.png)" }}
        ></div>

        <p className="text-center  mb-4 mt-4 text-2xl text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          Technology has revolutionized the way we travel, making it more
          convenient, efficient, and personalized. From planning trips through
          online booking platforms to navigating new destinations with GPS and
          translation apps, technology has removed many barriers that once made
          travel challenging. Virtual tours allow us to explore destinations
          before visiting, while mobile apps provide real-time updates on
          flights, weather, and local attractions. Moreover, advancements in
          artificial intelligence and big data have enabled personalized
          recommendations, ensuring every journey is tailored to individual
          preferences. In short, technology has transformed travel into a
          seamless and enriching experience, opening doors to endless
          possibilities for exploration.
        </p>
      </section>
      <section className="mb-10 bg-white">
        <h3 className="text-center text-2xl font-bold md:text-4xl text-red-600 hover:text-black mb-8">
          Explore Categories
        </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        
          <div className="flex flex-col items-center p-6 bg-neutral-100 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-4xl text-black mb-4">
              <FaUmbrellaBeach />
            </div>
            <h4 className="text-lg font-semibold text-gray-700">
              Beach Destinations
            </h4>
            <p className="text-sm text-gray-600 text-center mt-2">
              Discover the most beautiful beaches around the world.
            </p>
          </div>
          
            <div className="flex flex-col items-center p-6 bg-neutral-100 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl text-black mb-4">
                <FaMountain />
              </div>
              <h4 className="text-lg font-semibold text-gray-700">
                Mountain Adventures
              </h4>
              <p className="text-sm text-gray-600 text-center mt-2">
                Explore breathtaking mountain trails and landscapes.
              </p>
            </div>
            
              <div className="flex flex-col items-center p-6 bg-neutral-100 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="text-4xl text-black mb-4">
                  <FaCity />
                </div>
                <h4 className="text-lg font-semibold text-gray-700">
                  City Tours
                </h4>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Experience the vibrant culture of world-famous Cities.
                </p>
              </div>
            </div>
          
        
      </section>
    </div>
  );
}
