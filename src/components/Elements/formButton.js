import React from 'react';
import {FormButtonWrapper} from './style';
import {Popup} from '../Popup';

export const FormButton = ({ text, showPopup, message }) => {
    return <FormButtonWrapper variant="primary" type="submit">
        {text}
        <Popup show={showPopup} message={message}/>
    </FormButtonWrapper>
}





