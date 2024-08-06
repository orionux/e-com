import React from 'react'

const HomeOne = () => {
  return (
    <div>
      {/* introBlock */}
		  <section className="introBlock position-relative">
				<div className="slick-fade">
					<div>
						<div className="align w-100 d-flex align-items-center bgCover" style={{backgroundImage: `url('images/b-bg.jpg')`}}>
							{/* holder */}
							<div className="container position-relative holder pt-xl-10 pt-0">
								{/* py-12 pt-lg-30 pb-lg-25 */}
								<div className="row">
									<div className="col-12 col-xl-7">
										<div className="txtwrap pr-lg-10">
											<h1 className="fwEbold position-relative pb-lg-8 pb-4 mb-xl-7 mb-lg-6">Houseplant <span className="text-break d-block">The Perfect Choice.</span></h1>
											<p className="mb-xl-15 mb-lg-10">Lorem ipsum is simply dummy text of the printing and typesetting industry <br />has been the industry`s standard.</p>
											<a href="shop.html" className="btn btnTheme btnShop fwEbold text-white md-round py-md-3 px-md-4 py-2 px-3">Shop Now <i className="fas fa-arrow-right ml-2"></i></a>
										</div>
									</div>
									<div className="imgHolder">
										<img src="http://placehold.it/900x795" alt="image description" className="img-fluid w-100" />
									</div>
								</div>
							</div>
						</div>
					</div>
				  <div>
						<div className="align w-100 d-flex align-items-center bgCover" style={{backgroundImage: `url('images/b-bg2.jpg')`}}>
							{/* holder */}
							<div className="container position-relative holder pt-xl-10 pt-0">
								{/* py-12 pt-lg-30 pb-lg-25 */}
								<div className="row">
									<div className="col-12 col-xl-7">
										<div className="txtwrap pr-lg-10">
											<span className="title d-block text-uppercase fwEbold position-relative pl-2 mb-lg-5 mb-sm-3 mb-1">wellcome to botanical</span>
											<h2 className="fwEbold position-relative mb-xl-7 mb-lg-5">Plants Gonna Make  <span className="text-break d-block">People Happy.</span></h2>
											<p className="mb-xl-15 mb-lg-10">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
											<a href="shop.html" className="btn btnTheme btnShop fwEbold text-white md-round py-2 px-3 py-md-3 px-md-4">Shop Now <i className="fas fa-arrow-right ml-2"></i></a>
										</div>
									</div>
									<div className="imgHolder">
										<img src="http://placehold.it/800x700" alt="image description" className="img-fluid w-100" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="align w-100 d-flex align-items-center bgCover" style={{backgroundImage: `url('images/b-bg3.jpg')`}}>
							{/* holder */}
							<div className="container position-relative holder pt-xl-10 pt-0">
								{/* py-12 pt-lg-30 pb-lg-25 */}
									<div className="col-12 col-xl-7">
										<div className="txtwrap pr-lg-10">
											<span className="title d-block text-uppercase fwEbold position-relative pl-2 mb-lg-5 mb-sm-3 mb-1">wellcome to botanical</span>
											<h2 className="fwEbold position-relative mb-xl-7 mb-lg-5">Plants for healthy</h2>
											<p className="mb-xl-15 mb-lg-10">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
											<a href="shop.html" className="btn btnTheme btnShop fwEbold text-white md-round py-2 px-3 py-md-3 px-md-4">Shop Now <i className="fas fa-arrow-right ml-2"></i></a>
										</div>
									</div>
									<div className="imgHolder">
										<img src="http://placehold.it/820x815" alt="image description" className="img-fluid w-100" />
									</div>
							</div>
							
						</div>
					</div>
				</div>
				<div className="slickNavigatorsWrap">
					<a href="#" className="slick-prev"><i className="icon-leftarrow"></i></a>
					<a href="#" className="slick-next"><i className="icon-rightarrow"></i></a>
				</div>
			</section>
			{/* chooseUs-sec */}
			<section className="chooseUs-sec container pt-xl-22 pt-lg-20 pt-md-16 pt-10 pb-xl-12 pb-md-7 pb-2">
				<div className="row">
					<div className="col-12 col-lg-6 mb-lg-0 mb-4">
						<img src="http://placehold.it/570x590" alt="image description" className="img-fluid" />
					</div>
					<div className="col-12 col-lg-6 pr-4">
						<h2 className="headingII fwEbold playfair position-relative mb-6 pb-5">Why choose us ?</h2>
						<p className="mb-xl-14 mb-lg-10">Lorem ipsum is simply dummy text of the printing and typesetting industry, lorem ipsum has been the industry`s standard dummy text ever since the 1500s  when an unknown printer took a galley ... <a href="#" className="btnMore"><i>Learn More</i></a></p>
						{/* chooseList */}
						<ul className="list-unstyled chooseList">
							<li className="d-flex justify-content-start mb-xl-7 mb-lg-5 mb-3">
								<span className="icon icon-plant"></span>
								<div className="alignLeft d-flex justify-content-start flex-wrap">
									<h3 className="headingIII fwEbold mb-2">Hand Planted</h3>
									<p>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
								</div>
							</li>
							<li className="d-flex justify-content-start mb-xl-6 mb-lg-5 mb-4">
								<span className="icon icon-ic-plant"></span>
								<div className="alignLeft d-flex justify-content-start flex-wrap">
									<h3 className="headingIII fwEbold mb-2">Natural Sunlight</h3>
									<p>It is a long established fact that a reader will be distracted by the reable content of a page.</p>
								</div>
							</li>
							<li className="d-flex justify-content-start">
								<span className="icon icon-desert"></span>
								<div className="alignLeft d-flex justify-content-start flex-wrap">
									<h3 className="headingIII fwEbold mb-2">Clean Air</h3>
									<p>There are many variations of passages of lorem ipsum available, but the majority have suffered.</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
			{/* featureSec */}
			<section className="featureSec container-fluid overflow-hidden pt-xl-12 pt-lg-10 pt-md-80 pt-5 pb-xl-10 pb-lg-4 pb-md-2 px-xl-14 px-lg-7">
				{/* mainHeader */}
				<header className="col-12 mainHeader mb-7 text-center">
					<h1 className="headingIV playfair fwEblod mb-4">Featured Product</h1>
					<span className="headerBorder d-block mb-md-5 mb-3"><img src="images/hbdr.png" alt="Header Border" className="img-fluid img-bdr" /></span>
					<p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
				</header>
				<div className="col-12 p-0 overflow-hidden d-flex flex-wrap">
					{/* featureCol */}
					<div className="featureCol px-3 mb-6">
						<div className="border">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className="text-center py-xl-5 py-sm-4 py-2 px-xl-2 px-1">
								<span className="title d-block mb-2"><a href="shop-detail.html">Sit voluptatem</a></span>
								<span className="price d-block fwEbold">68.00 $</span>
							</div>
						</div>
					</div>
					{/* featureCol */}
					<div className="featureCol px-3 position-relative mb-6">
						<div className="border">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className="text-center py-xl-5 py-sm-4 py-2 px-xl-2 px-1">
								<span className="title d-block mb-2"><a href="shop-detail.html">Neque Porro Quisquamest</a></span>
								<span className="price d-block fwEbold">60.50 $</span>
								<span className="hotOffer fwEbold text-uppercase text-white position-absolute d-block">HOT</span>
							</div>
						</div>
					</div>
					{/* featureCol */}
					<div className="featureCol px-3 mb-6">
						<div className="border">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className="text-center py-xl-5 py-sm-4 py-2 px-xl-2 px-1">
								<span className="title d-block mb-2"><a href="shop-detail.html">Pellentesque aliquet</a></span>
								<span className="price d-block fwEbold">68.00 $</span>
							</div>
						</div>
					</div>
					{/* featureCol */}
					<div className="featureCol px-3 position-relative mb-6">
						<div className="border">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className="text-center py-xl-5 py-sm-4 py-2 px-xl-2 px-1">
								<span className="title d-block mb-2"><a href="shop-detail.html">Aspetur Autodit Autfugit</a></span>
								<span className="price d-block fwEbold"><del>80.00 $</del>66.00 $</span>
								<span className="hotOffer green fwEbold text-uppercase text-white position-absolute d-block">Sale</span>
							</div>
						</div>
					</div>
					{/* featureCol */}
					<div className="featureCol px-3 mb-6">
						<div className="border">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className="text-center py-xl-5 py-sm-4 py-2 px-xl-2 px-1">
								<span className="title d-block mb-2"><a href="shop-detail.html">Sit voluptatem</a></span>
								<span className="price d-block fwEbold">70.50 $</span>
							</div>
						</div>
					</div>
					{/* featureCol */}
					<div className="featureCol position-relative px-3 mb-6">
						<div className="border">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className="text-center py-xl-5 py-sm-4 py-2 px-xl-2 px-1">
								<span className="title d-block mb-2"><a href="shop-detail.html">Sint Incidunt Utlabore</a></span>
								<span className="price d-block fwEbold"><del>75.00 $</del>60.50 $</span>
								<span className="hotOffer fwEbold text-uppercase text-white position-absolute d-block">HOT</span>
								<span className="hotOffer green fwEbold text-uppercase text-white position-absolute d-block ml-8">Sale</span>
							</div>
						</div>
					</div>
					{/* featureCol */}
					<div className="featureCol px-3 mb-6">
						<div className="border">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className="text-center py-xl-5 py-sm-4 py-2 px-xl-2 px-1">
								<span className="title d-block mb-2"><a href="shop-detail.html">Aliquam Quaerat Voluptem</a></span>
								<span className="price d-block fwEbold">58.00 $</span>
							</div>
						</div>
					</div>
					{/* featureCol */}
					<div className="featureCol position-relative px-3 mb-6">
						<div className="border">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className="text-center py-xl-5 py-sm-4 py-2 px-xl-2 px-1">
								<span className="title d-block mb-2"><a href="shop-detail.html">Neque Porro Quisquam</a></span>
								<span className="price d-block fwEbold"><del>60.00 $</del>48.00 $</span>
								<span className="hotOffer green fwEbold text-uppercase text-white position-absolute d-block">Sale</span>
							</div>
						</div>
					</div>
					{/* featureCol */}
					<div className="featureCol px-3 mb-6">
						<div className="border">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className="text-center py-xl-5 py-sm-4 py-2 px-xl-2 px-1">
								<span className="title d-block mb-2"><a href="shop-detail.html">Sit voluptatem</a></span>
								<span className="price d-block fwEbold">65.00 $</span>
							</div>
						</div>
					</div>
					{/* featureCol */}
					<div className="featureCol position-relative px-3 mb-6">
						<div className="border">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className="text-center py-xl-5 py-sm-4 py-2 px-xl-2 px-1">
								<span className="title d-block mb-2"><a href="shop-detail.html">Aliquam Quaerat Voluptatem</a></span>
								<span className="price d-block fwEbold">80.00 $</span>
								<span className="hotOffer fwEbold text-uppercase text-white position-absolute d-block">Hot</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* contactListBlock */}
			<div className="contactListBlock container overflow-hidden pt-xl-8 pt-lg-10 pt-md-8 pt-4 pb-xl-12 pb-lg-10 pb-md-4 pb-1">
				<div className="row">
					<div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
						{/* contactListColumn */}
						<div className="contactListColumn border overflow-hidden py-xl-5 py-md-3 py-2 px-xl-6 px-md-3 px-3 d-flex">
							<span className="icon icon-van"></span>
							<div className="alignLeft pl-2">
								<strong className="headingV fwEbold d-block mb-1">Free shipping order</strong>
								<p className="m-0">On orders over  $100</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
						{/* contactListColumn */}
						<div className="contactListColumn border overflow-hidden py-xl-5 py-md-3 py-2 px-xl-6 px-md-3 px-3 d-flex">
							<span className="icon icon-gift"></span>
							<div className="alignLeft pl-2">
								<strong className="headingV fwEbold d-block mb-1">Special gift card</strong>
								<p className="m-0">The perfect gift idea</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
						{/* contactListColumn */}
						<div className="contactListColumn border overflow-hidden py-xl-5 py-md-3 py-2 px-xl-4 px-md-2 px-3 d-flex">
							<span className="icon icon-recycle"></span>
							<div className="alignLeft pl-2">
								<strong className="headingV fwEbold d-block mb-1">Return &amp; exchange</strong>
								<p className="m-0">Free return within 3 days</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
						{/* contactListColumn */}
						<div className="contactListColumn border overflow-hidden py-xl-5 py-md-3 py-2 px-xl-6 px-md-3 px-3 d-flex">
							<span className="icon icon-call"></span>
							<div className="alignLeft pl-2">
								<strong className="headingV fwEbold d-block mb-1">Support 24 / 7</strong>
								<p className="m-0">Customer support</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* productOfferSec */}
			<div className="productOfferSec container overflow-hidden py-xl-12 py-lg-10 py-md-8 py-5">
				<div className="row">
					<div className="col-12 col-sm-6 mb-sm-0 mb-2">
						<a href="shop.html" className="w-100"><img src="http://placehold.it/570x350" alt="image description" className="img-fluid" /></a>
					</div>
					<div className="col-12 col-sm-6">
						<a href="shop.html" className="w-100"><img src="http://placehold.it/570x350" alt="image description" className="img-fluid" /></a>
					</div>
				</div>
			</div>
			{/* dealSecHolder */}
			<section className="dealSecHolder container-fluid overflow-hidden py-xl-12 py-lg-10 py-md-8 py-5">
				{/* mainHeader */}
				<header className="col-12 mainHeader mb-7 text-center">
					<h1 className="headingIV playfair fwEblod mb-5">Daily Deal</h1>
					<span className="headerBorder d-block mb-md-5 mb-3"><img src="images/hbdr.png" alt="Header Border" className="img-fluid img-bdr" /></span>
					<p className="mb-6">There are many variations of passages of lorem ipsum available.</p>
					<div id="defaultCountdown" className="comming-timer"></div>
				</header>
				{/* dealSlider */}
				<div className="dealSlider w-100 px-lg-10 px-md-5">
					<div>
						{/* featureCol */}
						<div className="featureCol position-relative w-100 px-3 mb-sm-8 mb-6">
							<div className="border">
								<div className="imgHolder position-relative w-100 overflow-hidden">
									<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
									<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
										<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
									</ul>
								</div>
								<div className="text-center py-5 px-2">
									<span className="title d-block mb-2"><a href="shop-detail.html">Sint Incidunt Utlabore</a></span>
									<span className="price d-block fwEbold"><del>75.00 $</del>60.50 $</span>
									<span className="hotOffer fwEbold text-uppercase text-white position-absolute d-block">HOT</span>
									<span className="hotOffer green fwEbold text-uppercase text-white position-absolute d-block">Sale</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						{/* featureCol */}
						<div className="featureCol px-3 w-100 mb-sm-8 mb-6">
							<div className="border">
								<div className="imgHolder position-relative w-100 overflow-hidden">
									<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
									<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
										<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
									</ul>
								</div>
								<div className="text-center py-5 px-2">
									<span className="title d-block mb-2"><a href="shop-detail.html">Aliquam Quaerat Voluptem</a></span>
									<span className="price d-block fwEbold">58.00 $</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						{/* featureCol */}
						<div className="featureCol position-relative w-100 px-3 mb-sm-8 mb-6">
							<div className="border">
								<div className="imgHolder position-relative w-100 overflow-hidden">
									<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
									<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
										<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
									</ul>
								</div>
								<div className="text-center py-5 px-2">
									<span className="title d-block mb-2"><a href="shop-detail.html">Neque Porro Quisquam</a></span>
									<span className="price d-block fwEbold"><del>60.00 $</del>48.00 $</span>
									<span className="hotOffer green fwEbold text-uppercase text-white position-absolute d-block">Sale</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						{/* featureCol */}
						<div className="featureCol px-3 w-100 mb-sm-8 mb-6">
							<div className="border">
								<div className="imgHolder position-relative w-100 overflow-hidden">
									<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
									<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
										<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
									</ul>
								</div>
								<div className="text-center py-5 px-2">
									<span className="title d-block mb-2"><a href="shop-detail.html">Sit voluptatem</a></span>
									<span className="price d-block fwEbold">65.00 $</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						{/* featureCol */}
						<div className="featureCol position-relative w-100 px-3 mb-sm-8 mb-6">
							<div className="border">
								<div className="imgHolder position-relative w-100 overflow-hidden">
									<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
									<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
										<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
									</ul>
								</div>
								<div className="text-center py-5 px-2">
									<span className="title d-block mb-2"><a href="shop-detail.html">Aliquam Quaerat Voluptatem</a></span>
									<span className="price d-block fwEbold">80.00 $</span>
									<span className="hotOffer fwEbold text-uppercase text-white position-absolute d-block">HOT</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						{/* featureCol */}
						<div className="featureCol px-3 w-100 mb-sm-8 mb-6">
							<div className="border">
								<div className="imgHolder position-relative w-100 overflow-hidden">
									<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
									<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
										<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
									</ul>
								</div>
								<div className="text-center py-5 px-2">
									<span className="title d-block mb-2"><a href="shop-detail.html">Sit voluptatem</a></span>
									<span className="price d-block fwEbold">65.00 $</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						{/* featureCol */}
						<div className="featureCol w-100 px-3 mb-sm-8 mb-6">
							<div className="border">
								<div className="imgHolder position-relative w-100 overflow-hidden">
									<img src="http://placehold.it/320x355" alt="image description" className="img-fluid w-100" />
									<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-heart d-block"></a></li>
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-cart d-block"></a></li>
										<li className="mr-2 overflow-hidden"><a href="#" className="icon-eye d-block"></a></li>
										<li className="overflow-hidden"><a href="#" className="icon-arrow d-block"></a></li>
									</ul>
								</div>
								<div className="text-center py-5 px-2">
									<span className="title d-block mb-2"><a href="shop-detail.html">Sit voluptatem</a></span>
									<span className="price d-block fwEbold">65.00 $</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* partnerSec */}
			<div className="partnerSec container overflow-hidden pt-xl-12 pb-xl-23 pt-lg-10 pt-md-8 pt-5 pb-lg-20 pb-md-16 pb-10">
				<div className="row">
					<div className="col-12">
						{/* partnerSlider */}
						<div className="partnerSlider d-flex flex-wrap">
							<div>
								<div className="logoColumn d-flex align-items-center justify-content-center">
									<a href="#"><img src="http://placehold.it/105x59" alt="Partner Logo" className="img-fluid" /></a>
								</div>
							</div>
							<div>
								<div className="logoColumn d-flex align-items-center justify-content-center">
									<a href="#"><img src="http://placehold.it/105x59" alt="Partner Logo" className="img-fluid" /></a>
								</div>
							</div>
							<div>
								<div className="logoColumn d-flex align-items-center justify-content-center">
									<a href="#"><img src="http://placehold.it/105x59" alt="Partner Logo" className="img-fluid" /></a>
								</div>
							</div>
							<div>
								<div className="logoColumn d-flex align-items-center justify-content-center">
									<a href="#"><img src="http://placehold.it/105x59" alt="Partner Logo" className="img-fluid" /></a>
								</div>
							</div>
							<div>
								<div className="logoColumn d-flex align-items-center justify-content-center">
									<a href="#"><img src="http://placehold.it/105x59" alt="Partner Logo" className="img-fluid" /></a>
								</div>
							</div>
							<div>
								<div className="logoColumn d-flex align-items-center justify-content-center">
									<a href="#"><img src="http://placehold.it/105x59" alt="Partner Logo" className="img-fluid" /></a>
								</div>
							</div>
							<div>
								<div className="logoColumn d-flex align-items-center justify-content-center">
									<a href="#"><img src="http://placehold.it/105x59" alt="Partner Logo" className="img-fluid" /></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid px-xl-20 px-lg-14">
				{/* subscribeSecBlock */}
				<section className="subscribeSecBlock bgCover col-12 pt-xl-24 pb-xl-12 pt-lg-20 pt-md-16 pt-10 pb-md-8 pb-5" style={{backgroundImage: `url('http://placehold.it/1720x465')`}}>
					<header className="col-12 mainHeader mb-sm-9 mb-6 text-center">
						<h1 className="headingIV playfair fwEblod mb-4">Subscribe Our Newsletter</h1>
						<span className="headerBorder d-block mb-md-5 mb-3"><img src="images/hbdr.png" alt="Header Border" className="img-fluid img-bdr" /></span>
						<p className="mb-sm-6 mb-3">Enter Your email address to join our mailing list and keep yourself update</p>
					</header>
					<form className="emailForm1 mx-auto overflow-hidden d-flex flex-wrap">
						<input type="email" className="form-control px-4 border-0" placeholder="Enter your mail..." />
						<button type="submit" className="btn btnTheme btnShop fwEbold text-white py-3 px-4">Shop Now <i className="fas fa-arrow-right ml-2"></i></button>
					</form>
				</section>
			</div>
    </div>
  )
}

export default HomeOne
