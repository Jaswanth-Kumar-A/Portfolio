import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WebIcon from '@mui/icons-material/Web';

const StyledPaper = styled(Paper)`
  padding: 2rem;
  height: 100%;
  background: rgba(17, 34, 64, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
`;

const SkillBar = styled(motion.div)`
  width: 100%;
  height: 8px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 4px;
  margin: 0.5rem 0;
  overflow: hidden;
`;

const SkillFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-orange));
  border-radius: 4px;
`;

const SkillItem = styled(Box)`
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled(Box)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  svg {
    font-size: 2rem;
    color: var(--accent-cyan);
  }
`;

const Skills = () => {
  const programmingSkills = [
    { name: 'Python', level: 90 },
    { name: 'C++', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'C', level: 75 },
  ];

  const aiSkills = [
    { name: 'NLP', level: 85 },
    { name: 'Deep Learning', level: 80 },
    { name: 'Image Processing', level: 75 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Computer Vision', level: 80 },
  ];

  const webSkills = [
    { name: 'ReactJS', level: 90 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'REST APIs', level: 85 },
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
            Skills & Expertise
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <StyledPaper>
                <IconWrapper>
                  <CodeIcon />
                </IconWrapper>
                <Typography variant="h5" gutterBottom>
                  Programming Languages
                </Typography>
                {programmingSkills.map((skill) => (
                  <SkillItem key={skill.name}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body1">{skill.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <SkillBar>
                      <SkillFill
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </SkillBar>
                  </SkillItem>
                ))}
              </StyledPaper>
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledPaper>
                <IconWrapper>
                  <PsychologyIcon />
                </IconWrapper>
                <Typography variant="h5" gutterBottom>
                  AI & Machine Learning
                </Typography>
                {aiSkills.map((skill) => (
                  <SkillItem key={skill.name}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body1">{skill.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <SkillBar>
                      <SkillFill
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </SkillBar>
                  </SkillItem>
                ))}
              </StyledPaper>
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledPaper>
                <IconWrapper>
                  <WebIcon />
                </IconWrapper>
                <Typography variant="h5" gutterBottom>
                  Web Technologies
                </Typography>
                {webSkills.map((skill) => (
                  <SkillItem key={skill.name}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body1">{skill.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <SkillBar>
                      <SkillFill
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </SkillBar>
                  </SkillItem>
                ))}
              </StyledPaper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 