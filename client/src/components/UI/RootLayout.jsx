import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavBar from '../NavBar/MainNavBar';

const RootLayout = () => {
  return (
    <div>
      <MainNavBar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
