import React from 'react';
import { Link } from 'react-router-dom';

const NavItems = ({ item }) => {
  return (
    <li>
      <Link to={`/${item.replace(' ', '').toLowerCase()}`}>{item}</Link>
    </li>
  );
};

export default NavItems;
