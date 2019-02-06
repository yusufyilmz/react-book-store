

import React from 'react';
import { Form } from 'react-bootstrap';


const getOptions = (genres) => {

    return genres.map(genre => {
        return <option key={genre.id} value={genre.id}>{genre.name}</option>

    })
}


export const FormSelect = ({ title, id, value, onChange, options }) => {
    return <Form.Group controlId={id}>
        <Form.Label>{title}</Form.Label>
        <Form.Control placeholder="select" as="select" value={value} onChange={onChange}>
            {getOptions(options)}
        </Form.Control>
    </Form.Group>
}




