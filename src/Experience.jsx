import { Box, Container, Typography, Grid, Paper, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const StyledPaper = styled(Paper)`
  padding: 2rem;
  background: rgba(17, 34, 64, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ExperienceCard = styled(Box)`
  margin-bottom: 2rem;
`;

const Experience = () => {
  const experiences = [
    {
      type: 'internship',
      title: 'AI/ML Intern',
      company: 'EduNet',
      period: 'June 2023 - August 2023',
      description: 'Developed an employee burnout prediction system using machine learning algorithms. Implemented data preprocessing pipelines and feature engineering techniques to improve prediction accuracy.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'],
    },
    {
      type: 'research',
      title: 'Research Project: Advanced NLP Applications',
      institution: 'SRM University AP',
      period: 'January 2023 - May 2023',
      description: 'Conducted research on advanced NLP applications in healthcare. Developed novel approaches for medical text classification and sentiment analysis.',
      technologies: ['Python', 'BERT', 'NLP', 'Deep Learning'],
    },
    {
      type: 'research',
      title: 'Computer Vision Research',
      institution: 'SRM University AP',
      period: 'September 2022 - December 2022',
      description: 'Led a research team in developing improved object detection algorithms using YOLOv8. Achieved 15% better accuracy compared to baseline models.',
      technologies: ['Python', 'YOLOv8', 'OpenCV', 'Deep Learning'],
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
            Experience & Research
          </Typography>

          <Timeline position="alternate">
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color={exp.type === 'internship' ? 'primary' : 'secondary'}>
                    {exp.type === 'internship' ? <WorkIcon /> : <SchoolIcon />}
                  </TimelineDot>
                  {index < experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: exp.type === 'internship' ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <StyledPaper>
                      <ExperienceCard>
                        <Typography variant="h5" gutterBottom>
                          {exp.title}
                        </Typography>
                        <Typography variant="subtitle1" color="primary" gutterBottom>
                          {exp.type === 'internship' ? exp.company : exp.institution}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {exp.period}
                        </Typography>
                        <Typography variant="body1" paragraph>
                          {exp.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {exp.technologies.map((tech) => (
                            <Typography
                              key={tech}
                              variant="caption"
                              sx={{
                                background: 'rgba(100, 255, 218, 0.1)',
                                color: 'var(--accent-cyan)',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                border: '1px solid var(--accent-cyan)',
                              }}
                            >
                              {tech}
                            </Typography>
                          ))}
                        </Box>
                      </ExperienceCard>
                    </StyledPaper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience; 