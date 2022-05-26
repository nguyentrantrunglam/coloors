import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'

export default function Nav_bar() {
    const user = {
        // name: 'Trung Lam'
    }
    return (
        <Navbar className='border-b-2' sticky='top' collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand className='ml-6' href="#home"><img src='https://coolors.co/assets/img/logo.svg' className='h-[18px]' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="text-sm">
                    The essential app for any designer. Generate and collect beautiful color palettes on the go.
                </Nav>
                <Nav.Link className='mr-auto text-sm' href='#download link'>
                    Download Now
                </Nav.Link>
                <Nav className='mr-6'>
                    <NavDropdown title="Tools" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Palette Generator</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Explore Palettes</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={user.name || "Sign In"}>
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Setting</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}
