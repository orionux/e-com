// components/NaviBar.tsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const NaviBar: React.FC = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'About Us', href: '/about-us' },
  ];

  return (
    <>
    <div className='bg-[#FEE3B8] h-[20px]'></div>
    <div className="flex justify-between items-center p-4 bg-white text-[#606B6E]">
          <div className="flex items-center">
              <div className="flex items-center border rounded p-2">
                  <FaSearch className="mr-2 text-gray-600" />
                  <input
                      type="text"
                      placeholder="Search..."
                      className="outline-none" />
              </div>
          </div>
          <div className="flex space-x-4">
              {links.map((link, index) => (
                  <Link key={index} href={link.href}>
                      <span className="cursor-pointer text-[#606B6E] hover:underline">
                          {link.name}
                      </span>
                  </Link>
              ))}
          </div>
          <div className="flex space-x-2">
              <button className="px-4 py-2 bg-white border border-gray-500 text-[#606B6E] rounded hover:bg-gray-700">Login</button>
              <button className="px-4 py-2 bg-[#A67425]  text-white rounded-lg hover:bg-blue-600">Register</button>
          </div>
      </div>
      </>
  );
};

export default NaviBar;
