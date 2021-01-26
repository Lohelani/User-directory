import React from "react";

// phone, firstname, lastname, email

function TableData(props) {
    console.log(props)
    return (
    <tbody> 
        {/* {this.state.user

        .map((users) => ( */}
        <tr>
            <td>
                {/* {users.name.first} */}
            </td>
            <td>
                {/* {props.users.name.last} */}
            </td>
            <td>
                {/* {props.users.name.first} */}
            </td>
            <td>
                {/* {props.users.name.last} */}
            </td>
        </tr>
        {/* ))}  */}
    </tbody>
    )
}

export default TableData