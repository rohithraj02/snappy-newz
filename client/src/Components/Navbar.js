import React, { useContext } from "react";
import './Navbar.css'
import MyForm from "./searchbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar1 = (props) => {

  return (
    <div>
      {props.auth ?
        <>
        {/* <Navbar className="nav" expand="lg">
      <Container>
        <Navbar.Brand href="/">Snappy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/General">General</Nav.Link>
            <Nav.Link href="/Sports">Sports</Nav.Link>
            <Nav.Link href="/Technology">Technology</Nav.Link>
            <Nav.Link href="/Science">Science</Nav.Link>
            <Nav.Link href="/Entertainment">Entertainment</Nav.Link>
            <Nav.Link href="/Business">Business</Nav.Link>
            <Nav.Link href="/search"><input type="button" value="search news" /></Nav.Link>
            <Nav.Link href="/logout">LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
          <nav className="nav">
            <a href="/" className="site-title">Snappy</a>
            <ul>
              <li>
                <a href="/General">General</a>
              </li>
              <li>
                <a href="/Sports">Sports</a>
              </li>
              <li>
                <a href="/Technology">Technology</a>
              </li>
              <li>
                <a href="/Science">Science</a>
              </li>
              <li>
                <a href="/Entertainment">Entertainment</a>
              </li>
              <li>
                <a href="/business">Business</a>
              </li>
              <li>
                <a href="/search"> <input type="button" value="search news" /></a>
              </li>
              <li>
                <a href="/logout">LOGOUT</a>
              </li>
            </ul>
          </nav>
        </>
        :
        <>
                {/* <Navbar bg="dark"  expand="lg">
      <Container>
        <Navbar.Brand href="/">Snappy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login">LOGIN</Nav.Link>
            <Nav.Link href="/Register">REGISTER</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
          <nav className="nav">
            <a href="/" className="site-title">Snappy</a>
            <ul>
              <li>
                <a href="/login">LOGIN</a>
              </li>
              <li>
                <a href="/Register">REGISTER</a>
              </li>
            </ul>
          </nav>
        </>
      }

    </div>
  )


  
}

export default Navbar1;
