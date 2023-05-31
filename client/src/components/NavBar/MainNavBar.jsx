import React from 'react';
import NavbarWrapper from '../../styles/NavbarWrapper';
import NavItems from './NavItems';
import NavListWrapper from '../../styles/NavListWrapper';
import Button from '../../styles/Button';
import { Link, useNavigate } from 'react-router-dom';

const items = ['LEARN MORE', 'LOG IN'];

const MainNavBar = () => {
  const navigate = useNavigate();

  return (
    <NavbarWrapper>
      <Link to='/'>
        <h1>LessonSync</h1>
      </Link>
      <div>
        <NavListWrapper>
          {items.map((item, i) => (
            <NavItems key={`${item}: ${i}`} item={item} />
          ))}
          <Button type='button' onClick={() => navigate('/signup')}>
            SIGN UP
          </Button>
        </NavListWrapper>
      </div>
    </NavbarWrapper>
  );
};

export default MainNavBar;
