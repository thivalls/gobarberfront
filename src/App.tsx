import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import Global from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <Router>
      <Global />
      <AppProvider>
        <Routes />
      </AppProvider>
    </Router>
  );
};

export default App;
