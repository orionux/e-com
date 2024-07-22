"use client";

import { Typography } from "antd";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaDribbble,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const { Text } = Typography;

const Footer = () => {
  const footerItems = [
    {
      id: 1,
      iconGroup: (
        <div className="flex flex-row">
          <Link href="#" className="mr-4">
            <FaFacebookSquare className="text-[20px]" />
          </Link>
          <Link href="#" className="mr-4">
            <FaInstagram className="text-[20px]" />
          </Link>
          <Link href="#" className="mr-4">
            <FaLinkedin className="text-[20px]" />
          </Link>
          <Link href="#" className="mr-4">
            <FaDribbble className="text-[20px]" />
          </Link>
          <Link href="#" className="">
            <FaTwitter className="text-[20px]" />
          </Link>
        </div>
      ),
      title: "Address",
      items: [
        {
          id: 1,
          name: "+123 654 987",
          link: "#",
        },
        {
          id: 2,
          name: "877  The Bronx, NY \n 14568, USA",
          link: "#",
        },
      ],
    },
    {
      id: 3,
      iconGroup: null,
      title: "My Account",
      items: [
        {
          id: 1,
          name: "Sign in",
          link: "#",
        },
        {
          id: 2,
          name: "Register",
          link: "#",
        },
        {
          id: 3,
          name: "Order status",
          link: "#",
        },
      ],
    },
    {
      id: 2,
      iconGroup: null,
      title: "Help",
      items: [
        {
          id: 1,
          name: "Shipping",
          link: "#",
        },
        {
          id: 2,
          name: "Returns",
          link: "#",
        },
        {
          id: 3,
          name: "Sizing",
          link: "#",
        },
      ],
    },
    {
      id: 2,
      iconGroup: null,
      title: "Shop",
      items: [
        {
          id: 1,
          name: "All Products",
          link: "#",
        },
        {
          id: 2,
          name: "Poppular",
          link: "#",
        },
        {
          id: 3,
          name: "Categories",
          link: "#",
        },
      ],
    },
    {
      id: 2,
      iconGroup: null,
      title: "Legal Stuff",
      items: [
        {
          id: 1,
          name: "Shipping & Delivery",
          link: "#",
        },
        {
          id: 2,
          name: "Terms & Conditions",
          link: "#",
        },
        {
          id: 3,
          name: "Privacy & Policy",
          link: "#",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col bg-darkGray2 px-[10px] md:px-[50px] lg:px-[100px] py-[50px]">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {footerItems.map((item) => (
              <div key={item.id} className="bg-blue-500 p-4 flex flex-col">
                {item.iconGroup && <div className="mb-4">{item.iconGroup}</div>}
                <Text className="mb-4 text-open_sans text-[14px] lg:text-[16px] 2xl:text-[18px font-bold text-white">
                  {item.title}
                </Text>
                {item.items.map((link) => (
                  <Link
                    key={link.id}
                    href={link.link}
                    className="mb-2 text-open_sans text-[14px] lg:text-[16px] 2xl:text-[18px] font-normal text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center text-center w-full">
          <Text className="text-white text-[14px] lg:text-[16px] 2xl:text-[18px]  pt-[25px] font-open_sans">
            Copyright ©2023 ORION UX. All Rights Reserved
          </Text>
        </div>
      </div>
    </>
  );
};

export default Footer;
