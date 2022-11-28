import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meetings from './Meetings';
// auto generated id
import {v4 as uuid} from 'uuid'
import {Link, useNavigate} from 'react-router-dom';

function Add() {
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[time, setTime] = useState('');

    let history = useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = title,
        b = description,
        c = time;

        Meetings.push({id: uniqueId, Title: a, Description: b, Time: c});
        history('/')
    }

    return (
        <div>
            <Form className='d-grid gap-2' style={{margin:'15rem'}}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type='text' placeholder='Enter Title' required onChange={(e) => setTitle(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type='text' placeholder='Enter Description' value={description} required onChange={(e) => setDescription(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formTime'>
                    <Form.Control type='text' placeholder='Enter Time' required onChange={(e) => setTime(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default Add