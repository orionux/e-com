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
        <div className="flex w-full h-[75vh] p-[100px] bg-[#FEF2E3]">
        <ProductCard productName="DJI Phantom 2 Vision+" currency="$" price={599} ratingStarCount={4} ratingCount={243} />
        </div>
      </Layout>
    </>
  );
}
