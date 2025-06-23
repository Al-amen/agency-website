import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import bannerImg from "../../assets/banner.png";
import { FaRegCirclePlay } from "react-icons/fa6";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = (curr) => {
    setShowModal(!curr);
  };

  return (
    <div className="bg-bgColor max-w-screen-2xl container mx-auto  py-20 px-5 flex flex-col lg:flex-row justify-between items-center ">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Creative Web Design for Business{" "}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Join thousands of businesses already growing with our solutions. Let’s
          help you take your business to the next level!
        </p>
        {/* left */}
        <div className="flex flex-col md:flex-row justify-center gap-4 lg:justify-start">
          <button className="bg-blue-600 text-white px-5 py-3 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition ">
            <span>Get Start</span>
            <FaArrowRight />
          </button>
          <button className="border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white text-blue-600 transition">
            Contact Us
          </button>
        </div>
      </div>
      {/* right */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end relative">
        <div className="relative group">
          <img
            src={bannerImg}
            alt="bannerImg"
            className="rounded-lg shadow-lg"
          />

          <button
            onClick={() => handleModal(showModal)}
            className="absolute inset-0 flex justify-center items-center rounded-lg group-hover:opacity-75  transition z-0"
          >
            <FaRegCirclePlay className="text-white text-5xl hover:text-blue-600" />
          </button>
        </div>
      </div>
      {/* modal */}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg relative max-w-xl w-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-white text-lg hover:text-white bg-black px-2 rounded-full"
            >
              &times;
            </button>
            <iframe
              className="w-full aspect-video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Ey18PDiaAYI?si=MM5AldTfCxSmvU5-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
