"use client";

import Layout from '@/Components';
import { Button } from 'antd';
import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import type { ConfigProviderProps } from 'antd';
import CartItem from '@/Components/CartItem';

type SizeType = ConfigProviderProps['componentSize'];

function Cart() {
	const [size, setSize] = useState<SizeType>('large'); 

  return (
    <>
      <Layout>
        <div className='text-[#323338] w-full flex flex-col items-center'>
          <div className='flex flex-col w-[60%] mb-8'>
            <p className='text-center font-bold text-2xl mt-10 mb-5'>Selected Products ( 03 Items )</p>
            <div className='mt-4 space-y-5'>
              <div className='flex justify-between '>
                <div className='flex'>  
					<input type="checkbox" id="selectall" name="selectall" value="selectall" className='mr-2'/>
					<p className='font-semibold'>Selected all items</p>
					
				</div>
				         
	  			<div className='flex space-x-1'>
					<RiDeleteBin6Line size={20} className='cursor-pointer' />
					<p>Remove Items</p>
				</div>

              </div>
			  <div
					style={{
						color: "#aaa",
						backgroundColor: "#aaa",
						height: 1,
						width:'100%',
						
					}}
				> </div>    
              <div className='flex justify-between '>
                <p>Subtotal</p>
                <p className='font-bold'>US $ 1,797</p>
              </div>
			  <div
				style={{
					borderTop: "1px dashed #aaa",
					width: "100%",
				}}
				></div>
              <div className='flex justify-between '>
                <p>Shipping fee</p>
                <p className='font-bold'>US $ 15,65</p>
              </div>
			  <div
				style={{
					borderTop: "1px dashed #aaa",
					width: "100%",
				}}
				></div>
              <div className='flex justify-between '>
                <p>Total</p>
                <p className='font-bold'>US $ 1,812.65</p>
              </div>
			  <div
				style={{
					borderTop: "1px dashed #aaa",
					width: "100%",
				}}
				></div>
            </div>
            <div className='flex justify-between mt-10 gap-10'>
              <Button size={size} className='bg-gray-300 px-4 py-2 rounded-md w-52'>Shop more</Button>
              <Button size={size} className='bg-blue-600  px-4 py-2 rounded-md w-full' type="primary">Checkout ( 03 Items )</Button>
            </div>
          </div>

          
        </div>
		<div className='   '>
            <CartItem imgSrc={'/images/productpage/lapsmall.png'} productName={'DJI Phantom'} price={599} currency={'$'} ratingStarCount={3} ratingCount={243} />
			<CartItem imgSrc={'/images/productpage/lapsmall.png'} productName={'DJI Phantom'} price={599} currency={'$'} ratingStarCount={3} ratingCount={243} />
			<CartItem imgSrc={'/images/productpage/lapsmall.png'} productName={'DJI Phantom'} price={599} currency={'$'} ratingStarCount={3} ratingCount={243} />
        </div>
      </Layout>
    </>
  );
}

export default Cart;
