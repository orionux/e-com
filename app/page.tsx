import React from "react";
import Image from "next/image";
import { Button } from "@/Components/Buttons";
import { SliderOne } from "@/Components/Sliders";
import Layout from "@/Components";
import { ProductCard } from "@/Components/ProductCards";

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

export default function Home() {
  return (
    <>
      <Layout>
       
        <div className="flex w-full h-[75vh]  bg-[#FEF2E3] relative"  
        style={{
          backgroundImage:`url('/images/home/Background.png')`, 
          backgroundPosition:'center top', 
          backgroundRepeat:'no-repeat',
          
          }}>
          <div className="text-[#606B6E] w-full absolute top-[40%] left-[-5%] space-y-2 flex flex-col justify-end items-end">
            <p className="font-semibold">Electronic Collection</p>
            <p className="text-5xl font-semibold pt-1">Sri Lankan <span className="font-extrabold">Biggest&nbsp;</span><br /></p>
            <p className="text-4xl font-light">Electronic Collection</p>
            <p className="text-lg pt-2">Join Now</p>
          </div>
        </div>

        <div className="bg-white text-[#1C274C] text-center p-10">
          <p className=" text-lg">It Makes You Perfect</p>
          <p className=" text-5xl font-bold font-helvetica pt-3">ASSA PRODUCTS</p>
          <p className=" text-lg pt-3">Sri Lanka Biggest Electronic Collection</p>
        </div>

        <div className="flex bg-white text-[#1C274C] gap-4  justify-center mx-10 p-5 ">
      {categories.map((category, index) => (
        <div key={index} className={`${bgColors[index % bgColors.length]} w-32 p-2 text-center rounded`}>
          <p>{category}</p>
        </div>
      ))}
    </div>

        <div className="bg-white text-black p-20">
          <p className="text-center font-bold text-2xl text-[#16384E]">
          Popular Products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row w-full p-[100px] bg-white">
          <p className="text-center">
          Latest Products
          </p>
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

        <div className="">
          <img src="/images/home/jbl.png" alt="" />
        </div>

        <div className="bg-white text-black">
          <p className="">
          All Products
          </p>
        </div>
        
      </Layout>
    </>
  );
}
