import React from "react";
import image from "../assets/images/image.png";

const ContactUs = () => {
  return (
    <div>
      <div className="flex justify-center text-gray-900 text-2xl mb-8 py-20">
        Contact Us
      </div>

      <div className="flex justify-between items-start p-8 bg-white">
        <div className="flex-shrink-0 w-1/2">
          <img
            src={image}
            alt="Contact Us"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-1/2 pl-8">
          <form action="">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-900 mb-2" htmlFor="email">
                Email address
              </label>
              <input
                type="text"
                placeholder="name@example.com"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="feedback" className="block text-gray-900 mb-2">
                Feedback
              </label>
              <textarea
                placeholder=""
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="p-4 bg-purple-700 rounded-lg text-white py-1 px-3 hover:bg-purple-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className=" flex text-center p-4 bg-gradient-to-r from-purple-400 to-blue-900  w-full text-white ">
        <div className="w-1/4">
          
          <ul>
            <h1 className="text-2xl p-4">CONTACT US</h1>
            <li className="text-bold p-4">
              E mail <br />
              contact@JILLIONTECHNOLOGIES@COM
            </li>
            <li className="text-bold p-4">
              Phone <br />
              123456789
            </li>
            <li className="text-bold p-4">
              Address <br />
              C-260, Sector-63, Noida, P-201301
            </li>
          </ul>
        </div>

        <div className="w-1/4">
          <h1 className="text-2xl p-4">COMPANY</h1>

          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Development Process</li>
            <li>Career</li>
          </ul>
        </div>

        <div className="w-1/4">
          <h1 className="text-2xl p-4">SERVICES</h1>
          <ul>
            <li>
              Website Development
            </li>
            <li>
              Mobile App Development
            </li>
            <li>
              E-commerce Development
            </li>
            <li>
              Customer Software Development
            </li>
          </ul>
        </div>


        <div className="w-1/4">
          <h1 className="text-2xl p-4">SUPPORT</h1>
          <ul>
            <li>
            Contact
            </li>
            <li>
              Term & Policy
            </li>
           
          </ul>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
