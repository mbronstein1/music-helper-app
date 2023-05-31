import React from 'react';
import LandingPageWrapper from '../styles/LandingPageWrapper';
import CardWrapper from '../styles/CardWrapper';
import Overlay from '../styles/Overlay';
import Form from '../styles/Form';
import Button from '../styles/Button';
import FormInputWrapper from '../styles/FormInputWrapper';
import FormInput from '../components/UI/FormInput';

const formInputInfo = [
  {
    id: 'firstName',
    type: 'text',
    label: 'First Name',
    required: true,
  },
  {
    id: 'lastName',
    type: 'text',
    label: 'Last Name',
    required: true,
  },
  {
    id: 'Email',
    type: 'email',
    label: 'Email',
    required: true,
  },
  {
    id: 'password',
    type: 'password',
    label: 'Password',
    required: true,
    subText: '* Must be at least 6 characters',
  },
  {
    id: 'institution',
    type: 'text',
    label: 'Institution',
    required: false,
  },
  {
    id: 'profilePic',
    type: 'file',
    label: 'Profile Pic',
    required: false,
  },
];

const Signup = () => {
  return (
    <>
      <LandingPageWrapper>
        <CardWrapper>
          <h2>Signup</h2>
          <Form>
            <FormInputWrapper>
              <FormInput id='firstName' type='text' label='First Name' required />
              <FormInput id='lastName' type='text' label='Last Name' required />
            </FormInputWrapper>
            <FormInputWrapper>
              <FormInput id='email' type='email' label='Email' required />
              <FormInput id='password' type='password' label='Password' subText='* Must be at least 6 characters' required />
            </FormInputWrapper>
            <FormInputWrapper>
              <FormInput id='institution' type='text' label='Institution' />
              <FormInput id='profilePic' type='file' label='Profile Picture' />
            </FormInputWrapper>
            <Button>Submit</Button>
          </Form>
        </CardWrapper>
      </LandingPageWrapper>
    </>
  );
};

export default Signup;
