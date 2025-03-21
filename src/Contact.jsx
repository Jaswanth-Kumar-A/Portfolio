import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, IconButton, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

const StyledForm = styled('form')`
  background: rgba(17, 34, 64, 0.7);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(100, 255, 218, 0.1);
`;

const SocialButton = styled(IconButton)`
  color: var(--text-primary);
  margin: 0 8px;
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent-cyan);
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setSnackbar({
      open: true,
      message: 'Message sent successfully!',
      severity: 'success',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            gutterBottom
            align="center"
            sx={{
              background: 'linear-gradient(45deg, var(--accent-cyan), var(--accent-orange))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 6,
            }}
          >
            Get in Touch
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <StyledForm onSubmit={handleSubmit}>
                <Typography variant="h5" gutterBottom>
                  Send me a Message
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(100, 255, 218, 0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'var(--accent-cyan)',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(100, 255, 218, 0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'var(--accent-cyan)',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(100, 255, 218, 0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'var(--accent-cyan)',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(100, 255, 218, 0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'var(--accent-cyan)',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        background: 'linear-gradient(45deg, var(--accent-cyan), var(--accent-orange))',
                        '&:hover': {
                          background: 'linear-gradient(45deg, var(--accent-orange), var(--accent-cyan))',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </StyledForm>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h5" gutterBottom>
                  Connect with Me
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'var(--text-secondary)' }}>
                  Feel free to reach out through any of these platforms or send me a message using the contact form.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <SocialButton
                    href="https://github.com/Jaswanth-Kumar-A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon fontSize="large" />
                  </SocialButton>
                  <SocialButton
                    href="https://www.linkedin.com/in/jaswanth-aatukuri/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon fontSize="large" />
                  </SocialButton>
                  <SocialButton
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon fontSize="large" />
                  </SocialButton>
                  <SocialButton
                    href="mailto:jaswanthkumar_aatukuri@srmap.edu.in"
                  >
                    <EmailIcon fontSize="large" />
                  </SocialButton>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
              {snackbar.message}
            </Alert>
          </Snackbar>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 