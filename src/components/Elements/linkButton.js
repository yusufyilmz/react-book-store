import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ButtonWrapper } from './style';

export const LinkButton = ({ title, path, left, bottom, width }) => {
    return <Link to={path} >
        <ButtonWrapper
            left={left}
            bottom={bottom}
            width={width}
            variant="primary"
            type="button">
            {title}
        </ButtonWrapper>
    </Link>
}
