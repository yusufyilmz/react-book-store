import React, { Fragment } from 'react';
import { Container } from './style';
import { Header } from '../Header';
import { Content } from '../Content';
import { Spinner } from '../Spinner';
import { Error } from '../Error';
import { BrowserRouter as Router } from 'react-router-dom';

export const App = () => {
    return (
        <Container>
            <Router>
                <Fragment>
                    <Header />
                    <Spinner />
                    <Content />
                    <Error />
                </Fragment>
            </Router>
        </Container>
    );
}

export default App;
