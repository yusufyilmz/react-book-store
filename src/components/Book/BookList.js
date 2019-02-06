import React from 'react';
import { BookCard } from './BookCard';
import { Container, Row } from 'react-bootstrap';
import { LinkButton } from '../Elements/linkButton';
import BookContainer from '../../containers/bookContainer';

export const BookList = () => {
    return (
        <BookContainer
            operation="list"
        >
            {
                (props) => (
                    (!props.loading && !props.error) &&
                    <Container>
                        <LinkButton
                            title="Create new book"
                            path="/books/create" />
                        <Row>
                            {props.books.map(book =>
                                <BookCard
                                    key={`book${book.id}`}
                                    item={book} />
                            )}
                        </Row>
                    </Container>
                )
            }
        </BookContainer>
    );
}