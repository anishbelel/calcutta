import { styled } from '@mui/material/styles';
import { FormControl,Grid } from '@mui/material';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: '30px',
}));

const StyledSelectEmpty = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledLoading = styled('div')({
  height: '600px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledContainer = styled('div')({
  padding: '25px',
});

const StyledMarginBottom = styled('div')({
  marginBottom: '30px',
});

const StyledList = styled(Grid)({
  height: '75vh',
  overflow: 'auto',
});

// const useStyles = () => ({
//   formControl: StyledFormControl,
//   selectEmpty: StyledSelectEmpty,
//   loading: StyledLoading,
//   container: StyledContainer,
//   marginBottom: StyledMarginBottom,
//   list: StyledList,
// });

export {StyledFormControl,StyledContainer,StyledList,StyledMarginBottom,StyledLoading,StyledSelectEmpty};
