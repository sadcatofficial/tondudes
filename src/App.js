import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import InnerContainer from './components/InnerContainer/InnerContainer';

import { Container } from '@mui/material';

function App() {
  return (
    <>
      <Header />
      <InnerContainer />
      <Footer />
    </>
  );
}

export default App;
