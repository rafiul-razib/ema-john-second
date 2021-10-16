import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />

            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Ema-John</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Shop">Shop</Nav.Link>
                <Nav.Link href="#About">About</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;