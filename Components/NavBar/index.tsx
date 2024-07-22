"use client";

import { Drawer, Dropdown, Menu, MenuProps, Space } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import common from "../../styles/common.module.css";
import MenuIcon from "@/Assests/SVG/MenuIcon";
import { IoSearchOutline } from "react-icons/io5";
import FavoriteIcon from "@/Assests/SVG/FavoriteIcon";
import CartIcon from "@/Assests/SVG/CartIcon";
import { FaFaceAngry } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const { Item } = Menu;

const Header = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="text-inter text-[14px] font-medium text-darkGray3"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="text-inter text-[14px] font-medium text-darkGray3"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="text-inter text-[14px] font-medium text-darkGray3"
        >
          3rd menu item
        </a>
      ),
    },
  ];

  return (
    <>
      <div className="flex w-full">
        <nav className="flex items-center justify-between px-[20px] lg:px-[100px] py-5 bg-white shadow-md w-full">
          <div className="text-xl font-bold flex flex-row items-center">
            <Link
              href="/"
              className={`text-darkGray3 hover:text-blue-500 mr-3`}
            >
              <MenuIcon width="20px" height="20px" />
            </Link>
            <Link
              href="/"
              passHref
              className={`text-darkGray3 hover:text-blue-500 text-[14px] font-normal mr-3 text-montserrat`}
            >
              HOME
            </Link>
            <Dropdown
              menu={{ items }}
              className="text-darkGray3 hover:text-blue-500 text-[14px] font-normal text-montserrat"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  PRODUCTS 
                  <IoIosArrowDown />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="hidden md:flex space-x-4 flex-row items-center">
            <Link
              href="/"
              passHref
              className={`text-darkGray3 hover:text-blue-500`}
            >
              <IoSearchOutline className="text-[26px]" />
            </Link>
            <Link
              href="/"
              passHref
              className={`text-darkGray3 hover:text-blue-500`}
            >
              <FavoriteIcon width="30px" height="30px" number={2} />
            </Link>
            <Link
              href="/"
              passHref
              className={`text-darkGray3 hover:text-blue-500`}
            >
              <CartIcon width="30px" height="30px" number={6} />
            </Link>
          </div>
          <div className="md:hidden">
            <CiMenuFries onClick={showDrawer} className="text-darkGray3" />
            <Drawer
              title="Menu"
              placement="right"
              onClose={onClose}
              visible={visible}
            >
              <Menu mode="vertical">
                <Item key="home">
                  <Link
                    href="/"
                    passHref
                    className={`text-darkGray3 hover:text-blue-500`}
                  >
                    <IoSearchOutline className="text-[26px]" />
                  </Link>
                </Item>
                <Item key="about">
                  <Link
                    href="/"
                    passHref
                    className={`text-darkGray3 hover:text-blue-500`}
                  >
                    <FavoriteIcon width="30px" height="30px" number={2} />
                  </Link>
                </Item>
                <Item key="services">
                  <Link
                    href="/"
                    passHref
                    className={`text-darkGray3 hover:text-blue-500`}
                  >
                    <CartIcon width="30px" height="30px" number={6} />
                  </Link>
                </Item>
              </Menu>
            </Drawer>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
