import React from 'react';
import { ContainerWrapper } from './style';
import { Logo } from '../Logo';
import { Menu } from '../Menu';
import {  Row, Col } from 'react-bootstrap';

export const Header = () => {

    return (
        <ContainerWrapper>
            <Row>
                <Col md={4} xs={4}>
                    <Logo />
                </Col>
                <Col>
                    <Menu />
                </Col>
            </Row>
        </ContainerWrapper>
    )
}
