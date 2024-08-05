import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const contactInfo = [
    { icon: 'icon-place', text: 'Address: London Oxford Street, 012 United Kingdom.' },
    { icon: 'icon-phone', text: 'Phone : (+032) 3456 7890', link: 'tel:+03234567890' },
    { icon: 'icon-email', text: 'Email: Botanicalstore@gmail.com', link: 'mailto:Botanicalstore@gmail.com' },
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', link: 'javascript:void(0);' },
    { icon: 'fab fa-twitter', link: 'javascript:void(0);' },
    { icon: 'fab fa-pinterest', link: 'javascript:void(0);' },
    { icon: 'fab fa-google-plus-g', link: 'javascript:void(0);' },
  ];

  const informationLinks = [
    { label: 'New Products', link: 'javascript:void(0);' },
    { label: 'Top Sellers', link: 'javascript:void(0);' },
    { label: 'Our Blog', link: 'javascript:void(0);' },
    { label: 'About Our Shop', link: 'javascript:void(0);' },
    { label: 'Privacy policy', link: 'javascript:void(0);' },
  ];

  const accountLinks = [
    { label: 'My account', link: 'javascript:void(0);' },
    { label: 'Discount', link: 'javascript:void(0);' },
    { label: 'Orders history', link: 'javascript:void(0);' },
    { label: 'Personal information', link: 'javascript:void(0);' },
  ];

  const productLinks = [
    { label: 'Delivery', link: 'javascript:void(0);' },
    { label: 'Legal notice', link: 'javascript:void(0);' },
    { label: 'Prices drop', link: 'javascript:void(0);' },
    { label: 'New products', link: 'javascript:void(0);' },
    { label: 'Best sales', link: 'javascript:void(0);' },
  ];

  return (
    <>
      {/* footerHolder */}
      <aside className="footerHolder overflow-hidden bg-lightGray pt-xl-23 pb-xl-8 pt-lg-10 pb-lg-8 pt-md-12 pb-md-8 pt-10">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4 mb-lg-0 mb-4">
              <h3 className="headingVI fwEbold text-uppercase mb-7">Contact Us</h3>
              <ul className="list-unstyled footerContactList mb-3">
                {contactInfo.map((info, index) => (
                  <li key={index} className={`mb-3 d-flex flex-nowrap ${index === 0 ? 'pr-xl-20 pr-0' : ''}`}>
                    <span className={`icon ${info.icon} mr-3`}></span>
                    {info.link ? (
                      <a href={info.link}>{info.text}</a>
                    ) : (
                      <address className="fwEbold m-0">{info.text}</address>
                    )}
                  </li>
                ))}
              </ul>
              <ul className="list-unstyled followSocailNetwork d-flex flex-nowrap">
                <li className="fwEbold mr-xl-11 mr-md-8 mr-3">Follow us:</li>
                {socialLinks.map((social, index) => (
                  <li key={index} className={`mr-xl-6 mr-md-5 mr-2`}>
                    <a href={social.link} className={social.icon}></a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 pl-xl-14 mb-lg-0 mb-4">
              <h3 className="headingVI fwEbold text-uppercase mb-6">Information</h3>
              <ul className="list-unstyled footerNavList">
                {informationLinks.map((link, index) => (
                  <li key={index} className="mb-2">
                    <Link href={link.link}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 pl-xl-12 mb-lg-0 mb-4">
              <h3 className="headingVI fwEbold text-uppercase mb-7">My Account</h3>
              <ul className="list-unstyled footerNavList">
                {accountLinks.map((link, index) => (
                  <li key={index} className="mb-2">
                    <Link href={link.link}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-2 pl-xl-18 mb-lg-0 mb-4">
              <h3 className="headingVI fwEbold text-uppercase mb-5">PRODUCTS</h3>
              <ul className="list-unstyled footerNavList">
                {productLinks.map((link, index) => (
                  <li key={index} className="mb-2">
                    <Link href={link.link}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>
      {/* footer */}
      <footer id="footer" className="overflow-hidden bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 copyRightHolder v-II text-center pt-md-3 pb-md-4 py-2">
              <p className="mb-0">
                Coppyright 2019 by <Link href="javascript:void(0);">Botanical Store</Link> - All right reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
