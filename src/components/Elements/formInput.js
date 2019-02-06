import React from 'react';
import { Form } from 'react-bootstrap';

export const FormInput = ({title, name, id, onChange, type, placeholder }) => {
    return <Form.Group controlId={id}>
        <Form.Label>{title}</Form.Label>
        <Form.Control
            text={name}
            type={type}
            placeholder={placeholder}
            value={name}
            onChange={onChange}
            required />
    </Form.Group>
}




