import React, { Fragment } from 'react';
import ErrorContainer from '../../containers/errorContainer';
import Modal from '../Modal';

export const Error = () => {
    return (
        <ErrorContainer>
            {
                (props) => (
                    <Fragment>
                            <Fragment>
                                <Modal
                                    show={props.error}
                                    message={props.errorMessage}
                                    onHide={props.modalClose}
                                />
                            </Fragment>
                    </Fragment>
                )
            }
        </ErrorContainer>
    );
}

