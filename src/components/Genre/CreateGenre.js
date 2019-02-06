import React, { Fragment } from 'react';
import GenreContainer from '../../containers/genreContainer';
import { Redirect } from 'react-router'
import { Form, Container } from 'react-bootstrap';
import { FormButton } from '../Elements/formButton';
import { LinkButton } from '../Elements/linkButton';
import { FormInput } from '../Elements/formInput';


export const CreateGenre = () => {
    return (
        <GenreContainer
        operation="create"
        >
            {
                (props) => (
                    <Fragment>
                        {(props.createSuccess) &&
                            <Redirect to="/genres" push={true} />
                        }
                        { (!props.loading && !props.error) &&
                            <Container>
                                <LinkButton
                                    bottom="20"
                                    title="Back"
                                    path="/genres" />
                                <Form onSubmit={props.createGenre}>
                                    <FormInput
                                        title="Genre Name"
                                        id="createGenreNameField"
                                        type="text"
                                        placeholder="Type name of genre..."
                                        name={props.name}
                                        onChange={props.changeName}
                                    />
                                    <FormButton text="Submit" />
                                </Form>
                            </Container>
                        }

                    </Fragment>
                )
            }
        </GenreContainer>
    );
}
