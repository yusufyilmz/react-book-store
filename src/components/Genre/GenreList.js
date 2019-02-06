import React from 'react';
import { GenreCard } from './GenreCard';
import GenreContainer from '../../containers/genreContainer';
import { Container, Row } from 'react-bootstrap';
import { LinkButton } from '../Elements/linkButton';

export const GenreList = () => {
    return (
        <GenreContainer
        operation="list"
        >
            {
                (props) => (
                    (!props.loading && !props.error) &&
                    <Container>
                        <LinkButton
                            title="Create New Genre"
                            path="/genres/create" />
                        <Row>
                            {props.genres.map(genre => {
                                return <GenreCard key={`genre${genre.id}`} item={genre} onDelete={props.deleteGenre} />
                            })}
                        </Row>
                    </Container>
                )
            }
        </GenreContainer>
    );
}