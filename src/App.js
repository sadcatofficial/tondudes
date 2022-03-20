import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import InnerContainer from './components/InnerContainer/InnerContainer';

import { Container } from '@mui/material';

function App() {
  const [langState, setLang] = useState(true)
  return (
    <>
      <Header changeLang={lang => setLang(lang)} langState={langState} />
      <InnerContainer langState={langState}  />
      <Footer   />
    </>
  );
}

export default App;
