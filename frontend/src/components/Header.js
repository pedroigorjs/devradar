import React from 'react';
import logo from '../assets/svg/logo.svg';
import { Container } from './header/styles';

export default function Header() {
  return (
    <Container>
      <header>
        <nav>
          <img src={logo} alt="DevRadar" />
        </nav>
      </header>
    </Container>
  );
}
