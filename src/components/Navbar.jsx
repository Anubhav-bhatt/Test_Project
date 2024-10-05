import React, { useState } from "react";

const Navbar = () => {
  
    return (
        <nav className="bg-white p-10">
            <div className="flex items-center justify-between">
                <div className="text-xl text-purple-700 px-12">Jillion Technologies</div>
                <ul className="flex space-x-6 text-purple-700">
                    <li>Home</li>
                    <li>Feature</li>
                    <li>Product</li>
                    <li>Testimonial</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;