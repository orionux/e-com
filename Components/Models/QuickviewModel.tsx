import React from 'react';
import { IoClose } from 'react-icons/io5';
import { MdOutlineStarBorder } from 'react-icons/md';
import { TfiHeart } from "react-icons/tfi";

import { Button, InputNumber, Select, Space } from 'antd';


interface QuickviewModelProps {
  isOpen: boolean;
  onClose: () => void;
}

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

const QuickviewModel: React.FC<QuickviewModelProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-3/4 max-w-6xl p-5 bg-white rounded-md shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-black"
        >
          <IoClose size={24} />
        </button>
        {/* Modal Content Here */}
        <div className='w-full flex'>
            <div className='w-[40%]'>
                <div className='h-[80%] '>
                    <img src='/images/home/gown.png' alt='gown' width={300} height={800} />
                </div>
                <div className='h-[20%] flex gap-1'>
                    <img src='/images/home/gownsmall.png' alt='gownsmall' width={100} height={200} />
                    <img src='/images/home/shirt.png' alt='shirt' width={100} height={200} />
                    <img src='/images/home/blouse.png' alt='blouse' width={100} height={200} />
                </div>
            </div>
            <div className='w-[60%]'>
                <p className='text-2xl text-[gray]	font-semibold pb-2'>Handcrafted Supper Mug</p>
                <p className='font-semibold text-black text-lg pb-1'>S90.00<del className='pl-3 text-[gray]'>$120.00</del></p>
                <div className='flex items-center pb-5'>
                    <MdOutlineStarBorder size={20} color='gray' />
                    <MdOutlineStarBorder size={20} color='gray'  />
                    <MdOutlineStarBorder size={20} color='gray'  />
                    <MdOutlineStarBorder size={20} color='gray'  />
                    <MdOutlineStarBorder size={20} color='gray'  />
                    <p className='pl-2 text-[gray] text-lg'>2 Ratings (s)</p>
                </div>
                <p className="pb-5 text-[#505254] text-lg">
                Lorem ipsum dolor sit amet, consectetur adip elit, sed do tempor incididun 
                ut labore et dolore magna aliqua. Ut enim ad mi , quis nostrud veniam exercitation .
                </p>
                <div className='flex flex-col'>
                
                    <p className='text-[gray] font-semibold text-lg pb-2'>Size*</p>
                    <Select
                    className='mb-2'
                    defaultValue="- Pleace Select -"
                    style={{ width: 150 }}
                    onChange={handleChange}
                    options={[
                        { value: '- Pleace Select -', label: '- Pleace Select -' },
                        { value: '900', label: '900' },
                        { value: '700', label: '700' },
                        
                    ]}
                    />
                    <p className='text-[gray] font-semibold text-lg pb-2 pt-2'>Color*</p>
                    <Select
                    className='mb-2'
                    defaultValue="- Pleace Select -"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                        { value: '- Pleace Select -', label: '- Pleace Select -' },
                        { value: 'Orange', label: 'Orange' },
                        { value: 'Pink', label: 'Pink' },
                    ]}
                    />   
                
                </div>
                <div className='flex pt-5 gap-5'>
                        <InputNumber width={400}/>
                        <Button type='primary'>
                            ADD TO CART
                        </Button>
                        <TfiHeart size={30} className=''/>
                    </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default QuickviewModel;
