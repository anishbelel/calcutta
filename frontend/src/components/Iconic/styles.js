import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';

export const MainContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: 'white',
  color: 'black',

  '@media (max-width: 900px)': {
    //justifyContent: 'center',
  },
});

export const IconContainer = styled('a')({
  display: 'flex',
  alignItems: 'center',
  
  textDecoration: 'none',
  flexDirection: 'column',
});
