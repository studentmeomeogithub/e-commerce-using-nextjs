// components/Header.js
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <header className="fixed top-0 w-full text-gray-600 body-font bg-white shadow-md z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">
            <Image src="/logo.png.webp" alt="" width={100} height={100} />
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 cursor-pointer hover:text-gray-700">Home</a>
            <a className="mr-5 cursor-pointer hover:text-gray-900">Men</a>
            <a className="mr-5 cursor-pointer hover:text-gray-900">Women</a>
            <a className="mr-5 cursor-pointer hover:text-gray-900">Baby Collection</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Sign up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
