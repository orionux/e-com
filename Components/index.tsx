import React from 'react'
import Foooter from './Foooter'
import NavigationBar from './NavigationBar';

type LayoutProps = {
    children: React.ReactNode;
  };


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <Foooter />
    </>
  );
};

export default Layout;