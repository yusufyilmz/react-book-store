import React, { Fragment } from 'react';
import { Redirect } from 'react-router'
import { Form, Container } from 'react-bootstrap';
import { FormInput } from '../Elements/formInput';
import { FormSelect } from '../Elements/formSelect';
import { LinkButton } from '../Elements/linkButton';
import { FormButton } from '../Elements/formButton';
import BookContainer from '../../containers/bookContainer';

export const CreateBook = () => {
    return (
        <BookContainer
            operation="create"
        >
            {
                (props) => (
                    <Fragment>
                        {props.createSuccess &&
                            <Redirect to="/books" push={true} />
                        }
                        {(!props.loading && !props.error) &&
                            <Container>
                                <LinkButton
                                    bottom="20"
                                    title="Back"
                                    path="/books" />
                                <Form onSubmit={props.createBook}>
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
                                        onChange={(e) => props.handleChange('genre', e)}
                                    />
                                    <FormButton text="Submit" />
                                </Form>
                            </Container>
                        }
                    </Fragment>

                )
            }
        </BookContainer>
    );
}
