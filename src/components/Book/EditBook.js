import React, { Fragment } from 'react';
import { Redirect } from 'react-router'
import { Form, Container } from 'react-bootstrap';
import { FormInput } from '../Elements/formInput';
import { FormSelect } from '../Elements/formSelect';
import { LinkButton } from '../Elements/linkButton';
import { FormButton } from '../Elements/formButton';
import BookContainer from '../../containers/bookContainer';

export const EditBook = ({ match }) => {
    return (
        <BookContainer
            operation="edit"
            id={match.params.id}>
            {
                (props) => (
                    <Fragment>
                        {(props.editSuccess || props.books.length === 0) &&
                            <Redirect to="/books" push={true} />
                        }
                        {(!props.loading && !props.error) &&
                            <Container>
                                <LinkButton
                                    bottom="20"
                                    title="Back"
                                    path="/books" />
                                <Form onSubmit={props.editBook}>
                                    <FormInput
                                        title="Book Name"
                                        id="createBookNameField"
                                        type="text"
                                        placeholder="Type name of book..."
                                        name={props.name}
                                        onChange={(e) => props.handleChange('name', e)}
                                    />
                                    <FormInput
                                        title="Book Price"
                                        id="createBookPriceField"
                                        type="number"
                                        placeholder="Select or type price of book..."
                                        name={props.price}
                                        onChange={(e) => props.handleChange('price', e)}
                                    />
                                    <FormSelect
                                        title="Book Genre"
                                        id="createBookGenreField"
                                        options={props.genres}
                                        value={props.genre}
                                        onChange={(e) => props.handleChange('genre', e)}
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
        </BookContainer>
    );
}

