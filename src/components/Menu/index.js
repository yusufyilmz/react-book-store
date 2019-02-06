import React from 'react';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {NavWrapper, NavDropdownWrapper } from './style';

export const Menu = () => (
    <NavWrapper >
        <NavDropdownWrapper title="Select Page" id="basic-nav-dropdown">
            <NavItem >
                <Link to='/books'>Books</Link>
            </NavItem>
            <NavItem >
                <Link to='/genres'>Genres</Link>
            </NavItem>
        </NavDropdownWrapper>
    </NavWrapper>
)