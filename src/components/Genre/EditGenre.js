import React, { Fragment } from 'react';
import GenreContainer from '../../containers/genreContainer';
import { Redirect } from 'react-router'
import { Form, Container } from 'react-bootstrap';
import { FormButton } from '../Elements/formButton';
import { LinkButton } from '../Elements/linkButton';
import { FormInput } from '../Elements/formInput';

export const EditGenre = ({ match }) => {
    return (
        <GenreContainer
         id={match.params.id}
        operation="edit"
        >
            {
                (props) => (
                    <Fragment>
                        {(props.editSuccess || props.genres.length === 0) &&
                            <Redirect to="/genres" push={true} />
                        }
                        { (!props.loading && !props.error) &&
                            <Container>
                                <LinkButton
                                    bottom="20"
                                    title="Back"
                                    path="/genres" />
                                <Form onSubmit={props.editGenre}>
                                    <FormInput
                                        title="Genre Name"
                                        id="createGenreNameField"
                                        type="text"
                                        placeholder="Type name of genre..."
                                        name={props.name}
                                        onChange={props.changeName}
                                    />
                                    <FormButton
                                        text="Submit"
                                        showPopup={props.showPopup}
                                        message={props.popupMessage} />

                                </Form>
                            </Container>
                        }
                    </Fragment>
                )
            }
        </GenreContainer>
    );
}

