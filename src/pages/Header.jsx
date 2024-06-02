import React from "react";
import myLogo from '../images/logo-no-background.png';
import NavListItem from "../components/NavListItem";
import navListData from "../data/navListData";
import NavCategories from "../components/NavCategories";
import navCategories from "../data/navCategories";
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><a><img className="brand-logo" src={myLogo} alt="Logo"/></a></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                        {navListData.map(nav => (<NavListItem key={nav._id} nav={nav}/>))}
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        {navCategories.map(navCat=>(<NavCategories key={navCat._id} navCat={navCat}/>))}
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            
                <ul className="nav">
                    
                </ul>
        </header>
    );
}

