import React, { useContext, PropTypes } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function PageContent({ children }) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div style={{
      backgroundColor: isDarkMode ? "black" : 'white',
      height: '1000vh',
      weight: '100vw'
    }}>
      {children}
    </div>
  );
}

PageContent.propTypes = {};

export default PageContent;
