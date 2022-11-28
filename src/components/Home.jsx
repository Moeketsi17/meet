import React from 'react';
import {Button, Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Meetings from './Meetings';
import {Link, useNavigate} from 'react-router-dom';


function Home() {
    let history = useNavigate();

    const handleEdit = (id, title, description, time) => {
        localStorage.setItem('Id', id);
        localStorage.setItem('Title', title);
        localStorage.setItem('Description', description);
        localStorage.setItem('Time', time);
        
    }

    const handleDelete = (id) => {
        let index = Meetings.map(function(e){
            return e.id
        }).indexOf(id);

        Meetings.splice(index,1);
        history('/');
    }

    return (
        <div>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Description
                            </th>

                            <th>
                                Time
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Meetings && Meetings.length > 0
                            ?
                            Meetings.map((item) =>{
                                return(
                                    <tr>
                                        <td>
                                            {item.Title}
                                        </td>
                                        <td>
                                            {item.Description}
                                        </td>
                                        <td>
                                            {item.Time}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                                <Button onClick={() => handleEdit(item.id, item.Title, item.Description, item.Time)}>EDIT</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                        </td>
                                    </tr>
                                )
                            }) :
                            "No data available"
                        }
                    </tbody>
                </Table>
                <br></br>
                <Link className='d-grid gap-2' to='/create'>
                    <Button size='lg'>Create</Button>
                </Link>
            </div>
        </div>
    )
}

export default Home