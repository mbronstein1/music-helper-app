import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../themes/colorThemes';
import LandingPageWrapper from '../styles/LandingPageWrapper';
import CardWrapper from '../styles/CardWrapper';
import Form from '../styles/Form';
import Button from '../styles/Button';
import FormInputWrapper from '../styles/FormInputWrapper';
import FormInput from '../components/UI/FormInput';
import MoonLoader from 'react-spinners/MoonLoader';

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    institution: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ state: false, message: '' });
  const [successMessage, setSuccessMessage] = useState({ state: false, message: '' });

  const imageRef = useRef(null);

  const navigate = useNavigate();

  const inputChangeHandler = e => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const formSubmitHandler = e => {
    e.preventDefault();

    setError({ state: false, message: '' });
    setIsLoading(true);

    const data = new FormData();
    data.append('profilePic', imageRef.current.files[0]);

    const uploadImage = async () => {
      try {
        const response = await fetch('/api/user/image-upload', {
          mode: 'cors',
          method: 'POST',
          body: data,
        });

        if (!response.ok) throw new Error(response.statusText);

        const imageData = await response.json();

        return imageData.Location;
      } catch (err) {
        setError({ state: true, messsage: 'Something went wrong with the image upload. Please try again!' });
        console.error(err);
      }
    };

    const sendToDB = async () => {
      const imageUrl = await uploadImage();

      const body = JSON.stringify({
        ...userInfo,
        institution: userInfo.institution.trim() === '' ? 'N/A' : userInfo.institution,
        profilePic: imageUrl,
      });

      try {
        const response = await fetch('/api/user/signup/teacher', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body,
        });

        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();

        console.log('Form submitted! -> ', data);

        setSuccessMessage({ state: true, message: 'Successfully signed up!' });
      } catch (err) {
        setError({ state: true, message: 'Could not send form. Please try again!' });
        console.error(err);
      }

      setIsLoading(false);
    };

    sendToDB();
  };

  return (
    <>
      <LandingPageWrapper>
        <CardWrapper>
          <h2>Signup</h2>
          <Form onSubmit={formSubmitHandler}>
            <FormInputWrapper>
              <FormInput id='firstName' type='text' label='First Name' value={userInfo.firstName} onChange={inputChangeHandler} required />
              <FormInput id='lastName' type='text' label='Last Name' value={userInfo.lastName} onChange={inputChangeHandler} required />
            </FormInputWrapper>
            <FormInputWrapper>
              <FormInput id='email' type='email' label='Email' value={userInfo.email} onChange={inputChangeHandler} required />
              <FormInput
                id='password'
                type='password'
                label='Password'
                value={userInfo.password}
                onChange={inputChangeHandler}
                subText='* Must be at least 6 characters'
                required
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <FormInput id='institution' type='text' value={userInfo.institution} onChange={inputChangeHandler} label='Institution' />
              <FormInput id='profilePic' type='file' ref={imageRef} label='Profile Picture' accept='image/*' />
            </FormInputWrapper>
            <Button type='submit' disabled={isLoading}>
              {isLoading ? <MoonLoader size={20} color={theme.secondary} loading={isLoading} /> : 'Submit'}
            </Button>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error.message}</p>}
            {successMessage.state && <p style={{ color: 'green', textAlign: 'center' }}>{successMessage.message}</p>}
          </Form>
        </CardWrapper>
      </LandingPageWrapper>
    </>
  );
};

export default Signup;
