import React, { Fragment } from 'react';
import { Redirect } from 'react-router'
import BookContainer from '../../containers/bookContainer';

export const DeleteBook = ({ match }) => {
    return (
        <BookContainer
            operation="delete"
            id={match.params.id}>
            {
                (props) => (
                    <Fragment>
                        {props.deleteSuccess  &&
                            <Redirect to="/books" push={true} />
                        }
                    </Fragment>
                )
            }
        </BookContainer>
    );
}

