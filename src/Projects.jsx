import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const StyledCard = styled(Card)`
  height: 100%;
  background: rgba(17, 34, 64, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled(CardMedia)`
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const TechChip = styled(Chip)`
  margin: 4px;
  background: rgba(100, 255, 218, 0.1);
  color: var(--accent-cyan);
  border: 1px solid var(--accent-cyan);
  
  &:hover {
    background: rgba(100, 255, 218, 0.2);
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'NLP-Driven Medical Chatbot',
      description: 'An intelligent medical chatbot using Reinforcement Learning and BioBERT for accurate medical information retrieval and patient assistance.',
      image: '/path-to-medical-chatbot-image.jpg',
      technologies: ['Python', 'BioBERT', 'Reinforcement Learning', 'NLP'],
      github: 'https://github.com/yourusername/medical-chatbot',
      demo: 'https://demo-medical-chatbot.com',
    },
    {
      title: 'Sentiment & Mental Stability Analysis',
      description: 'Advanced sentiment analysis system using VADER and BERT for analyzing text data and detecting mental health indicators.',
      image: '/path-to-sentiment-analysis-image.jpg',
      technologies: ['Python', 'BERT', 'VADER', 'Machine Learning'],
      github: 'https://github.com/yourusername/sentiment-analysis',
      demo: 'https://demo-sentiment-analysis.com',
    },
    {
      title: 'Live Object Detection',
      description: 'Real-time object detection system using YOLOv8 for accurate and efficient object recognition in video streams.',
      image: '/path-to-object-detection-image.jpg',
      technologies: ['Python', 'YOLOv8', 'OpenCV', 'Deep Learning'],
      github: 'https://github.com/yourusername/object-detection',
      demo: 'https://demo-object-detection.com',
    },
    {
      title: 'Handwritten Number & Word Detection',
      description: 'Multi-model approach using SVM, CNN, KNN, and Random Forest for accurate handwritten text recognition.',
      image: '/path-to-handwriting-detection-image.jpg',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'OpenCV'],
      github: 'https://github.com/yourusername/handwriting-detection',
      demo: 'https://demo-handwriting-detection.com',
    },
    {
      title: 'Optimal Route Finder',
      description: 'Implementation of Dijkstra\'s Algorithm for finding the most efficient routes in complex networks.',
      image: '/path-to-route-finder-image.jpg',
      technologies: ['Python', 'Graph Theory', 'Algorithms'],
      github: 'https://github.com/yourusername/route-finder',
      demo: 'https://demo-route-finder.com',
    },
    {
      title: 'Weather Forecast App',
      description: 'Modern weather application built with ReactJS featuring real-time weather data and interactive visualizations.',
      image: '/path-to-weather-app-image.jpg',
      technologies: ['ReactJS', 'API Integration', 'JavaScript', 'CSS'],
      github: 'https://github.com/yourusername/weather-app',
      demo: 'https://demo-weather-app.com',
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
            Featured Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <StyledCard>
                    <ProjectImage
                      image={project.image}
                      title={project.title}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech) => (
                          <TechChip
                            key={tech}
                            label={tech}
                            size="small"
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                      >
                        GitHub
                      </Button>
                      <Button
                        startIcon={<LaunchIcon />}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                      >
                        Live Demo
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

export default Projects; 