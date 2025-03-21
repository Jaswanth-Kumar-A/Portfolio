import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');

  :root {
    --primary-dark: #0a192f;
    --secondary-dark: #112240;
    --accent-cyan: #64ffda;
    --accent-orange: #ff6b6b;
    --text-primary: #ccd6f6;
    --text-secondary: #8892b0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(135deg, var(--primary-dark), var(--secondary-dark));
    color: var(--text-primary);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  a {
    color: var(--accent-cyan);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--accent-orange);
    }
  }

  section {
    padding: 5rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
`;

export default GlobalStyles; 