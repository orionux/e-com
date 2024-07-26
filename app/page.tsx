import React from "react";
import Image from "next/image";
import { Button } from "@/Components/Buttons";
import { SliderOne } from "@/Components/Sliders";
import Layout from "@/Components";
import { ProductCard } from "@/Components/ProductCards";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex w-full h-[75vh] p-[100px] bg-[#FEF2E3]"></div>
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
      </Layout>
    </>
  );
}
