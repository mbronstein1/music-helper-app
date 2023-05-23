import React from 'react';
import Navbar from '../../styles/Navbar';
import NavItems from './NavItems';
import NavListItems from '../../styles/NavListItems';

const items = ['ABOUT', 'LOG IN'];

const MainNavBar = () => {
  return (
    <Navbar>
      <h1>Logo</h1>
      <div>
        <NavListItems>
          {items.map((item, i) => (
            <NavItems key={`${item}: ${i}`} item={item} />
          ))}
          <button type='button'>SIGN UP</button>
        </NavListItems>
      </div>
    </Navbar>
  );
};

export default MainNavBar;
