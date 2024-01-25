import React from 'react';

import logoImg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A fresh burger " />
        <h1>React-Burger-House</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
