"use client";
import { Card, Typography } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineStarBorder  } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import QuickviewModel from "../Models/QuickviewModel";



type CardProps = {
  imgSrc: string;
  productName: string;
  price: number;
  currency: string;
  ratingStarCount: number;
  
};

const { Text } = Typography;

export const ProductItem: React.FC<CardProps> = ({
  imgSrc,
  productName,
  price,
  currency,
  ratingStarCount,
  

}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <Card className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 transition duration-300 productItem">
      
      <div className="flex w-100 justify-center items-center py-[20px] relative">
        <Image
          src={imgSrc}
          alt="product image - laptop"
          width={200}
          height={200}
          className="relative"
        />
        <div className="productAction flex gap-2 cursor-pointer">
            <div className="bg-black rounded-full p-1">
                <CiHeart color="white" size={23}/>
            </div>
            <div className="bg-black rounded-full p-1">
                <CiShoppingCart color="white" size={23}/>
            </div>
            <div className="bg-black rounded-full p-1" onClick={openModal}>
                <IoEyeOutline color="white" size={23}/>
                
            </div>

        </div>
      </div>
      <div className="flex flex-col text-center">
        <Text className="font-inter text-[#858484] font-semibold text-[15px]">
          {productName}
        </Text>
        <Text className="font-inter text-[#858484] font-semibold text-[18px]">
          {currency}
          {price}
        </Text>

        <div className="flex flex-row justify-center">
          {Array.from({ length: 5 }).map((_, index) =>
            index < ratingStarCount ? (
              <MdOutlineStarBorder 
                key={index}
                style={{ color: "#858484", fontSize: "20px" }}
              />
            ) : (
              <MdOutlineStarBorder 
                key={index}
                style={{ color: "#D5DADD", fontSize: "20px" }}
              />
            )
          )}
          
        </div>
      </div>
      <QuickviewModel isOpen={isModalOpen} onClose={closeModal} />

    </Card>
  );
};
