import React, {useState, useEffect} from 'react'
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meetings from './Meetings';
// auto generated id
import {v4 as uuid} from 'uuid'
import {Link, useNavigate} from 'react-router-dom';



function Edit() {
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[time, setTime] = useState('');
    const[id, setId] = useState('');

    let history = useNavigate();

    let index = Meetings.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit =(e) => {
        e.preventDefault();

        let a = Meetings[index];
        a.Title = title;
        a.Description = description;
        a.Time = time;

        history('/')
    }

    useEffect(() => {
        setTitle(localStorage.getItem('Title'))
        setDescription(localStorage.getItem('Description'))
        setTime(localStorage.getItem('Time'))
        setId(localStorage.getItem('Id'))
    },[])

    return (
        <div>
            <Form className='d-grid gap-2' style={{margin:'15rem'}}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type='text' placeholder='Enter Title' value={title} required onChange={(e) => setTitle(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type='text' placeholder='Enter Description' value={description} required onChange={(e) => setDescription(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formTime'>
                    <Form.Control type='text' placeholder='Enter Time' value={time} required onChange={(e) => setTime(e.target.value)}></Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type='submit'>Update</Button>
            </Form>
        </div>
    )
}

export default Edit





