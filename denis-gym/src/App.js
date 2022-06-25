import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { Row, Col, Container, Alert } from 'react-bootstrap/';
import Transformations from './components/Transformations';
import Bundles from './components/Bundles';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logout from "./components/Logout";
import Bought from "./components/Bought";


export default function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <div className="body">
              <Navbar />
              <Home />
              <Container fluid>
                <Row id="about">
                  <About />
                </Row>
                <Row id='transformations'>
                  <Transformations />
                </Row>
                <Row id="bundles">
                  <Bundles />
                </Row>
                <Row id="footer">
                  <Footer />
                </Row>

              </Container>
            </div>
          } />
          <Route path="/login" element={
            <div className="body">
              <Navbar />
              <Login></Login>
            </div>
          } />
          <Route path="/register" element={
            <div className='body'>
              <Navbar></Navbar>
              <Register></Register>
            </div>
          } />
          <Route path="/logout" element={
            <div className='body'>
              <Navbar></Navbar>
              <Logout></Logout>
            </div>
          } />
          <Route path="/bought" element={
            <div className='body'>
              <Navbar></Navbar>
              <Bought></Bought>
            </div>
          } />
        </Routes>
      </div>
    </Router>

  );
}

