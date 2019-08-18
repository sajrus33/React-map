import React from "react";
import { Table } from 'react-bootstrap';
import TableRow from "./TableRow";


const TableBs = props => {
    const { markers } = props;
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>longitude</th>
                    <th>latitude</th>
                </tr>
            </thead>
            <tbody>
                {markers.map((m, i) => <TableRow name={m.name} lng={m.lng} lat={m.lat} key={i} i={i + 1} />)}
            </tbody>
        </Table>
    )
}

export default TableBs;
