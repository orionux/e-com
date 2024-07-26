"use client";
import { Card, Typography } from "antd";
import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { HiDocumentAdd } from "react-icons/hi";

type CardProps = {
  imgSrc: string;
  productName: string;
  price: number;
  currency: string;
  ratingStarCount: number;
  ratingCount: number;
};

const { Text } = Typography;

export const ProductCard: React.FC<CardProps> = ({
  imgSrc,
  productName,
  price,
  currency,
  ratingStarCount,
  ratingCount,
}) => {
  return (
    <Card className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 transition duration-300 relative">
      <div className="flex flex-col absolute top-0 right-0 p-[10px]">
        <FaHeart
          style={{ color: "#B0BABF", fontSize: "18px" }}
          className="mb-3"
        />
        <HiDocumentAdd style={{ color: "#B0BABF", fontSize: "22px" }} />
      </div>
      <div className="flex w-100 justify-center items-center py-[20px]">
        <Image
          src={imgSrc}
          alt="product image - laptop"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col">
        <Text className="font-inter text-[#343A40] font-normal text-[15px]">
          {productName}
        </Text>
        <Text className="font-inter text-[#1C274C] font-semibold text-[18px]">
          {currency}
          {price}
        </Text>

        <div className="flex flex-row">
          {Array.from({ length: 5 }).map((_, index) =>
            index < ratingStarCount ? (
              <MdOutlineStar
                key={index}
                style={{ color: "#F8C51B", fontSize: "20px" }}
              />
            ) : (
              <MdOutlineStar
                key={index}
                style={{ color: "#D5DADD", fontSize: "20px" }}
              />
            )
          )}
          <Text className="ms-3">{ratingCount}</Text>
        </div>
      </div>
    </Card>
  );
};
