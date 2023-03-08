import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

export default function Header() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' id='navbar' collapseOnSelect>
      <Container>
        <Navbar.Brand id='nav-brand' href='#'>
          MERN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='ms-auto' navbarScroll>
            <Nav.Link href='/cart' id='nav'>
              <i className='fas fa-shopping-cart'></i>Cart
            </Nav.Link>
            <Nav.Link href='/login' id='nav'>
              <i className='fas fa-user'></i>Sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
