"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/Components/Buttons";
import { SliderOne } from "@/Components/Sliders";
import Layout from "@/Components";
import { ProductCard } from "@/Components/ProductCards";
import SliderHome from "@/Components/Sliders/SliderHome";
import { ProductItem } from "@/Components/ProductItem";
import BrandSlider from "@/Components/Sliders/BrandSlider";

const categories = [
  'All Products',
  'Watches',
  'Speaker',
  'Laptop',
  'Charger',
  'Headset',
  'Handfree',
  'Charger',
  'Laptop'
];

const bgColors = [
  'bg-[#F08DA9]',
  'bg-[#FEE3B8]',
  'bg-[#BCE4E3]',
  'bg-[#B9B2DC]',
  'bg-[#A6DAE8]',
  'bg-[#EBC8D5]',
  'bg-[#A99B87]',
  'bg-[#CFCFC5]',
  'bg-[#7FFFD4]'
];

const products = [
  {id: 1,
   imgSrc: '/images/home/6.jpg',
   productName:'Sofa Chaise Sleeper',
   price: 90.00,
   currency: '$',
   ratingStarCount: 4
  },
  {id: 2,
    imgSrc: '/images/home/7.jpg' ,
    productName:'Darcy Sofa',
    price: 80.00,
    currency: '$',
    ratingStarCount: 5
   },
   {id: 3,
    imgSrc: '/images/home/8.jpg' ,
    productName:'Bladen Sofa',
    price: 60.00,
    currency: '$',
    ratingStarCount: 4
   },
   {id: 4,
    imgSrc: '/images/home/9.jpg' ,
    productName:'Ardenboro Sofa',
    price: 80.00,
    currency: '$',
    ratingStarCount: 3
   },
   {id: 5,
    imgSrc: '/images/home/10.jpg' ,
    productName:'Daystar Sofa',
    price: 99.00,
    currency: '$',
    ratingStarCount: 4
   },
   {id: 6,
    imgSrc: '/images/home/11.jpg' ,
    productName:'Trucker Accent Sofa',
    price: 66.00,
    currency: '$',
    ratingStarCount: 5
   },
   {id: 7,
    imgSrc: '/images/home/12.jpg' ,
    productName:'FTrivia Accent Chair',
    price: 90.00,
    currency: '$',
    ratingStarCount: 3
   },
   {id: 8,
    imgSrc: '/images/home/13.jpg' ,
    productName:'name13',
    price: 94.00,
    currency: '$',
    ratingStarCount: 4
   },
   {id: 9,
    imgSrc: '/images/home/14.jpg' ,
    productName:'name14',
    price: 93.00,
    currency: '$',
    ratingStarCount: 5
   },
   {id: 10,
    imgSrc: '/images/home/15.jpg' ,
    productName:'name15',
    price: 54.00,
    currency: '$',
    ratingStarCount: 3
   },
   {id: 11,
    imgSrc: '/images/home/7.jpg' ,
    productName:'name16',
    price: 44.00,
    currency: '$',
    ratingStarCount: 4
   },
   {id: 12,
    imgSrc: '/images/home/14.jpg' ,
    productName:'name14',
    price: 93.00,
    currency: '$',
    ratingStarCount: 5
   }, 
 
]
export default function Home() {
  return (
    <>
      <Layout>
       
        <div className="flex w-full h-[50vh] md:h-[75vh]  bg-[#FEF2E3] relative"  
        style={{
          backgroundImage:`url('/images/home/Background.png')`, 
          backgroundPosition:'center top', 
          backgroundRepeat:'no-repeat',
          backgroundSize: 'cover'
          }}>
           <div className="text-[#606B6E] w-full absolute top-[30%] md:top-[40%] md:left-[-5%] space-y-2 flex flex-col justify-end items-end md:items-end text-right">
            <p className="font-semibold text-sm md:text-base">Electronic Collection</p>
            <p className="text-4xl md:text-5xl font-semibold pt-1">Sri Lankan <span className="font-extrabold">Biggest&nbsp;</span></p>
            <p className="text-2xl md:text-4xl font-light">Electronic Collection</p>
            <p className="text-lg md:text-lg pt-2">Join Now</p>
          </div>
        </div>

        <div className="bg-white text-[#1C274C] text-center p-10">
          <p className=" text-lg">It Makes You Perfect</p>
          <p className=" text-5xl font-bold font-helvetica pt-3">ASSA PRODUCTS</p>
          <p className=" text-lg pt-3">Sri Lanka Biggest Electronic Collection</p>
        </div>

        <div className="flex flex-wrap bg-white text-[#1C274C] gap-4  justify-center mx-10 p-5 ">
      {categories.map((category, index) => (
        <div key={index} className={`${bgColors[index % bgColors.length]} flex w-auto h-auto p-2 text-center rounded`}>
          <p className="text-sm">{category}</p>
        </div>
      ))}
    </div>

        <div className="bg-white text-black py-20 ">
          <p className="text-center font-bold text-2xl text-[#16384E] pb-10">
          Popular Products
          </p>
          <SliderHome />
        </div>
        <div className="bg-white text-black p-20">
          <p className="text-start font-bold text-lg text-[#16384E] pb-2">
          Latest Products
          </p>
          <div className=" grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
            
              {products.slice(0, 4).map((product) => (
                <ProductItem 
                  key={product.id}
                  imgSrc={product.imgSrc}
                  productName={product.productName}
                  price={product.price}
                  currency={product.currency}
                  ratingStarCount={product.ratingStarCount}
                  />
              ))}
                 
          </div>
        </div>

        {/*
        <div className="flex flex-col lg:flex-row w-full p-[100px] bg-white">
          
          <ProductCard
            imgSrc="/images/productpage/lapbig.png"
            productName="DJI Phantom 2 Vision+"
            currency="$"
            price={599}
            ratingStarCount={4}
            ratingCount={243}
          />
          <ProductCard
            imgSrc="/images/productpage/lapbig.png"
            productName="DJI Phantom 2 Vision+"
            currency="$"
            price={599}
            ratingStarCount={5}
            ratingCount={243}
          />
          <ProductCard
            imgSrc="/images/productpage/lapbig.png"
            productName="DJI Phantom 2 Vision+"
            currency="$"
            price={599}
            ratingStarCount={3}
            ratingCount={243}
          />
          <ProductCard
            imgSrc="/images/productpage/lapbig.png"
            productName="DJI Phantom 2 Vision+"
            currency="$"
            price={599}
            ratingStarCount={2}
            ratingCount={243}
          />
        </div>
          */}
        

        <div >
          <img src="/images/home/jbl.png" alt="" width={'100%'} height={750} />
        </div>

        <div className="bg-white text-black p-20">
          <p className="text-start font-bold text-lg text-[#16384E]  pt-16 pb-2">
          All Products
          </p>
          <div className=" grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
            
              {products.slice(0, 12).map((product) => (
                <ProductItem 
                  key={product.id}
                  imgSrc={product.imgSrc}
                  productName={product.productName}
                  price={product.price}
                  currency={product.currency}
                  ratingStarCount={product.ratingStarCount}
                  />
              ))}
                 
          </div>
        </div>

        <div>
          <BrandSlider />
        </div>
        
      </Layout>
    </>
  );
}
