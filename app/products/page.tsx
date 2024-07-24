"use client";

import Layout from '@/Components';
import React, { useState } from 'react';
import Image from 'next/image';

import { Button } from "antd";

import type { ConfigProviderProps } from 'antd';
import InputNumber from '@/Components/InputNumber';
import TinyCard from '@/Components/TinyCard';


  
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
    <div className='bg-[#FFFBF6] h-[60rem] text-[#000]'>
        <div className='pl-80 pt-10'>
            <a href="/"><u>	&lt; Back</u></a>
        </div>
        <div className='pl-80 pt-10 pb-5'>
            <a href="/">Home &gt; Categories &gt; Apple</a>
        </div>
        <div className="  mx-60 flex gap-4 justify-start align-center text-center">
            <div className='w-1/6 bg-[#FFFBF6] flex justify-center align-center '>
            <div className='flex flex-col'>
                <div><Image src='/images/productpage/watchsmall.png' alt='iwatch' height={70} width={70}  /></div>
                <div><Image src='/images/productpage/watchsmall.png' alt='iwatch' height={70} width={70}  /></div>
                <div><Image src='/images/productpage/watchsmall.png' alt='iwatch' height={70} width={70}  /></div>
            </div>
            </div>
            <div className='w-2/6 bg-[#FFFBF6] flex justify-center align-center'>
                <div><Image src='/images/productpage/lapbig.png' alt='iwatch' height={500} width={500}  /></div>

            </div>
            <div className='w-2/6 bg-[#FFFBF6] flex flex-col text-left '>
              
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

    </div>
    </Layout>
    </>
  )
}

export default Products
