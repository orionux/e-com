import { Card } from 'antd';
import React from 'react';


type CardProps = {
  productName: string;
  price: number;
  currency: string;
  ratingStarCount: number;
  ratingCount: number;
};

export const ProductCard: React.FC<CardProps> = ({ productName, price, currency , ratingStarCount, ratingCount}) => {
  return (
    <Card
      className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 transition duration-300"
    >
      {productName}
      {currency}{price}
      {ratingStarCount}
      {ratingCount}
    </Card>
  );
};
