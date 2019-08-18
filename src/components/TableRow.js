
import React from "react";


const TableRow = props => {
    const { i, name, lng, lat } = props;
    return (
        <tr>
            <td>{i}</td>
            <td>{name}</td>
            <td>{lng}</td>
            <td>{lat}</td>
        </tr>
    )
}

export default TableRow;





