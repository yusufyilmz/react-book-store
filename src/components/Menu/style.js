


import styled from 'styled-components';
import { Dropdown, Nav, NavDropdown } from 'react-bootstrap';

export const Div = styled.div`
    flex: 3 1 auto;
    height 50px;
    margin-left: 30px;
`

Div.displayName = 'div'


export const DropdownToggleWrapper = styled(Dropdown.Toggle)`
    height: 50px;
    width 100%;
`

export const NavWrapper = styled(Nav)`
    height: 70px;
    width 100%;
    display: inline
`

export const NavDropdownWrapper = styled(NavDropdown)`
    color: white!important;
    text-align:center
    color: white;
    font-weight: bold;
    background-color: #007bff;
    text-align:center;
    > a {
        color: white;
        height: 50px;
        text-align: center;
        padding-top:12px;
    }
    > div {
        width 100%;
        text-align: center;
    }
`



