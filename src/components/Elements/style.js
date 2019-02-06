


import styled from 'styled-components';
import { Button} from 'react-bootstrap'

export const ButtonWrapper = styled(Button)`
    margin-left: ${props => props.left}px;
    margin-bottom: ${props => props.bottom}px;
    width: ${props => props.width}px;
`;

export const FormButtonWrapper = styled(Button)`
    float:right;

`;



