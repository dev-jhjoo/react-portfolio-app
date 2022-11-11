import React from 'react';
import { HomeContainer } from '../style/Home.style';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Home(props) {

  const scrollToSmooth = (event, top) => {
    event.preventDefault();
    window.scrollTo({
      top,
      behavior: 'smooth'
    })
  };

  return (<>
    <HomeContainer>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" >
      <Container>
        <Navbar.Brand href="/" onClick={event => {scrollToSmooth(event, 0)}}>JHJOO PAGE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="/" onClick={event => {scrollToSmooth(event, 0)}}>Home</Nav.Link>
            <Nav.Link href="/resume" onClick={event => {scrollToSmooth(event, 465)}}>resume</Nav.Link>
            <Nav.Link href="/career" onClick={event => {scrollToSmooth(event, 1320)}}>career</Nav.Link>
            <Nav.Link href="/contact" onClick={event => {scrollToSmooth(event, 1800)}}>contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </HomeContainer>
  </>);
}

export default Home