import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { HeaderContainer, LogoContainer, Title, Nav } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Title>Travel Engine</Title>
        <Title style={{ color: 'orange' }}>Kolkata</Title>
      </LogoContainer>
      <Nav as={RouterNavLink} to="/contact">Contact Us</Nav>
    </HeaderContainer>
  );
};

export default Header;
