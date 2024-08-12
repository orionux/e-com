"use client";

// components/NaviBar.tsx
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

const NaviBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'About Us', href: '/about-us' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='bg-[#FEE3B8] h-[20px]'></div>
      <div className="flex justify-between items-center p-4 bg-white text-[#606B6E]">
        <div className="flex items-center lg:hidden">
          <button onClick={toggleMenu} className="text-gray-600">
            {isOpen ? <FiX size={25} /> : <FiMenu size={25} />}
          </button>
        </div>

        <div className="hidden lg:flex items-center">
          <CiSearch size={25} className="mr-2 text-gray-600" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none"
          />
        </div>

        <div className="hidden lg:flex lg:space-x-10">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="cursor-pointer text-[#606B6E] hover:underline">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          <button className="px-4 py-2 bg-white border border-gray-500 text-[#606B6E] rounded-lg hover:bg-gray-700">
            Login
          </button>
          <button className="px-4 py-2 bg-[#A67425] text-white rounded-lg hover:bg-blue-600 ml-2">
            Register
          </button>
        </div>
      </div>

      <div className="lg:hidden px-4 py-2 bg-white">
        <div className="flex items-center">
          <CiSearch size={25} className="mr-2 text-[gray]" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none py-2"
          />
        </div>
      </div>

      <div className={`${
        isOpen ? 'block' : 'hidden'
      } lg:hidden bg-white p-4`}>
        <div className="flex flex-col space-y-2">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="cursor-pointer text-[#606B6E] hover:underline">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NaviBar;
