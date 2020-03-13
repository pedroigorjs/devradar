import React from 'react';

import GlobalStyles from './styles/global';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyles />
    </>
  );
}

export default App;
