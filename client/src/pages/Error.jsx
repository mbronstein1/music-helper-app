import React from 'react';
import MainNavBar from '../components/NavBar/MainNavBar';
import Button from '../styles/Button';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainNavBar />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100svh', justifyContent: 'center', alignItems: 'center', gap: '5rem' }}>
        <p>An error has occurred</p>
        <Button onClick={() => navigate('..')}>&#8592; Go Back</Button>
      </div>
    </>
  );
};

export default Error;
