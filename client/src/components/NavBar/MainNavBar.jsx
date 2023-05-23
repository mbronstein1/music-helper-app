import React from 'react';
import NavbarWrapper from '../../styles/NavbarWrapper';
import NavItems from './NavItems';
import NavListWrapper from '../../styles/NavListWrapper';
import Button from '../../styles/Button';

const items = ['ABOUT', 'LOG IN'];

const MainNavBar = () => {
  return (
    <NavbarWrapper>
      <h1>LessonSync</h1>
      <div>
        <NavListWrapper>
          {items.map((item, i) => (
            <NavItems key={`${item}: ${i}`} item={item} />
          ))}
          <Button type='button'>SIGN UP</Button>
        </NavListWrapper>
      </div>
    </NavbarWrapper>
  );
};

export default MainNavBar;
