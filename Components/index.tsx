import React from 'react'
import Header from './NavBar'
import Footer from './Footer'

type LayoutProps = {
    children: React.ReactNode;
  };


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;