import React from 'react';
import { CardWrapper, InputGroupWrapper } from './style';
import { Card, Col } from 'react-bootstrap';
import { LinkButton } from '../Elements/linkButton';


export const GenreCard = ({ item }) => {
    return (
        <Col md={4}>
            <CardWrapper>
                <Card.Title>{item.name}</Card.Title>
                <InputGroupWrapper>
                    <LinkButton
                        width="80"
                        path={`/genres/edit/${item.id}`}
                        title="Edit" />
                </InputGroupWrapper>
            </CardWrapper>
        </Col>

    );
}