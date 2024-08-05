import React from 'react';
import Link from 'next/link';

const NavigationBar: React.FC = () => {
  const currencyOptions = ['USD', 'VND', 'EUR'];
  const languageOptions = ['English', 'Vietnamese', 'French'];
  const navItems = [
    {
      label: 'home',
      subItems: [
        { label: 'Home 1', href: 'home.html' },
        { label: 'Home 2', href: 'home2.html' },
        { label: 'Home 3', href: 'home3.html' },
      ],
    },
    {
      label: 'Store',
      subItems: [
        { label: 'Shop Left Sidebar', href: 'shop.html' },
        { label: 'Single Product', href: 'shop-detail.html' },
      ],
    },
    { label: 'About', href: 'about-us.html' },
    {
      label: 'Blog',
      subItems: [
        { label: 'Blog Left Sidebar', href: 'blog.html' },
        { label: 'Blog Detail', href: 'blog-detail.html' },
      ],
    },
    {
      label: 'Pages',
      subItems: [
        { label: 'Cart Page', href: '/cart' },
      ],
    },
    { label: 'Contact', href: '/contactUs' },
  ];

  return (
    <header id="header" className="position-relative">
      {/* headerHolderCol */}
      <div className="headerHolderCol pt-lg-4 pb-lg-5 py-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4">
              <a href="javascript:void(0);" className="tel d-flex align-items-end">
                <i className="icon-call mr-2"></i> Hotline: (602) 462 8889
              </a>
            </div>
            <div className="col-12 col-sm-4 text-center">
              <span className="txt d-block">Welcome To Botanical Store</span>
            </div>
            <div className="col-12 col-sm-4">
              {/* langListII */}
              <ul className="nav nav-tabs langListII justify-content-end border-bottom-0">
                <li className="dropdown">
                  <span>Currency: </span>
                  <a className="d-inline dropdown-toggle text-uppercase" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="true" aria-expanded="false">USD</a>
                  <div className="dropdown-menu text-uppercase pl-4 pr-4 border-0">
                    {currencyOptions.map((currency) => (
                      <a key={currency} className="dropdown-item" href="javascript:void(0);">{currency}</a>
                    ))}
                  </div>
                </li>
                <li className="dropdown m-0">
                  <span>Languages: </span>
                  <a className="d-inline dropdown-toggle text-uppercase" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="true" aria-expanded="false">EN</a>
                  <div className="dropdown-menu pl-4 pr-4">
                    {languageOptions.map((language) => (
                      <a key={language} className="dropdown-item" href="javascript:void(0);">{language}</a>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* headerHolder */}
      <div className="headerHolder container pt-lg-5 pb-lg-7 py-4">
        <div className="row">
          <div className="col-6 col-sm-2">
            {/* mainLogo */}
            <div className="logo">
              <Link href="home.html">
                <img src="images/logo.png" alt="Botanical" className="img-fluid" />
              </Link>
            </div>
          </div>
          <div className="col-6 col-sm-7 col-lg-8 static-block">
            {/* mainHolder */}
            <div className="mainHolder pt-lg-5 pt-3 justify-content-center">
              {/* pageNav2 */}
              <nav className="navbar navbar-expand-lg navbar-light p-0 pageNav2 position-static">
                <button type="button" className="navbar-toggle collapsed position-relative" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto text-uppercase d-inline-block">
                    {navItems.map((item) => (
                      <li key={item.label} className={`nav-item ${item.subItems ? 'dropdown' : ''}`}>
                        {item.subItems ? (
                          <>
                            <a className="dropdown-toggle d-block" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{item.label}</a>
                            <ul className="list-unstyled text-capitalize dropdown-menu mt-0 py-0">
                              {item.subItems.map((subItem) => (
                                <li key={subItem.label} className="d-block mx-0">
                                  <Link href={subItem.href}>{subItem.label}</Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link className="d-block" href={item.href!}>{item.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className="col-sm-3 col-lg-2">
            {/* wishListII */}
            <ul className="nav nav-tabs wishListII pt-5 justify-content-end border-bottom-0">
              <li className="nav-item ml-0">
                <a className="nav-link icon-search" href="javascript:void(0);"></a>
              </li>
              <li className="nav-item">
                <a className="nav-link position-relative icon-cart" href="javascript:void(0);">
                  <span className="num rounded d-block">2</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link icon-profile" href="javascript:void(0);"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
