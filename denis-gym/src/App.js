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
import Login from './components/Login';
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { async } from '@firebase/util';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


export default function App() {

/*
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() =>{
    const getUsers = async () =>{
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    }


    getUsers();
  },[]);
*/

  return (

/*
    <div className='App'>
      {users.map((user)=>{
        return(
          <div>
            {" "}
            <h1>Name: {user.username}</h1>
          </div>
        );
      })}
    </div>
*/

    <Router>
    <div>
      <Routes>
        <Route path="/login" element = {<Login/>}/>
      <Route path="/" element ={
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
      }/>
      </Routes>
    </div>
    </Router>

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