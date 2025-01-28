import React from 'react';
import { Container, Grid, TextField, Button, Typography, Box, Link } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled(Box)({
  marginTop: '2rem',
  padding: '2rem',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
});
//ok
const Contact = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <FormContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </FormContainer>
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body1">
          Address: Kolkata, Paschimjaykrishnapur 700012
        </Typography>
        <Typography variant="body1">
          Phone: +123 456 7890
        </Typography>
        <Typography variant="body1">
          Email: travelengine@email.com
        </Typography>
        <Box mt={2}>
          <Typography variant="body1">
            Follow us on social media:
          </Typography>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" sx={{ mr: 2 }}>
            Facebook
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" sx={{ mr: 2 }}>
            Twitter
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
