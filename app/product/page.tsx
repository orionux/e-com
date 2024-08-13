"use client";

import Layout from '@/Components'
import { ProductItem } from '@/Components/ProductItem';
import React, { useEffect, useRef } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { MdOutlineStarBorder } from 'react-icons/md';


const products = [
    {id: 1,
     imgSrc: '/images/productpage/lapbig.png',
     productName:'Sofa Chaise Sleeper',
     price: 90.00,
     currency: '$',
     ratingStarCount: 4
    },
    {id: 2,
      imgSrc: '/images/productpage/lapbig.png' ,
      productName:'Darcy Sofa',
      price: 80.00,
      currency: '$',
      ratingStarCount: 5
     },
     {id: 3,
      imgSrc: '/images/productpage/lapbig.png' ,
      productName:'Bladen Sofa',
      price: 60.00,
      currency: '$',
      ratingStarCount: 4
     },
     {id: 4,
      imgSrc: '/images/productpage/lapbig.png' ,
      productName:'Ardenboro Sofa',
      price: 80.00,
      currency: '$',
      ratingStarCount: 3
     },
     {id: 5,
      imgSrc: '/images/productpage/lapbig.png' ,
      productName:'Daystar Sofa',
      price: 99.00,
      currency: '$',
      ratingStarCount: 4
     },
     {id: 6,
      imgSrc: '/images/productpage/lapbig.png' ,
      productName:'Trucker Accent Sofa',
      price: 66.00,
      currency: '$',
      ratingStarCount: 5
     },
     {id: 7,
      imgSrc: '/images/productpage/lapbig.png' ,
      productName:'FTrivia Accent Chair',
      price: 90.00,
      currency: '$',
      ratingStarCount: 3
     },
     {id: 8,
      imgSrc: '/images/productpage/lapbig.png' ,
      productName:'name13',
      price: 94.00,
      currency: '$',
      ratingStarCount: 4
     },
     {id: 9,
      imgSrc: '/images/productpage/lapbig.png' ,
      productName:'name14',
      price: 93.00,
      currency: '$',
      ratingStarCount: 5
     },
     {id: 10,
      imgSrc: '/images/productpage/lapbig.png' ,
      productName:'name15',
      price: 54.00,
      currency: '$',
      ratingStarCount: 3
     },
     {id: 11,
      imgSrc: '/images/productpage/lapbig.png' ,
      productName:'name16',
      price: 44.00,
      currency: '$',
      ratingStarCount: 4
     },
     {id: 12,
      imgSrc: '/images/productpage/lapbig.png' ,
      productName:'name14',
      price: 93.00,
      currency: '$',
      ratingStarCount: 5
     }, 
   
  ]

