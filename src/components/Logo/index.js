import React from 'react';
import { NavbarWrapper } from './style';
import { Navbar } from 'react-bootstrap';

export const Logo = () => (
        <NavbarWrapper bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                        LOGO
                </Navbar.Brand>
        </NavbarWrapper>
)