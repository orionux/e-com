"use client";

import Image from "next/image";
import styles from "./page.module.css";

import Layout from "@/Components";

import Script from "next/script";
import Head from "next/head";
import Link from "next/link";
import FavoriteIcon from "@/public/assets/SVG/FavoriteIcon";
import OrderIcon from "@/public/assets/SVG/OrderIcon";
import ProductIcon from "@/public/assets/SVG/ProductIcon";
import FavIcon from "@/public/assets/SVG/FavIcon";
import { useState } from "react";

type IconType = 'order' | 'product' | 'fav';

export default function Home() {
    const productsGrid = [
        { id: 1, name: "MacBook Pro 0", image: "/images/productpage/lapbig.png", price: "$90.00", category: "Laptop", path: "/product/1", badge: "sell" },
        { id: 2, name: "MacBook Pro 1", image: "/images/productpage/lapbig.png", price: "$90.00", category: "Laptop", path: "/product/2" },
        { id: 3, name: "MacBook Pro 2", image: "/images/productpage/lapbig.png", price: "$90.00", category: "Laptop", path: "/product/3", badge: "sell" },
        { id: 4, name: "MacBook Pro 3", image: "/images/productpage/lapbig.png", price: "$90.00", category: "Laptop", path: "/product/4" },
        { id: 5, name: "MacBook Pro 4", image: "/images/productpage/lapbig.png", price: "$90.00", category: "Laptop", path: "/product/5", badge: "sell" },
        { id: 6, name: "MacBook Pro 5", image: "/images/productpage/lapbig.png", price: "$90.00", category: "Watches", path: "/product/6", badge: "sell" },
        { id: 7, name: "MacBook Pro 6", image: "/images/productpage/lapbig.png", price: "$90.00", category: "Watches", path: "/product/7", badge: "sell" },
        { id: 8, name: "MacBook Pro 7", image: "/images/productpage/lapbig.png", price: "$90.00", category: "Watches", path: "/product/8", badge: "sell" },
        { id: 9, name: "MacBook Pro 8", image: "/images/productpage/lapbig.png", price: "$90.00", category: "Watches", path: "/product/9", badge: "sell" },
        { id: 10, name: "MacBook Pro 9", image: "/images/productpage/lapbig.png", price: "$90.00", category: "charger", path: "/product/5", badge: "sell" },
        { id: 11, name: "MacBook Pro 10", image: "/images/productpage/lapbig.png", price: "$90.00", category: "headset", path: "/product/6", badge: "sell" },
        { id: 12, name: "MacBook Pro 11", image: "/images/productpage/lapbig.png", price: "$90.00", category: "headset", path: "/product/7", badge: "sell" },
        { id: 13, name: "MacBook Pro 12", image: "/images/productpage/lapbig.png", price: "$90.00", category: "Handfree", path: "/product/8", badge: "sell" },
        { id: 14, name: "MacBook Pro 13", image: "/images/productpage/lapbig.png", price: "$90.00", category: "Handfree", path: "/product/9", badge: "sell" }
    ];

    const categories = [
        {
            id: 1,
            name: "All Products",
            color: '#F08DA9',
            link: '/'
        },
        {
            id: 2,
            name: "Watches",
            color: '#FEE3B8',
            link: '/'
        },
        {
            id: 3,
            name: "Speaker",
            color: '#BCE4E3',
            link: '/'
        },
        {
            id: 4,
            name: "Laptop",
            color: '#B9B2DC',
            link: '/'
        },
        {
            id: 5,
            name: "Charger ",
            color: '#A6DAE8',
            link: '/'
        },
        {
            id: 6,
            name: "Headset",
            color: '#EBC8D5',
            link: '/'
        },
        {
            id: 7,
            name: "Handfree",
            color: '#A99B87',
            link: '/'
        },
        {
            id: 8,
            name: "Laptop",
            color: '#CFCFC5',
            link: '/'
        },
        {
            id: 9,
            name: "Charger ",
            color: '#B7C1E9',
            link: '/'
        }];

       
        const [activeIcon, setActiveIcon] = useState<IconType | null>(null);

        const handleIconClick = (icon: IconType) => {
          setActiveIcon(icon);
        };
          

    return (
        <>
            <Layout>
                <div>
                    {/* hero slider */}
                    {/*
                    <div className="slider-area">
                        <div className="brand-logo-area-2 wrapper-padding ptb-80">
                            <div className="container-fluid position-relative">
                                <div
                                    className="d-flex w-100 d-flex justify-content-center"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        zIndex: 999,
                                        marginTop: "-30px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src="assets/img/Slider-images/curve-top.webp"
                                        alt=""
                                        className="img-fluid"
                                        style={{ height: "100px", width: "100vw" }}
                                    ></img>
                                </div>
                                <div className="brand-logo-active2 owl-carousel curved-slider">
                                    <div className="single-brand">
                                        <img
                                            src="assets/img/Slider-images/01.jpg"
                                            alt=""
                                            className="img-fluid"
                                        ></img>
                                    </div>
                                    <div className="single-brand">
                                        <img
                                            src="assets/img/Slider-images/02.jpg"
                                            alt=""
                                            className="img-fluid"
                                        ></img>
                                    </div>
                                    <div className="single-brand">
                                        <img
                                            src="assets/img/Slider-images/03.jpg"
                                            alt=""
                                            className="img-fluid"
                                        ></img>
                                    </div>
                                    <div className="single-brand">
                                        <img
                                            src="assets/img/Slider-images/04.jpg"
                                            alt=""
                                            className="img-fluid"
                                        ></img>
                                    </div>
                                    <div className="single-brand">
                                        <img
                                            src="assets/img/Slider-images/05.jpg"
                                            alt=""
                                            className="img-fluid"
                                        ></img>
                                    </div>
                                </div>
                                <div
                                    className="d-flex w-100 d-flex justify-content-center"
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        zIndex: 999,
                                        marginBottom: "-50px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src="assets/img/Slider-images/curve-bottom.webp"
                                        alt=""
                                        className="img-fluid"
                                        style={{ height: "100px", width: "100vw" }}
                                    ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}
                     
                     <div>
                     <div className={`${styles.heroBg}`}>
                        <div className={`${styles.heroBarSection}`}>
                            <div className={styles.heroBar}>
                                <div
                                    className={`${styles.orderIcon} ${activeIcon === 'order' ? styles.active : ''}`}
                                    onClick={() => handleIconClick('order')} 
                                >
                                    <a href="#">
                                    <OrderIcon height={20} width={20} stroke={activeIcon === 'order' ? "#A67425" : "#fff"} />
                                    </a>
                                </div>
                                <div
                                    className={`${styles.productIcon} ${activeIcon === 'product' ? styles.active : ''}`}
                                    onClick={() => handleIconClick('product')} 
                                >
                                    <a href="#">
                                    <ProductIcon width={20} height={20} stroke={activeIcon === 'product' ? "#A67425" : "#fff"} />
                                    </a>
                                </div>
                                <div
                                    className={`${styles.favIcon} ${activeIcon === 'fav' ? styles.active : ''}`}
                                    onClick={() => handleIconClick('fav')}
                                >
                                    <a href="#">
                                    <FavIcon width={20} height={20} fill={activeIcon === 'fav' ? "#A67425" : "#fff"} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div 
                            className=""
                            style={{
                                color:'#606B6E',
                                width:'100%',
                                position:'absolute',
                                top:'30%',
                                left:'-10%',
                                gap:'5',
                                display:'flex',
                                flexDirection:'column',
                                justifyContent:'flex-end',
                                alignItems:'flex-end',
                                textAlign:'end'

                            }}
                            >
                            <p 
                            className={`${styles.textE}`}>
                                Electronic Collection
                            </p>
                            <p className={`${styles.textSri}`}
                            >Sri Lankan &nbsp;
                            <span className={`${styles.textB}`}
                            >Biggest</span></p>
                            <p 
                                className={`${styles.textElec}`}
                            >Electronic Collection</p>
                            <p className={`${styles.textJ}`}
                            >Join Now</p>
                        </div>
                     </div>
                        
                    </div>

                    <div className="popular-product-area wrapper-padding-3 pt-115 pb-115">
                        <div className="container-fluid">
                            <div className="section-title-6 text-center mb-72">
                                <p>
                                    It makes you Perfect
                                </p>
                                <h2 className="mb-0">ASSA PRODUCTS</h2>
                                <p>
                                    Sri Lanka Biggest Electronic Collection
                                </p>
                            </div>


                            <div className="product-tab-list text-center mb-65 nav" role="tablist">
                                {categories.map((category) => (
                                    <a
                                        key={category.id}
                                        href={category.link}
                                        role="tab"
                                        style={{ backgroundColor: category.color, padding: '10px 20px', borderRadius: '6px', margin: '8px' }}
                                    >
                                        <h4 className="" style={{ textTransform: 'none', color: '#1C274C', fontWeight: 600 }}>
                                            {category.name}
                                        </h4>
                                    </a>
                                ))}
                            </div>


                            <div className="section-title-6 text-center mb-50">
                                <h2>Popular Products</h2>
                                {/* <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry`s
                                    standard dummy text
                                </p> */}
                            </div>

                            <div className="product-style">
                                <div className="popular-product-active owl-carousel">
                                    {productsGrid.map((product) => (
                                        <div key={product.id} className="product-wrapper">
                                            <div className="product-img">
                                                <Link href={`/product/${product.id}`}>
                                                    <img src={product.image} alt={product.name} style={{ backgroundColor: '#F8F8F8' }} className="mb-3" />
                                                </Link>
                                                <div className="product-action">
                                                    <Link
                                                        className="animate-left"
                                                        title="Wishlist"
                                                        href="/favouriteProducts"
                                                    >
                                                        <i className="pe-7s-like"></i>
                                                    </Link>
                                                    <Link
                                                        className="animate-top"
                                                        title="Add To Cart"
                                                        href="/cart"
                                                    >
                                                        <i className="pe-7s-cart"></i>
                                                    </Link>
                                                    <Link
                                                        className="animate-right"
                                                        title="Quick View"
                                                        href={`/product/${product.id}`}
                                                    >
                                                        <i className="pe-7s-look"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="funiture-product-content text-center">
                                                <h4>
                                                    <Link href={`/product/${product.id}`}>
                                                        {product.name}
                                                    </Link>
                                                </h4>
                                                <span>{product.price}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="popular-product-area wrapper-padding-3 pt-115 pb-115">
                        <div className="container-fluid">
                            <div className="section-title-6 text-start mb-50">
                                <h2>Latest Products</h2>
                            </div>

                            <div className="product-style">
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                                    {productsGrid.slice(0, 4).map((product) => (
                                        <div key={product.id} className="product-wrapper">
                                            <div className="product-img">
                                                <Link href={`/product/${product.id}`} >
                                                    <img src={product.image} alt={product.name} style={{ backgroundColor: '#F8F8F8' }} className="mb-3" />
                                                </Link>
                                                <div className="product-action">
                                                    <Link className="animate-left" title="Wishlist" href="/favouriteProducts">
                                                        <i className="pe-7s-like"></i>
                                                    </Link>
                                                    <Link className="animate-top" title="Add To Cart" href="/cart">
                                                        <i className="pe-7s-cart"></i>
                                                    </Link>
                                                    <Link className="animate-right" title="Quick View" href={`/product/${product.id}`}>
                                                        <i className="pe-7s-look"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="furniture-product-content text-center">
                                                <h4>
                                                    <Link href={`/product/${product.id}`}>
                                                        {product.name}
                                                    </Link>
                                                </h4>
                                                <span>{product.price}</span>
                                                <div className="product-rating-5">
                                                    <i className="pe-7s-star black"></i>
                                                    <i className="pe-7s-star black"></i>
                                                    <i className="pe-7s-star"></i>
                                                    <i className="pe-7s-star"></i>
                                                    <i className="pe-7s-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" pt-70 pb-70">
                        <div className="container ms-0 ps-0">
                            <div className="row">
                                <div className="ms-0">
                                    <div className="pl-0">
                                        <img src="/images/home/banner.png" alt="" style={{ backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="product-style-area pt-120">
                        <div className="coustom-container-fluid px-lg-5">
                            <div className="section-title-7 text-start">
                                <h2>All Products</h2>
                                {/* <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry`s
                                    standard dummy text
                                </p> */}
                            </div>


                            {/* <div className="product-tab-list text-center mb-65 nav" role="tablist">
                                <a className="active" href="#all" data-bs-toggle="tab" role="tab">
                                    <h4>All Products </h4>
                                </a>
                                <a href="#Watches" data-bs-toggle="tab" role="tab">
                                    <h4>Watches</h4>
                                </a>
                                <a href="#Speaker" data-bs-toggle="tab" role="tab">
                                    <h4>Laptop </h4>
                                </a>
                                <a href="#Laptop" data-bs-toggle="tab" role="tab">
                                    <h4>Laptop</h4>
                                </a>
                                <a href="#charger " data-bs-toggle="tab" role="tab">
                                    <h4>Charger </h4>
                                </a>
                                <a href="#headset" data-bs-toggle="tab" role="tab">
                                    <h4>Headset</h4>
                                </a>
                            </div> */}

                            <div className="tab-content">
                                {["all", "Watches", "Speaker", "Laptop", "charger", "headset"].map((category) => (
                                    <div
                                        key={category}
                                        className={`tab-pane fade ${category === "all" ? "show active" : ""}`}
                                        id={category}
                                        role="tabpanel"
                                    >
                                        <div className="coustom-row-5">
                                            {productsGrid
                                                .filter((product) =>
                                                    category === "all" ? true : product.category === category
                                                )
                                                .map((product) => (
                                                    <div
                                                        key={product.id}
                                                        className="custom-col-three-5 custom-col-style-5 mb-65"
                                                    >
                                                        <div className="product-wrapper">
                                                            <div className="product-img">
                                                                <Link href={product.path}>
                                                                    <img src={product.image} alt={product.name} />
                                                                </Link>
                                                                <div className="product-action">
                                                                    <a
                                                                        className="animate-left"
                                                                        title="Wishlist"
                                                                        href="/favouriteProducts"
                                                                    >
                                                                        <i className="pe-7s-like"></i>
                                                                    </a>
                                                                    <a
                                                                        className="animate-top"
                                                                        title="Add To Cart"
                                                                        href="/cart"
                                                                    >
                                                                        <i className="pe-7s-cart"></i>
                                                                    </a>
                                                                    <a
                                                                        className="animate-right"
                                                                        title="Quick View"
                                                                        //data-bs-toggle="modal"
                                                                        //data-bs-target="#exampleModal"
                                                                        href={`${product.path}`}
                                                                    >
                                                                        <i className="pe-7s-look"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="funiture-product-content text-center">
                                                                <h4>
                                                                    <Link href={product.path}>
                                                                        {product.name}
                                                                    </Link>
                                                                </h4>
                                                                <span>{product.price}</span>
                                                                <div className="product-rating-5">
                                                                    <i className="pe-7s-star black"></i>
                                                                    <i className="pe-7s-star black"></i>
                                                                    <i className="pe-7s-star"></i>
                                                                    <i className="pe-7s-star"></i>
                                                                    <i className="pe-7s-star"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                ))}
                            </div>


                            {/* <div className="view-all-product text-center">
                                <a href="shop.html">View All Product</a>
                            </div> */}
                        </div>
                    </div>

                    <div className="brand-logo-area-2 wrapper-padding ptb-80">
                        <div className="container-fluid">
                            <div className="brand-logo-active-new owl-carousel">
                                <div className="single-brand">
                                    <img src="assets/img/brand-logo/7.png" alt=""></img>
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/brand-logo/8.png" alt=""></img>
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/brand-logo/9.png" alt=""></img>
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/brand-logo/10.png" alt=""></img>
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/brand-logo/11.png" alt=""></img>
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/brand-logo/12.png" alt=""></img>
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/brand-logo/13.png" alt=""></img>
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/brand-logo/7.png" alt=""></img>
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/brand-logo/8.png" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* modal */}
                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        role="dialog"
                        aria-hidden="true"
                    >
                        <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <span className="pe-7s-close" aria-hidden="true"></span>
                        </button>
                        <div className="modal-dialog modal-quickview-width" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="qwick-view-left">
                                        <div className="quick-view-learg-img">
                                            <div className="quick-view-tab-content tab-content">
                                                <div
                                                    className="tab-pane active show fade"
                                                    id="modal1"
                                                    role="tabpanel"
                                                >
                                                    <img src="/assets/img/quick-view/l1.jpg" alt="" />
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="modal2"
                                                    role="tabpanel"
                                                >
                                                    <img src="/assets/img/quick-view/l2.jpg" alt="" />
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="modal3"
                                                    role="tabpanel"
                                                >
                                                    <img src="/assets/img/quick-view/l3.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="quick-view-list nav" role="tablist">
                                            <a
                                                className="active"
                                                href="#modal1"
                                                data-bs-toggle="tab"
                                                role="tab"
                                            >
                                                <img src="/assets/img/quick-view/s1.jpg" alt="" />
                                            </a>
                                            <a href="#modal2" data-bs-toggle="tab" role="tab">
                                                <img src="/assets/img/quick-view/s2.jpg" alt="" />
                                            </a>
                                            <a href="#modal3" data-bs-toggle="tab" role="tab">
                                                <img src="/assets/img/quick-view/s3.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="qwick-view-right">
                                        <div className="qwick-view-content">
                                            <h3>Handcrafted Supper Mug</h3>
                                            <div className="price">
                                                <span className="new">$90.00</span>
                                                <span className="old">$120.00 </span>
                                            </div>
                                            <div className="rating-number">
                                                <div className="quick-view-rating">
                                                    <i className="pe-7s-star"></i>
                                                    <i className="pe-7s-star"></i>
                                                    <i className="pe-7s-star"></i>
                                                    <i className="pe-7s-star"></i>
                                                    <i className="pe-7s-star"></i>
                                                </div>
                                                <div className="quick-view-number">
                                                    <span>2 Ratting (S)</span>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adip elit, sed
                                                do tempor incididun ut labore et dolore magna aliqua. Ut
                                                enim ad mi , quis nostrud veniam exercitation .
                                            </p>
                                            <div className="quick-view-select">
                                                <div className="select-option-part">
                                                    <label>Size*</label>
                                                    <select className="select">
                                                        <option value="">- Please Select -</option>
                                                        <option value="">900</option>
                                                        <option value="">700</option>
                                                    </select>
                                                </div>
                                                <div className="select-option-part">
                                                    <label>Color*</label>
                                                    <select className="select">
                                                        <option value="">- Please Select -</option>
                                                        <option value="">orange</option>
                                                        <option value="">pink</option>
                                                        <option value="">yellow</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="quickview-plus-minus">
                                                <div className="cart-plus-minus">
                                                    <input
                                                        type="text"
                                                        value="02"
                                                        name="qtybutton"
                                                        className="cart-plus-minus-box"
                                                    />
                                                </div>
                                                <div className="quickview-btn-cart">
                                                    <a className="btn-hover-black" href="#">
                                                        add to cart
                                                    </a>
                                                </div>
                                                <div className="quickview-btn-wishlist">
                                                    <a className="btn-hover" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* modal */}
                    <div
                        className="modal fade"
                        id="exampleCompare"
                        tabIndex={-1}
                        role="dialog"
                        aria-hidden="true"
                    >
                        <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <span className="pe-7s-close" aria-hidden="true"></span>
                        </button>
                        <div className="modal-dialog modal-compare-width" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <form action="#">
                                        <div className="table-content compare-style table-responsive">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>
                                                            <a href="#">
                                                                Remove <span>x</span>
                                                            </a>
                                                            <img src="/assets/img/cart/4.jpg" alt="" />
                                                            <p>Blush Sequin Top </p>
                                                            <span>$75.99</span>
                                                            <a className="compare-btn" href="#">
                                                                Add to cart
                                                            </a>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="compare-title">
                                                            <h4>Description </h4>
                                                        </td>
                                                        <td className="compare-dec compare-common">
                                                            <p>
                                                                Lorem Ipsum is simply dummy text of the printing
                                                                and typesetting industry. Lorem Ipsum has beenin
                                                                the stand ard dummy text ever since the 1500s,
                                                                when an unknown printer took a galley
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="compare-title">
                                                            <h4>Sku </h4>
                                                        </td>
                                                        <td className="product-none compare-common">
                                                            <p>-</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="compare-title">
                                                            <h4>Availability </h4>
                                                        </td>
                                                        <td className="compare-stock compare-common">
                                                            <p>In stock</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="compare-title">
                                                            <h4>Weight </h4>
                                                        </td>
                                                        <td className="compare-none compare-common">
                                                            <p>-</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="compare-title">
                                                            <h4>Dimensions </h4>
                                                        </td>
                                                        <td className="compare-stock compare-common">
                                                            <p>N/A</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="compare-title">
                                                            <h4>brand </h4>
                                                        </td>
                                                        <td className="compare-brand compare-common">
                                                            <p>HasTech</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="compare-title">
                                                            <h4>color </h4>
                                                        </td>
                                                        <td className="compare-color compare-common">
                                                            <p>
                                                                Grey, Light Yellow, Green, Blue, Purple, Black{" "}
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="compare-title">
                                                            <h4>size </h4>
                                                        </td>
                                                        <td className="compare-size compare-common">
                                                            <p>XS, S, M, L, XL, XXL </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="compare-title"></td>
                                                        <td className="compare-price compare-common">
                                                            <p>$75.99 </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </div>
            </Layout>
        </>
    );
}
