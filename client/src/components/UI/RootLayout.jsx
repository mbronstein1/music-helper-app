import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavBar from '../NavBar/MainNavBar';

const RootLayout = () => {
  return (
    <>
      <MainNavBar />
      <Outlet />
    </>
  );
};

export default RootLayout;
