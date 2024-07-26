"use client";

import Layout from '@/Components';
import React, { useState } from 'react';
import Image from 'next/image';

//ant components
import { Button } from "antd";
import type { ConfigProviderProps } from 'antd';

//components
import InputNumber from '@/Components/InputNumber';
import TinyCard from '@/Components/TinyCard';
import { ProductCard } from '@/Components/ProductCards';
import ModelSlider from '@/Components/Sliders/ModelSlider';

//react icons
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

//slider
import { SliderOne } from '@/Components/Sliders';


  
  const products = [
    {
      id: 1,
      imageSrc: '/images/productpage/pistol.png',
      flavour: 'Flavour Name 1',
      productName: 'Product Name Here 1',
    },
    {
      id: 2,
      imageSrc: '/images/productpage/pistol.png',
      flavour: 'Flavour Name 2',
      productName: 'Product Name Here 2',
    },
  ];

  type SizeType = ConfigProviderProps['componentSize'];

const Products: React.FC = () => {

    const [size, setSize] = useState<SizeType>('large'); // default is 'middle'


  return (
    <>
    <Layout>
    <div className='bg-[#FEF2E3] h-[auto] text-[#000] self-center flex flex-col align-center justify-center'>
        <div className='pl-80 pt-10'>
            <a href="/"><u>	&lt; Back</u></a>
        </div>
        <div className='pl-80 pt-10 pb-5'>
            <a href="/">Home &gt; Categories &gt; Apple</a>
        </div>
        <div className="  w-[80%] flex self-center justify-start align-center text-center">
            <div className='w-[20%] bg-[#FFFBF6] flex justify-center align-center p-5'>
            <div className='flex flex-col'>
                <div><Image src='/images/productpage/watchsmall.png' alt='iwatch' height={70} width={70}  /></div>
                <div><Image src='/images/productpage/watchsmall.png' alt='iwatch' height={70} width={70}  /></div>
                <div><Image src='/images/productpage/watchsmall.png' alt='iwatch' height={70} width={70}  /></div>
            </div>
            </div>
            <div className='w-[40%] bg-[#FFFBF6] flex justify-center align-center p-5'>
                <div><Image src='/images/productpage/lapbig.png' alt='iwatch' height={500} width={500}  /></div>

            </div>
            <div className='w-[40%] bg-[#fff] flex flex-col text-left  p-5'>
              
                <div className=''>
                    <p className='bg-[#EEF0F2] w-min p-1 text-[#274C77] font-medium '>New</p>
                </div>
                <div className="flex align-start justify-start flex-col w-max text-[36px] font-bold text-[#1C274C] py-1">
                    <h1>Mac Book pro 2024</h1>
                    <h1 className='justify-center'>590$</h1>
                </div>
                <div className="text-[##546A7B] pb-2">
                    <p>107293</p>
                </div>
                <div className="text-[#7E8F9A] py-1">
                    <ul className=''>
                        <li className='pb-1'>Original Product</li>
                        <li className='pb-1'>Refill availability</li>
                        <li className='pb-1'>Details of lighter add here</li>
                        <li className='pb-1'>Sample data Sample data Sample data</li>
                        <li className='pb-1'>Made in Russia</li>
                    </ul>
                </div>
                <div className='py-5'>
                    <InputNumber />
                </div>
                    <Button type="primary" size={size}>
                        Add to Cart
                    </Button>
                <div>
                    <p className='text-[#546A7B]'>Total<span className='text-[#1C274C] text-[36px] font-bold'>$590</span></p>
                </div>    
                <div>
                {products.map((product) => (
                    <div key={product.id} className="gap-3">
                    <TinyCard product={product} />
                    </div>
                ))}
                </div>             
            </div>
        </div>
        <div className='w-full self-center py-20'>
            <h1 className='text-xl font-bold text-[#16384E] ps-20'>Models</h1>
            <ModelSlider />
        </div>
        <div className=''>
            <h1 className='text-xl font-bold text-[#16384E] ps-20'>Related Products</h1>
            <div className="grid grid-cols-4 gap-4 pt-10 px-20">
                <div className='flex align-center justify-center'>
                <ProductCard
                imgSrc="/images/productpage/watchbig.png"
                productName="DJI Phantom 2 Vision+"
                currency="$"
                price={599}
                ratingStarCount={4}
                ratingCount={243}
                />
                </div>
                <div className='flex align-center justify-center'>
                <ProductCard
                imgSrc="/images/productpage/watchbig.png"
                productName="DJI Phantom 2 Vision+"
                currency="$"
                price={599}
                ratingStarCount={4}
                ratingCount={243}
                />
                </div>
                <div className='flex align-center justify-center'>
                <ProductCard
                imgSrc="/images/productpage/watchbig.png"
                productName="DJI Phantom 2 Vision+"
                currency="$"
                price={599}
                ratingStarCount={4}
                ratingCount={243}
                />
                </div>
                <div className='flex align-center justify-center'>
                <ProductCard
                imgSrc="/images/productpage/watchbig.png"
                productName="DJI Phantom 2 Vision+"
                currency="$"
                price={599}
                ratingStarCount={4}
                ratingCount={243}
                />
                </div>
            </div>
            <div className='flex align-center justify-center'>
                <Button type="primary" size={size} className='px-10 m-10 mb-20'>
                    See More<FaArrowUpRightFromSquare />
                </Button>
            </div>
        </div>
    </div>
    </Layout>
    </>
  )
}

export default Products
