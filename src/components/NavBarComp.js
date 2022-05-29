import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import {Link} from "react-router-dom";
import UserContext from '../Context';



export default function NavBarComp() {
    const isUserLoggedIn = useContext(UserContext);
    console.log('navbar + ', isUserLoggedIn.isLoggedIn);
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/about"}>Link</Nav.Link>
                                {  isUserLoggedIn.isLoggedIn ?  <Nav.Link as={Link} to={"/logout"}>Logout</Nav.Link> : <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>}
                                <Nav.Link as={Link} to={"/brands"}>All Brands</Nav.Link>
                                <Nav.Link as={Link} to={"/addOffer"}>Add Offer</Nav.Link>
                                <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>

                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        );
} 