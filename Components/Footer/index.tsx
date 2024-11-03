import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer-top-area pt-70 pb-35 wrapper-padding-5">
        <div className="container-fluid">
          <div className="widget-wrapper">
            <div className="footer-widget mb-30 col-12 col-lg-5">
              <a href="#">
                <img
                  src="/assets/img/logo.png"
                  width="150"
                  height="80"
                  alt=""
                />
              </a>
              <div className="footer-about-2">
                <p style={{ maxWidth: "70%" }}>
                  Fort House is Sri Lanka’s leading website for premium smoking
                  accessories, offering top-quality products such as rolling
                  papers, lighters, and unique smoking tools. Known for its
                  unbeatable offers and promotions, Fort House provides a wide
                  range of items to meet every preference, delivering
                  exceptional value and variety to customers across the island.
                </p>
              </div>
            </div>
            <div className="footer-widget mb-30 col-12 col-lg-3 d-flex flex-column flex-lg-row">
              <div className="d-flex  flex-column col-12 col-lg-6">
                <h3 className="footer-widget-title-5">Shop</h3>
                <div className="footer-info-wrapper-3">
                  <div className="footer-address-furniture">
                    <div className="footer-info-content3 d-flex flex-column">
                      <a href="/product" className="mb-3">
                        All products
                      </a>
                      <a href="/product" className="mb-3">
                        Popular
                      </a>
                      <a href="/product" className="mb-3">
                        Categories
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column col-12 col-lg-6">
              <h3 className="footer-widget-title-5">Help</h3>
              <div className="footer-info-wrapper-3">
                <div className="footer-address-furniture">
                  <div className="footer-info-content3 d-flex flex-column">
                    <a href="/product" className="mb-3">
                      Shipping
                    </a>
                    <a href="/product" className="mb-3">
                      Refunding
                    </a>
                    <a href="/product" className="mb-3">
                      Terms & Conditions
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="footer-widget mb-30 col-12 col-lg-4 ps-lg-5">
              <h3 className="footer-widget-title-5">Contact Info</h3>
              <div className="footer-info-wrapper-3">
                <div className="footer-address-furniture">
                  <div className="footer-info-icon3">
                    <span>Address: </span>
                  </div>
                  <div className="footer-info-content3">
                    <p>
                      {" "}
                      Televisieweg 41 1322 AJ, Almere
                      <br />
                      The Netherlands
                    </p>
                  </div>
                </div>
                <div className="footer-address-furniture">
                  <div className="footer-info-icon3">
                    <span>Phone: </span>
                  </div>
                  <div className="footer-info-content3">
                    <p>+31615095711</p>
                  </div>
                </div>
                <div className="footer-address-furniture">
                  <div className="footer-info-icon3">
                    <span>E-mail: </span>
                  </div>
                  <div className="footer-info-content3">
                    <p>
                      <a href="mailto:  info@forthouse.com">
                        {" "}
                        info@forthouse.com
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom ptb-20 gray-bg-8">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="copyright-furniture">
                <p>
                  Copyright © 2024 <a href="/">Fort house</a>. All Right
                  Reserved - Developed By ORION UX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
