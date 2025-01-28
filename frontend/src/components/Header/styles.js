import { styled } from '@mui/material/styles';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const HeaderContainer = styled('header')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#4CAF50',
  color: 'black',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    textAlign: 'center',
  },
});

export const LogoContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',

  '@media (max-width: 768px)': {
    marginBottom: '20px',
  },
});

export const Title = styled('h1')({
  margin: 0,
  fontSize: '35px',

  '&:nth-of-type(2)': {
    fontSize: '18px',
  },
});

export const Nav = styled(RouterNavLink)({
  cursor: 'pointer',
  fontSize: '18px',
  textDecoration: 'none',
  color: 'blue',

  '&:hover': {
    textDecoration: 'underline',
  },
});

export const ContactUs = styled('button')({
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  fontSize: '18px',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
});
