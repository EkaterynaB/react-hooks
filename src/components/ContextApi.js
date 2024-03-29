import React, { PropTypes } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';

const ContextApi = () => (
  <ThemeProvider>
    <LanguageProvider>
      <PageContent>
        <Navbar/>
        <Form />
     </PageContent>
    </LanguageProvider>
  </ThemeProvider>
);

ContextApi.propTypes = {};

export default ContextApi;
