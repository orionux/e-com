import React from 'react'
import Footer from './Footer'
import NaviBar from './NaviBar';

type LayoutProps = {
    children: React.ReactNode;
  };


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NaviBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;