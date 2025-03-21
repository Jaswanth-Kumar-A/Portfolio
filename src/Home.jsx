import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const HeroSection = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.1), transparent 70%);
    z-index: 0;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--accent-cyan);
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
`;

const SocialButton = styled(Button)`
  margin: 0 8px;
  color: var(--text-primary);
  border: 1px solid var(--accent-cyan);
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
    border-color: var(--accent-cyan);
  }
`;

const Home = () => {
  return (
    <HeroSection>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  background: 'linear-gradient(45deg, var(--accent-cyan), var(--accent-orange))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Hello, I'm [Your Name]
              </Typography>
              <Typography
                variant="h2"
                gutterBottom
                sx={{ color: 'var(--text-secondary)' }}
              >
                AI Enthusiast | Frontend Developer | Researcher
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ color: 'var(--text-secondary)', maxWidth: '600px' }}
              >
                Passionate about creating intelligent solutions and beautiful user experiences
                through the power of artificial intelligence and modern web technologies.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <SocialButton
                  startIcon={<GitHubIcon />}
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </SocialButton>
                <SocialButton
                  startIcon={<LinkedInIcon />}
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </SocialButton>
                <SocialButton
                  startIcon={<EmailIcon />}
                  href="mailto:your.email@example.com"
                >
                  Contact
                </SocialButton>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <ProfileImage
                  src="/path-to-your-image.jpg"
                  alt="Profile"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default Home; 