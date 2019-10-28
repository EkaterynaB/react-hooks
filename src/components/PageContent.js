import React, { Component, PropTypes } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class PageContent extends Component {
  static contextType = ThemeContext;
  
  render() {
    const { children } = this.props;
    const { isDarkMode } = this.context;
    return (
      <div style={{
        backgroundColor: isDarkMode ? "black" : 'white',
        height: '1000vh',
        weight: '100vw'
      }}>
        {children}
      </div>
    );
  };
}

PageContent.propTypes = {};

export default PageContent;
