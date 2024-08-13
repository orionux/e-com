import InputNumber from '../InputNumber';
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Image from "next/image";
import { Button, Typography } from 'antd';
import { MdOutlineStar } from 'react-icons/md';

type CartProps = {
    imgSrc: string;
    productName: string;
    price: number;
    currency: string;
    ratingStarCount: number;
    ratingCount: number;
};

const { Text } = Typography;

const CartItem: React.FC<CartProps> = ({
    imgSrc,
    productName,
    price,
    currency,
    ratingStarCount,
    ratingCount,
}) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-4/5 px-10 bg-white rounded-md shadow-md'>
                <div className='flex justify-between'>
                    <div className='flex '>
                        <div className='flex items-center justify-center pr-4'>
                            <input type="checkbox" />
                        </div>
                        <div className="flex w-1/3 justify-center items-center py-5">
                            <Image
                                src={imgSrc}
                                alt="product image - laptop"
                                width={350}
                                height={350}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start pl-4">
                            <Text className="font-inter text-[#343A40] font-normal text-[15px]">
                                {productName}
                            </Text>
                            <Text className="font-inter text-[#1C274C] font-semibold text-[18px] mt-1">
                                {currency}{price}
                            </Text>
                            <div className="flex flex-row items-center mt-2">
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
                                <Text className="ml-2 text-[#606B6E]">{ratingCount} reviews</Text>
                            </div>
                        </div>
                    </div>
                    <div className='flex   space-x-14'>
                        <div className='flex justify-end items-end pb-20 text-[#374151]'>
                            <RiDeleteBin6Line size={20} className='cursor-pointer mr-2' />
                            <p className='text-red-500 cursor-pointer'>Remove Items</p>
                        </div>
                        <div className="flex flex-col justify-center items-end space-y-3 ">
                            <InputNumber  />
                            <Button type='primary' className='h-10 w-full'>Checkout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
