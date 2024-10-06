import React from "react";

const Products = () => {
  return (
    <div>
      <div className="text-2xl flex justify-center items-center py-8">
        Products
      </div>

      <div className="flex flex-wrap justify-center space-x-4">
        <div className="mx-4 my-2 border w-80 p-4 rounded-lg shadow-md">
          <img src="" alt="" />
          <h1>Card Title</h1>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>

        <div className="mx-4 my-2 border w-80 p-4 rounded-lg shadow-md">
          <img src="" alt="" />
          <h1>Card Title</h1>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>

        <div className="mx-4 my-2 border w-80 p-4 rounded-lg shadow-md">
          <img src="" alt="" />
          <h1>Card Title</h1>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
