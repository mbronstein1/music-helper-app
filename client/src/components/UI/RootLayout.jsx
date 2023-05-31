import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavBar from '../NavBar/MainNavBar';
import BackgroundImage from '../../styles/BackgroundImage';
import img from '../../assets/images/music_set_2.jpg';

const RootLayout = () => {
  return (
    <>
      <MainNavBar />
      <BackgroundImage src={img} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
