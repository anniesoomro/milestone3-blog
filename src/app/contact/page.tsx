"use client";
import React from "react";


export default function ContactUs() {
  return (
    <div>
      
      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="md:flex md:space-x-12">
          {/* Left Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Get in Touch
            </h2>
            <p className="text-black mb-6">
              We’d love to hear from you! Whether you have a question about
              travel technology, want to collaborate, or simply want to say hi,
              feel free to drop us a message.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-8 h-8 text-blue-500">
                  {/* Replace with your preferred icon */}
                  📍
                </span>
                <p className="ml-4 text-black">123 Tech Lane, Travel City</p>
              </div>
              <div className="flex items-center">
                <span className="w-8 h-8 text-blue-500">
                  {/* Replace with your preferred icon */}
                  📞
                </span>
                <p className="ml-4 text-black">+123 456 789</p>
              </div>
              <div className="flex items-center">
                <span className="w-8 h-8 text-blue-500">
                  {/* Replace with your preferred icon */}✉
                </span>
                <p className="ml-4 text-black">
                  contact@exploringhorizons.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:w-1/2">
            <form className="bg-gray-100 p-6 rounded shadow-lg space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-black font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-black font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-black font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder="Type your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
