// src/components/BsNavBar.js 

import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function BsNavBar(){

    return (
        <Navbar expand="md" className="bg-warning">
            <Container>
                <Navbar.Brand href="#home">Acorn</Navbar.Brand>
                <Navbar.Toggle aria-controls="one"/>
                <Navbar.Collapse id="one">
                    <Nav>
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/members">Member</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}