import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  width: '100%',
});

export const AnimatedText = styled(Typography)(({ theme }) => ({
  fontSize: '4rem',
  fontWeight: 'bold',
  background: 'linear-gradient(45deg, #646cff, #535bf2, #747bff, #646cff)',
  backgroundSize: '300% 300%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: `${gradient} 3s ease infinite, ${fadeIn} 2s ease-in`,
  textAlign: 'center',
  padding: '2rem',
  lineHeight: 1.2,
  // Material UI breakpoints: md = 900px, sm = 600px
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
}));
