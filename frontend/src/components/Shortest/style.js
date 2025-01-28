import { styled } from '@mui/material/styles';
import back from './back.jpg';


export const HeaderContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '30px',
  backgroundColor: '#a83273',
  color: 'black',
  backgroundImage: `url(${back})`,
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat', 
  backgroundPosition: 'center', 
  marginBottom:"10px",

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    textAlign: 'center',
  },
});
