import React from 'react';
import { BookHeaderWrapper, BookParagraphWrapper, InputGroupWrapper, CardWrapper } from './style';
import { Card, Col } from 'react-bootstrap';
import { LinkButton } from '../Elements/linkButton';


export const BookCard = ({ item }) => {
    return (
        <Col md={4}>
            <CardWrapper>
                <BookHeaderWrapper>{item.name}</BookHeaderWrapper>
                <Card.Body>
                    <BookParagraphWrapper>{item.genre.name}</BookParagraphWrapper>
                    <BookParagraphWrapper>{item.price} euro</BookParagraphWrapper>
                </Card.Body>
                <InputGroupWrapper>
                    <LinkButton
                        width="80"
                        path={`/books/edit/${item.id}`}
                        title="Edit" />
                    <LinkButton
                        width="80"
                        path={`/books/delete/${item.id}`}
                        title="Delete" />
                </InputGroupWrapper>
            </CardWrapper>
        </Col>

    );
}