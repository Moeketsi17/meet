import React from 'react';
import {Button, Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Meetings from './Meetings';

function Home() {

    const handleDelete = (id) => {
        let index = Meetings.map(function(e){
            return e.id
        })
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
                                            {item.Time}
                                        </td>
                                        <td>
                                            <Button onClick={() => alert(item.id)}>EDIT</Button>
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
            </div>
        </div>
    )
}

export default Home