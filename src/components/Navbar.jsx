import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-white p-6 md:p-10">
            <div className="flex items-center justify-between">
                <div className="text-xl text-purple-700 px-4 md:px-12">Jillion Technologies</div>
                <div className="hidden md:flex">
                    <ul className="flex space-x-6 text-purple-700">
                        <li>Home</li>
                        <li>Feature</li>
                        <li>Product</li>
                        <li>Testimonial</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="md:hidden">
                    <button className="text-purple-700 focus:outline-none">
                        ☰
                    </button>
                </div>
            </div>
            <div className="md:hidden mt-4">
                <ul className="flex flex-col space-y-4 text-purple-700">
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
