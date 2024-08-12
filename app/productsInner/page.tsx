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

//react icons
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

//slider
import ModelSlider from '@/Components/Sliders/ModelSlider';

const products = [
  {
    id: 1,
    imageSrc: '/images/productpage/pistol.png',
    flavour: 'Flavour 1',
    productName: 'Product 1',
  },
  {
    id: 2,
    imageSrc: '/images/productpage/pistol.png',
    flavour: 'Flavour 2',
    productName: 'Product 2',
  },
];

type SizeType = ConfigProviderProps['componentSize'];

const ProductsInner: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large');

  return (
    <>
      <Layout>
        <div className="bg-[#fff] min-h-screen text-[#000] flex flex-col align-center justify-center px-4 lg:px-20">
          <div className="pt-10">
            <a href="/" className="text-blue-600 visited:text-red-600">
              &lt; <u className="text-[black] hover:text-[blue]">Back</u>
            </a>
          </div>
          <div className="pt-10 pb-5">
            <h6 className="text-[#7E8F9A]">Home &gt; Categories &gt; <span className="text-[#252C32] font-medium">Apple</span></h6>
          </div>
          <div className="flex flex-col lg:flex-row w-full  self-center justify-start align-center text-center  h-full">
            <div className="lg:w-[10%] bg-[#FFFBF6] flex justify-center align-center pt-5">
            <div className="hidden lg:flex flex-col">
                <div><Image src="/images/productpage/watchsmall.png" alt="iwatch" height={80} width={80} /></div>
                <div><Image src="/images/productpage/watchsmall.png" alt="iwatch" height={80} width={80} /></div>
                <div><Image src="/images/productpage/watchsmall.png" alt="iwatch" height={80} width={80} /></div>
            </div>

            </div>
            <div className="lg:w-[45%]  bg-[#FEF2E3]  pt-5">
              <div className=' self-center lg:pt-20'>
                <img src="/images/productpage/lapbig.png" alt="iwatch" className='w-full h-50'/>
              </div>
            </div>
            <div className="flex lg:hidden">
                <div><Image src="/images/productpage/watchsmall.png" alt="iwatch" height={70} width={70} /></div>
                <div><Image src="/images/productpage/watchsmall.png" alt="iwatch" height={70} width={70} /></div>
                <div><Image src="/images/productpage/watchsmall.png" alt="iwatch" height={70} width={70} /></div>
            </div>
            <div className="lg:w-[45%] bg-[#fff] flex flex-col text-left pt-5 lg:pl-5">
              <div>
                <p className="bg-[#EEF0F2] w-min p-1 text-[#274C77] font-medium">New</p>
              </div>
              <div className="flex align-start justify-start flex-col w-max text-[36px] font-bold text-[#1C274C] py-1">
                <h1 className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl mb-2'>Mac Book Pro 2024</h1>
                <h1 className="justify-center text-3xl md:text-4xl lg:text-4xl xl:text-5xl">$590</h1>
              </div>
              <div className="text-[#546A7B] pb-2 text-lg md:text-xl ">
                <p>107293</p>
              </div>
              <div className="text-[#7E8F9A] py-1 text-lg xl:text-xl ">
                <ul>
                  <li className="pb-1">Original Product</li>
                  <li className="pb-1">Refill availability</li>
                  <li className="pb-1">Details of lighter add here</li>
                  <li className="pb-1">Sample data Sample data Sample data</li>
                  <li className="pb-1">Made in Russia</li>
                </ul>
              </div>
              <div className="py-5">
                <InputNumber />
              </div>
              <Button type="primary" size={size}>
                Add to Cart
              </Button>
              <div className="flex items-center justify-end">
                <p className="text-[#546A7B] flex items-center justify-center gap-5  text-lg xl:text-2xl 2xl:text-4xl pt-5">
                  Total
                  <span className="text-[#1C274C] text-4xl  2xl:text-6xl font-bold flex items-center justify-center ">$590</span>
                </p>
              </div>

              <div className='md:w-[80%] w-[100%] self-center'>
                {products.map((product) => (
                  <div key={product.id} className="gap-3">
                    <TinyCard product={product} />
                  </div>
                ))}
              </div>
              
            </div>
          </div>
          
          
          
          <div className="w-full self-center py-5">
            <h1 className="text-xl font-bold text-[#16384E]">Models</h1>
            <ModelSlider />
          </div>
          <div className="pb-10">
            <h1 className="text-xl font-bold text-[#16384E]">Related Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10">
              <div className="flex align-center justify-center">
                <ProductCard
                  imgSrc="/images/productpage/watchbig.png"
                  productName="DJI Phantom 2 Vision+"
                  currency="$"
                  price={599}
                  ratingStarCount={4}
                  ratingCount={243}
                />
              </div>
              <div className="flex align-center justify-center">
                <ProductCard
                  imgSrc="/images/productpage/watchbig.png"
                  productName="DJI Phantom 2 Vision+"
                  currency="$"
                  price={599}
                  ratingStarCount={4}
                  ratingCount={243}
                />
              </div>
              <div className="flex align-center justify-center">
                <ProductCard
                  imgSrc="/images/productpage/watchbig.png"
                  productName="DJI Phantom 2 Vision+"
                  currency="$"
                  price={599}
                  ratingStarCount={4}
                  ratingCount={243}
                />
              </div>
              <div className="flex align-center justify-center">
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
            <div className="flex align-center justify-center">
              <Button type="primary" size={size} className="px-10 m-10 mb-20">
                See More<FaArrowUpRightFromSquare />
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductsInner;
