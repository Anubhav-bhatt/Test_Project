import React from "react";
import Feature_image from "../assets/images/Feature_image.png";

const Features = () => {
  return (
    <div>
      <div className="flex justify-center text-gray-900 text-2xl mb-8">
        Features
      </div>

      <div className="flex items-center">
        <div className="w-1/2">
          <img
            src={Feature_image}
            alt="Feature_image"
            className="w-full h-auto object-cover p-10"
          />
        </div>

        <div className="w-1/2 pl-8">
          <h2 className="text-2xl  text-gray-900 mb-4">Card title</h2>
          <p className="text-gray-700">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-1/2 pl-8">
          <h2 className="text-2xl  text-gray-900 mb-4 px-10">Card title</h2>
          <p className="text-gray-700 px-10">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>

        <div className="w-1/2">
          <img
            src={Feature_image}
            alt="Feature_image"
            className="w-full h-auto object-cover p-10"
          />
        </div>

        
      </div>
      <div className="flex items-center">
        <div className="w-1/2">
          <img
            src={Feature_image}
            alt="Feature_image"
            className="w-full h-auto object-cove p-10"
          />
        </div>

        <div className="w-1/2 pl-8">
          <h2 className="text-2xl  text-gray-900 mb-4">Card title</h2>
          <p className="text-gray-700">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
