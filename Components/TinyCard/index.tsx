import React from 'react';
import Image from 'next/image';
import InputNumber from '../InputNumber';

interface Product {
  id: number;
  imageSrc: string;
  flavour: string;
  productName: string;
}

const TinyCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex items-center justify-center w-[30rem] px-4 py-5 border-0 rounded-lg shadow-xl bg-white gap-6 my-3">
    <div className='absolute top-0 right-0'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0.25C4.62391 0.25 0.25 4.62391 0.25 10C0.25 15.3761 4.62391 19.75 10 19.75C15.3761 19.75 19.75 15.3761 19.75 10C19.75 4.62391 15.3761 0.25 10 0.25ZM14.0608 13L13 14.0608L10 11.0608L7 14.0608L5.93922 13L8.93922 10L5.93922 7L7 5.93922L10 8.93922L13 5.93922L14.0608 7L11.0608 10L14.0608 13Z" fill="#21272A"/>
            </svg>
        </div>
      <div className="w-[10rem] flex align-center justify-center">
        <Image src={product.imageSrc} alt={product.productName} width={100} height={50} />
      </div>
      <div className="w-[20rem] flex flex-col align-start justify-center">
        <h4>{product.flavour}</h4>
        <h5>{product.productName}</h5>
      </div>
      <div className="w-[20rem] flex align-center justify-center">
        <InputNumber />
      </div>
    </div>
  );
};



export default TinyCard;
