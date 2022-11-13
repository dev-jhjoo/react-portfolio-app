import './App.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Career from './pages/Career';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resume from './pages/Resume';

function App() {
  const scrollToSmooth = (event, top) => {
    event.preventDefault();
    window.scrollTo({
      top,
      behavior: 'smooth'
    })
  };
  

  return (<>
  <Navbar id='app-navbar' collapseOnSelect={true} bg="dark" variant="dark"  expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/" onClick={event => {scrollToSmooth(event, 0)}} style={{color:"orange"}}>JHJOO PAGE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="/" onClick={event => {scrollToSmooth(event, 0)}}>메인</Nav.Link>
            <Nav.Link href="/resume" onClick={event => {scrollToSmooth(event, document.querySelector('#resume-container').offsetTop)}}>이력</Nav.Link>
            <Nav.Link href="/career" onClick={event => {scrollToSmooth(event, document.querySelector('#career-container').offsetTop)}}>경력</Nav.Link>
            <Nav.Link href="/contact" onClick={event => {scrollToSmooth(event, document.querySelector('#contact-container').offsetTop)}}>연락</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  <Home></Home>
  <Resume></Resume>
  <Career></Career>
  <Contact></Contact>
  </>);
}

export default App;
