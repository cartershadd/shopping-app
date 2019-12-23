import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class HamburgerMenu extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="*" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Shopping Mockup</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/cart">
                                <Nav.Link><i className="fas fa-shopping-cart"/></Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    };
}

export default HamburgerMenu;