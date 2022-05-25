import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Transformations from './components/Transformations';
import Bundles from './components/Bundles';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Container>
        <Row>
          <About />
          <Transformations />
          <Bundles />
          <Footer />
        </Row>
      
      </Container>
    </div>
  );
}


/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p>Pozdrav ljudi</p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/