const Product: React.FC = () => {

    const minPriceRef = useRef<HTMLInputElement>(null);
    const maxPriceRef = useRef<HTMLInputElement>(null);
    const minRangeRef = useRef<HTMLInputElement>(null);
    const maxRangeRef = useRef<HTMLInputElement>(null);
    const rangeRef = useRef<HTMLDivElement>(null);
    const priceGap = 1000;
  
    useEffect(() => {
      const handlePriceInput = (e: Event) => {
        if (!minPriceRef.current || !maxPriceRef.current || !minRangeRef.current || !maxRangeRef.current || !rangeRef.current) {
          return;
        }
  
        const minPrice = parseInt(minPriceRef.current.value);
        const maxPrice = parseInt(maxPriceRef.current.value);
  
        if (maxPrice - minPrice >= priceGap && maxPrice <= parseInt(maxRangeRef.current.max)) {
          if ((e.target as HTMLInputElement).className.includes('input-min')) {
            minRangeRef.current.value = minPrice.toString();
            rangeRef.current.style.left = (minPrice / parseInt(minRangeRef.current.max)) * 100 + '%';
          } else {
            maxRangeRef.current.value = maxPrice.toString();
            rangeRef.current.style.right = 100 - (maxPrice / parseInt(maxRangeRef.current.max)) * 100 + '%';
          }
        }
      };
  
      const handleRangeInput = (e: Event) => {
        if (!minPriceRef.current || !maxPriceRef.current || !minRangeRef.current || !maxRangeRef.current || !rangeRef.current) {
          return;
        }
  
        const minVal = parseInt(minRangeRef.current.value);
        const maxVal = parseInt(maxRangeRef.current.value);
  
        if (maxVal - minVal < priceGap) {
          if ((e.target as HTMLInputElement).className.includes('range-min')) {
            minRangeRef.current.value = (maxVal - priceGap).toString();
          } else {
            maxRangeRef.current.value = (minVal + priceGap).toString();
          }
        } else {
          minPriceRef.current.value = minVal.toString();
          maxPriceRef.current.value = maxVal.toString();
          rangeRef.current.style.left = (minVal / parseInt(minRangeRef.current.max)) * 100 + '%';
          rangeRef.current.style.right = 100 - (maxVal / parseInt(maxRangeRef.current.max)) * 100 + '%';
        }
      };
  
      minPriceRef.current?.addEventListener('input', handlePriceInput);
      maxPriceRef.current?.addEventListener('input', handlePriceInput);
      minRangeRef.current?.addEventListener('input', handleRangeInput);
      maxRangeRef.current?.addEventListener('input', handleRangeInput);
  
      return () => {
        minPriceRef.current?.removeEventListener('input', handlePriceInput);
        maxPriceRef.current?.removeEventListener('input', handlePriceInput);
        minRangeRef.current?.removeEventListener('input', handleRangeInput);
        maxRangeRef.current?.removeEventListener('input', handleRangeInput);
      };
    }, []);

    const currentPage = 1;
    const totalPages = 210; 
    
  return (
    <Layout >
      <div className='text-black w-full flex font-Poppins bg-[#F8F8F8]'>
        <div className='w-[25%] p-4 bg-white'>
          <p className='font-bold text-lg pb-2 text-[#16384E] mb-4'>Search Products</p>
          <div className="hidden lg:flex items-center mb-4">
            
            <input
              type="text"
              placeholder="Search Products..."
              className="outline-none w-full bg-[#f1f1f1] font-[500] text-sm p-2 none repeat scroll 0 0]"
            />
            <CiSearch size={25} className="mr-2 text-gray-600 bg-[#dee2e6] h-9 w-9 p-1" />
          </div>
          <p className='font-bold text-lg  text-[#16384E] mt-10 mb-8'>Filter by Price</p>
          
          <div className=" mb-10">
          <div className="price-input">
            <div className="w-1/2">
                <input type="number" ref={minPriceRef} className="input-min w-[100px]" placeholder="Min Price" />
            </div>
            <div className="w-1/2">
            <input type="number" ref={maxPriceRef} className="input-max w-[100px]" placeholder="Max Price" />
            </div>
          </div>
          <div className="slider mt-4 ">
            <div className="progress" ref={rangeRef}></div>
          </div>
          <div className="range-input mt-2 mb-14">
            <input type="range" ref={minRangeRef} className="range-min" min="0" max="10000" />
            <input type="range" ref={maxRangeRef} className="range-max" min="0" max="10000" />
          </div>
          </div>
            <div>
            <p className='font-bold text-lg  text-[#16384E] mb-5'>Categories</p>
            <div className='text-[#aaa] font-semibold pt-2 text-lg space-y-5 mb-10'>
                <div className='flex justify-between'>
                    <p>Accessories</p>
                    <p> 4</p>
                </div>
                <div className='flex justify-between'>
                    <p>Book </p>
                    <p> 9</p>
                </div>
                <div className='flex justify-between'>
                    <p>Clothing</p>
                    <p> 5</p>
                </div>
                <div className='flex justify-between'>
                    <p>Kids & Baby</p>
                    <p> 4</p>
                </div>  
            </div>
            </div>
            <div className='pt-2 mb-10'>
                <p className='font-bold text-lg pb-2 text-[#16384E] mb-4'>Color</p>
                <div className='flex space-x-2'>
                    <div className='bg-[black] rounded-full w-5 h-5'></div>
                    <div className='bg-[#ff01f0] rounded-full w-5 h-5'></div>
                    <div className='bg-[#3649ff] rounded-full w-5 h-5'></div>
                    <div className='bg-[#00c0ff] rounded-full w-5 h-5'></div>
                    <div className='bg-[#00ffae] rounded-full w-5 h-5'></div>
                    <div className='bg-[#8a00ff] rounded-full w-5 h-5'></div>
                </div>
            </div>
            <div className='pt-2 mb-8'>
                <p className='font-bold text-lg pb-2 text-[#16384E] mb-4'>Size</p>
                <div className='flex space-x-5 text-[#aaa] font-semibold'>
                    <div>XL</div>
                    <div>M</div>
                    <div>L</div>
                    <div>ML</div>
                    <div>LM</div>
                    
                </div>
            </div>
            <div className='pt-2'>
                <p className='font-bold text-lg pb-2 text-[#16384E] py-3'>Top Rated Products</p>
                <div>
                    <div className='flex my-5'>
                        <div className=''>
                        <img src='/images/productpage/watchsmall.png' alt=''  />
                        </div>
                        <div className='space-y-3 ms-4'>
                            <p className='text-[#16384E] font-semibold'>Flying Drone</p>
                            <div className='flex text-[#adb5bd]'>
                                <MdOutlineStarBorder size={20} />
                                <MdOutlineStarBorder size={20} />
                                <MdOutlineStarBorder size={20} />
                                <MdOutlineStarBorder size={20} />
                                <MdOutlineStarBorder size={20} />
                            </div>
                            <p className='text-[#aaa] font-bold'>$140.00</p>
                        </div>
                    </div>
                    <div className='flex my-5'>
                        <div>
                        <img src='/images/productpage/watchsmall.png' alt=''/>
                        </div>
                        <div className='space-y-3 ms-4'>
                            <p className='text-[#16384E] font-semibold'>Flying Drone</p>
                            <div className='flex text-[#adb5bd]'>
                                <MdOutlineStarBorder size={20}  />
                                <MdOutlineStarBorder size={20}  />
                                <MdOutlineStarBorder size={20}  />
                                <MdOutlineStarBorder size={20}  />
                                <MdOutlineStarBorder size={20}  />
                            </div>
                            <p className='text-[#aaa] font-bold'>$140.00</p>
                        </div>
                    </div>
                    <div className='flex my-5'>
                        <div>
                        <img src='/images/productpage/watchsmall.png' alt=''/>
                        </div>
                        <div className='space-y-3 ms-4'>
                            <p className='text-[#16384E] font-semibold'>Flying Drone</p>
                            <div className='flex text-[#adb5bd]'>
                                <MdOutlineStarBorder size={20}  />
                                <MdOutlineStarBorder size={20}  />
                                <MdOutlineStarBorder size={20}  />
                                <MdOutlineStarBorder size={20}  />
                                <MdOutlineStarBorder size={20}  />
                            </div>
                            <p className='text-[#aaa] font-bold'>$140.00</p>
                        </div>
                    </div>
                    <div  className='flex my-5'>
                        <div>
                        <img src='/images/productpage/watchsmall.png' alt=''/>
                        </div>
                        <div className='space-y-3 ms-4'>
                            <p className='text-[#16384E] font-semibold'>Flying Drone</p>
                            <div className='flex text-[#adb5bd]'>
                                <MdOutlineStarBorder size={20}  />
                                <MdOutlineStarBorder size={20}  />
                                <MdOutlineStarBorder size={20}  />
                                <MdOutlineStarBorder size={20}  />
                                <MdOutlineStarBorder size={20}  />
                            </div>
                            <p className='text-[#aaa] font-bold'>$140.00</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='w-[75%] p-4'>
          <p className='text-center text-2xl font-bold pb-10'>JBL Product Company</p>
            <div className='w-full flex  px-10 bg-white'>
                <div className='w-[30%]'>
                    <img src="/images/productpage/girl.png" alt="" width={300} height={300} />
                </div>
                <div className='w-[70%] flex flex-col items-start justify-center ps-10'>
                    <img src="/images/productpage/jbl.png" alt="" width={70} height={70} />
                    <p className='mt-5 text-[#7E8F9A]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. 
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-5">
                
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
            {/*
            <div className='flex  text-[#353535] py-10 px-4  my-5  bg-white justify-between'>
                <div className='flex'>
                    <div className='flex items-center'>
                        <img src="/images/productpage/shipping.png" alt="" />
                    </div>
                    <div className='ms-4'>
                        <p className='text-sm font-bold '>FREE SHIPPING</p>
                        <p className='text-xs'>Free shipping on all US Dollars</p>
                    </div>
                </div>
                <div className='flex  text-[#353535]'>
                    <div className='flex items-center'>
                        <img src="/images/productpage/support.png" alt="" />
                    </div>
                    <div className='ms-4'>
                        <p className='text-sm font-bold '>SUPPORT 24/7</p>
                        <p className='text-xs'>We support 24 hours a day</p>
                    </div>
                </div>
                <div className='flex text-[#353535]'>
                    <div className='flex items-center'>
                        <img src="/images/productpage/gift.png" alt="" />
                    </div>
                    <div className='ms-4'>
                        <p className='text-sm font-bold '>GIFT CARDS</p>
                        <p className='text-xs'>Give perfect gift</p>
                    </div>
                </div>
                <div className='flex text-[#353535]'>
                    <div className='flex items-center'>
                        <img src="/images/productpage/payment.png" alt="" />
                    </div>
                    <div className='ms-4'>
                        <p className='text-sm font-bold '>PAYMENT 100%</p>
                        <p className='text-xs'>Payment 100% secure</p>
                    </div>
                </div>
            </div>
            */}
            <div className="pagination-style">
                <ul>
                <li>
                    <a href="#">
                    <FaAngleLeft />
                    </a>
                </li>
                <li>
                    <a href="#">1</a>
                </li>
                <li>
                    <a href="#">2</a>
                </li>
                <li>
                    <a href="#">...</a>
                </li>
                <li>
                    <a href="#">19</a>
                </li>
                <li className="active">
                    <a href="#">
                    <FaAngleRight />
                    </a>
                </li>
                </ul>
            </div>
        </div>

    
    
      </div>
    </Layout>
  )
}

export default Product
