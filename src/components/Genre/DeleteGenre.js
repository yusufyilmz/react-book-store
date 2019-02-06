import React, { Fragment } from 'react';
import GenreContainer from '../../containers/genreContainer';
import { Redirect } from 'react-router'

export const DeleteGenre = ({ match }) => {
    return (
        <GenreContainer
            operation="delete"
            id={match.params.id}>
            {
                (props) => (
                    <Fragment>
                        {props.deleteSuccess &&
                            <Redirect to="/genres" push={true} />
                        }

                    </Fragment>
                )
            }
        </GenreContainer>
    );
}

