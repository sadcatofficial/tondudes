import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Team from './components/Team/Team';
import Variations from './components/Variations/Variations';
import { Container } from '@mui/material';

function App() {
  return (
      <Container maxWidth="1020px" fixed>
        <Header />
        <Main/>
        <About id="about"/>
        <Variations/>
        <Team/>
      </Container>
  );
}

export default App;
