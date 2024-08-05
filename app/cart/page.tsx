import Layout from '@/Components'
import React from 'react'

function Cart() {
  return (
    <>
    <Layout>
    <div>
    {/*} introBannerHolder */}
			<section className="introBannerHolder d-flex w-100 bgCover" style={{backgroundImage: `url('http://placehold.it/1920x300')`}}>
				<div className="container">
					<div className="row">
						<div className="col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center">
							<h1 className="headingIV fwEbold playfair mb-4">My Cart</h1>
							<ul className="list-unstyled breadCrumbs d-flex justify-content-center">
								<li className="mr-sm-2 mr-1"><a href="home.html">Home</a></li>
								<li className="mr-sm-2 mr-1">/</li>
								<li className="mr-sm-2 mr-1"><a href="shop.html">Shop</a></li>
								<li className="mr-sm-2 mr-1">/</li>
								<li className="active">My Cart</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			{/* cartHolder */}
			<div className="cartHolder container pt-xl-21 pb-xl-24 py-lg-20 py-md-16 py-10">
				<div className="row">
					{/*} table-responsive */}
					<div className="col-12 table-responsive mb-xl-22 mb-lg-20 mb-md-16 mb-10">
						{/*} cartTable */}
						<table className="table cartTable">
							<thead>
								<tr>
									<th scope="col" className="text-uppercase fwEbold border-top-0">product</th>
									<th scope="col" className="text-uppercase fwEbold border-top-0">price</th>
									<th scope="col" className="text-uppercase fwEbold border-top-0">quantity</th>
									<th scope="col" className="text-uppercase fwEbold border-top-0">total</th>
								</tr>
							</thead>
							<tbody>
								<tr className="align-items-center">
									<td className="d-flex align-items-center border-top-0 border-bottom px-0 py-6">
										<div className="imgHolder">
											<img src="http://placehold.it/70x80" alt="image description" className="img-fluid" />
										</div>
										<span className="title pl-2"><a href="shop-detail.html">Pellentesque aliquet</a></span>
									</td>
									<td className="fwEbold border-top-0 border-bottom px-0 py-6">180.00 $</td>
									<td className="border-top-0 border-bottom px-0 py-6"><input type="number" placeholder="1" /></td>
									<td className="fwEbold border-top-0 border-bottom px-0 py-6">180.00 $ <a href="javascript:void(0);" className="fas fa-times float-right"></a></td>
								</tr>
								<tr className="align-items-center">
									<td className="d-flex align-items-center border-top-0 border-bottom px-0 py-6">
										<div className="imgHolder">
											<img src="http://placehold.it/70x80" alt="image description" className="img-fluid" />
										</div>
										<span className="title pl-2"><a href="shop-detail.html">Neque Porro Quisquam</a></span>
									</td>
									<td className="fwEbold border-top-0 border-bottom px-0 py-6">180.00 $</td>
									<td className="border-top-0 border-bottom px-0 py-6"><input type="number" placeholder="1" /></td>
									<td className="fwEbold border-top-0 border-bottom px-0 py-6">180.00 $ <a href="javascript:void(0);" className="fas fa-times float-right"></a></td>
								</tr>
								<tr className="align-items-center">
									<td className="d-flex align-items-center border-top-0 border-bottom px-0 py-6">
										<div className="imgHolder">
											<img src="http://placehold.it/70x80" alt="image description" className="img-fluid" />
										</div>
										<span className="title pl-2"><a href="shop-detail.html">Aliquam Quaerat Voluptem</a></span>
									</td>
									<td className="fwEbold border-top-0 border-bottom px-0 py-6">180.00 $</td>
									<td className="border-top-0 border-bottom px-0 py-6"><input type="number" placeholder="1" /></td>
									<td className="fwEbold border-top-0 border-bottom px-0 py-6">180.00 $ <a href="javascript:void(0);" className="fas fa-times float-right"></a></td>
								</tr>
								<tr className="align-items-center">
									<td className="d-flex align-items-center border-top-0 border-bottom px-0 py-6">
										<div className="imgHolder">
											<img src="http://placehold.it/70x80" alt="image description" className="img-fluid" />
										</div>
										<span className="title pl-2"><a href="shop-detail.html">Pellentesque aliquet</a></span>
									</td>
									<td className="fwEbold border-top-0 border-bottom px-0 py-6">180.00 $</td>
									<td className="border-top-0 border-bottom px-0 py-6"><input type="number" placeholder="1" /></td>
									<td className="fwEbold border-top-0 border-bottom px-0 py-6">180.00 $ <a href="javascript:void(0);" className="fas fa-times float-right"></a></td>
								</tr>
								<tr className="align-items-center">
									<td className="d-flex align-items-center border-top-0 border-bottom px-0 py-6">
										<div className="imgHolder">
											<img src="http://placehold.it/70x80" alt="image description" className="img-fluid" />
										</div>
										<span className="title pl-2"><a href="shop-detail.html">Sint Incidunt Utlabore</a></span>
									</td>
									<td className="fwEbold border-top-0 border-bottom px-0 py-6">180.00 $</td>
									<td className="border-top-0 border-bottom px-0 py-6"><input type="number" placeholder="1" /></td>
									<td className="fwEbold border-top-0 border-bottom px-0 py-6">180.00 $ <a href="javascript:void(0);" className="fas fa-times float-right"></a></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<form action="javascript:void(0);" className="cartForm mb-5">
							<div className="form-group mb-0">
								<label htmlFor="note" className="fwEbold text-uppercase d-block mb-1">add note</label>
								<textarea id="note" className="form-control"></textarea>
							</div>
						</form>
					</div>
					<div className="col-12 col-md-6">
						<form action="javascript:void(0);" className="couponForm mb-md-0 mb-5">
							<fieldset>
								<div className="mt-holder d-inline-block align-bottom mr-lg-5 mr-0 mb-lg-0 mb-2">
									<label htmlFor="code" className="fwEbold text-uppercase d-block mb-1">promo code</label>
									<input type="text" id="code" className="form-control" />
								</div>
								<button type="submit" className="bg-success btn btnTheme btnCart fwEbold text-center text-white md-round py-3 px-4 py-md-3 px-md-4">Apply</button>
							</fieldset>
						</form>
					</div>
					<div className="col-12 col-md-6">
						<div className="d-flex justify-content-between">
							<strong className="txt fwEbold text-uppercase mb-1">subtotal</strong>
							<strong className="price fwEbold text-uppercase mb-1">900.00 $</strong>
						</div>
						<a href="javascript:void(0);" className="bg-success btn btnTheme w-100 fwEbold text-center text-white md-round py-3 px-4 py-md-3 px-md-4">Proceed to checkout</a>
					</div>
				</div>
			</div>
			<div className="container mb-lg-24 mb-md-16 mb-10">
				{/* subscribeSecBlock */}
				<section className="subscribeSecBlock bgCover col-12 pt-lg-24 pb-lg-12 pt-md-16 pb-md-8 py-10" style={{backgroundImage: `url('http://placehold.it/1170x465')`}}>
					<header className="col-12 mainHeader mb-9 text-center">
						<h1 className="headingIV playfair fwEblod mb-4">Subscribe Our Newsletter</h1>
						<span className="headerBorder d-block mb-5"><img src="/images/hbdr.png" alt="Header Border" className="img-fluid img-bdr" /></span>
						<p className="mb-6">Enter Your email address to join our mailing list and keep yourself update</p>
					</header>
					<form className="emailForm1 mx-auto overflow-hidden d-flex flex-wrap">
						<input type="email" className="form-control px-4 border-0" placeholder="Enter your mail..." />
						<button type="submit" className="btn btnTheme btnShop bg-success fwEbold text-white py-3 px-4 py-md-3 px-md-4">Shop Now <i className="fas fa-arrow-right ml-2"></i></button>
					</form>
				</section>
			</div>
    </div>
    </Layout>
    </>
  )
}

export default Cart
