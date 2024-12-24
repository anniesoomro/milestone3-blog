import React from "react";
import { FaFacebook, FaTwitter,FaInstagram } from "react-icons/fa";

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation fadeIn">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-700"
          src="/images/author.png"
          alt="Author-image"
        />

        <div>
          <h3 className="text-xl font-bold">Jonathan Doe</h3>
          <p className="text-slate-600">Collaborator & Editor</p>
        </div>
      </div>

      <p className="mt-5 text-black leading-relaxed">
        Meet Jonathan Doe, a passionate writer and blogger with a love for
        technology and travel. Jonathan holds a degree in Computer Science and
        has spent years working in the tech industry, gaining a deep
        understanding of the impact technology has on our lives.
      </p>

      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 py-2 text-white bg-black rounded-md hover:bg-blue-700 transition duration-300"
        >
          <FaFacebook  size={20} />
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-black rounded-md hover:bg-blue-700 transition duration-300"
        >
          <FaTwitter  size={20} />
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-black rounded-md hover:bg-blue-700 transition duration-300"
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </div>
  );
}
