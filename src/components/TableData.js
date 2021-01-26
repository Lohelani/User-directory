import React from "react";


function TableData(props) {
    console.log(props)
    return (
    <tbody> 
        {/* //map through table row */}
        <tr>
            <td>
                {/* {props.user.name.first} */}
            </td>
            <td>
                {/* {props.user.name.last} */}
            </td>
            <td>
                {/* {props.user.name.first} */}
            </td>
            <td>
                {/* {props.user.name.last} */}
            </td>


        </tr>
    </tbody>
    )
}

export default TableData