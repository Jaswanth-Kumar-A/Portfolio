import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import VerifiedIcon from '@mui/icons-material/Verified';
import LaunchIcon from '@mui/icons-material/Launch';

const StyledCard = styled(Card)`
  height: 100%;
  background: rgba(17, 34, 64, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(100, 255, 218, 0.2);
  }
`;

const CertificationImage = styled(CardMedia)`
  height: 160px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(100, 255, 218, 0.05);
`;

const Certifications = () => {
  const certifications = [
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'December 2023',
      image: '/path-to-mongodb-cert.jpg',
      credentialUrl: 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/876a921d-64bb-4391-831b-8581c1248a73-jaswanth-kumar-aatukuri-9c67713f-553e-4739-830e-6172c1d41d0a-certificate.pdf',
      description: 'Comprehensive certification covering MongoDB database design, development, and optimization.',
    },
    {
      title: 'Prompt Engineering Specialization',
      issuer: 'DeepLearning.AI',
      date: 'November 2023',
      image: '/path-to-prompt-eng-cert.jpg',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/Z7U6L9GWBC6N',
      description: 'Advanced techniques in prompt engineering and large language model optimization.',
    },
    {
      title: 'Python Programming',
      issuer: 'NPTEL',
      date: 'October 2023',
      image: '/path-to-nptel-cert.jpg',
      credentialUrl: 'https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc23-cs108',
      description: 'Comprehensive Python programming course covering advanced concepts and best practices.',
    },
  ];

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
            Certifications
          </Typography>

          <Grid container spacing={4}>
            {certifications.map((cert, index) => (
              <Grid item xs={12} md={4} key={cert.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <StyledCard>
                    <CertificationImage
                      image={cert.image}
                      title={cert.title}
                    />
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <VerifiedIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h6" component="div">
                          {cert.title}
                        </Typography>
                      </Box>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        {cert.issuer}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Issued: {cert.date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {cert.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        startIcon={<LaunchIcon />}
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                      >
                        View Certificate
                      </Button>
                    </CardActions>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Certifications; 