import React from "react";
import imageHome from "../assets/images/imageHome.jpg";

const Home = () => {
  return (
    <div className="flex items-start justify-center p-8 bg-white">
      <div className="w-1/2">
        <h1 className="text-3xl text-purple-700 mb-4 px-14">
          WE MAKE YOUR IDEA'S <br />
          <div className="text-orange-600">INTO REALITY</div>
        </h1>
        <p className="text-gray-700 text-justify leading-relaxed px-14">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card content.
        </p>
        <div className="flex space-x-3 mt-4 px-14"> 
          <button className="bg-purple-600 text-white py-2 px-4 hover:bg-purple-700 focus:outline-none 
          focus:ring-2 focus:ring-purple-500">
            Get Started
          </button>
          <button className="bg-white text-purple-600 py-2 px-4 border border-purple-600 hover:bg-purple-100 
          focus:outline-none focus:ring-2 focus:ring-purple-500">
            Contact Us
          </button>
        </div>
      </div>

      <div className="w-1/2">
        <img
          src={imageHome}
          alt="Home"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
