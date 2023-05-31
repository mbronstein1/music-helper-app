import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingPageWrapper from '../styles/LandingPageWrapper';
import Overlay from '../styles/Overlay';
import Button from '../styles/Button';
import LandingPageButtonContainer from '../styles/LandingPageButtonContainer';
import CardWrapper from '../styles/CardWrapper';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Overlay />
      <LandingPageWrapper>
        <CardWrapper fontSize='2rem'>
          <h2>Welcome to LessonSync!</h2>
          <h3>
            <em>Empowering Teachers and Students to Simplify, Schedule, and Sync Their Musical Journeys</em>
          </h3>
        </CardWrapper>
        <CardWrapper margin='auto'>
          <LandingPageButtonContainer>
            <Button $primary onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button $primary onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
          </LandingPageButtonContainer>
        </CardWrapper>
      </LandingPageWrapper>
    </>
  );
};

export default LandingPage;
