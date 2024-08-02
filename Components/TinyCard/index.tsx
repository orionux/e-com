import React from 'react';
import Image from 'next/image';
import InputNumber from '../InputNumber';

//react icons
import { IoIosCloseCircle } from "react-icons/io";

interface Product {
  id: number;
  imageSrc: string;
  flavour: string;
  productName: string;
}

const TinyCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex items-center justify-center w-[100%] px-4 py-5 border-0 rounded-lg shadow-xl bg-white gap-6 my-3 relative ">
      <div className='absolute top-[-10px] right-[-10px] '>
       <IoIosCloseCircle size={30} className='cursor-pointer'/>
        </div>
      <div className="w-[8rem] md:w-[10rem] flex align-center justify-center">
        <Image src={product.imageSrc} alt={product.productName} width={100} height={50} />
      </div>
      <div className="w-[10rem] md:w-[20rem] flex flex-col align-start justify-center">
        <h4>{product.flavour}</h4>
        <h5>{product.productName}</h5>
      </div>
      <div className="w-[10rem] md:w-[20rem] flex align-center justify-center">
        <InputNumber />
      </div>
    </div>
  );
};



export default TinyCard;
