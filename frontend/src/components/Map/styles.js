import { styled } from '@mui/system';


const MyComponent = () => ({
  paper: styled('div')({
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px',
  }),
  mapContainer: styled('div')({
    height: '85vh',
    width: '100%',
  }),
  markerContainer: styled('div')({
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': {
      zIndex: 2,
    },
  }),
  pointer: styled('div')({
    cursor: 'pointer',
  }),
});
export default MyComponent;