import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

export default function Header() {
  return (
    <Navbar bg='dark' expand='lg' className='mb-5' id='navbar'>
      <Container fluid>
        <Navbar.Brand id='nav-brand' href='#'>
          MERN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='ms-auto my-2 my-lg-0' navbarScroll>
            <Nav.Link href='#action1' id='nav'>
              Home
            </Nav.Link>
            <Nav.Link href='#action2' id='nav'>
              Product
            </Nav.Link>
            <Nav.Link href='#action2' id='nav'>
              Login
            </Nav.Link>
            <Nav.Link href='#action2' id='nav'>
              Signout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
