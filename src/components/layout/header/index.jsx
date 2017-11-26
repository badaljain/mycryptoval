import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import styles from './style.css'

class Header extends Component {
    constructor (props){
        super(props)
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">My CryptoVal</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavDropdown eventKey={3} title="My Account" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} href='/user/portfolio'>Portfolio</MenuItem>
                            <MenuItem eventKey={3.2}>Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header