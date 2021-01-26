import React from "react";


function TableData({ users }) {
    return (
        <tbody>
            { users[0] !== undefined && users[0].name !== undefined ? (
                users.map(({ name, login, phone, email, gender }) => {
                    return (
                        <tr key={login.uuid}>
                            <td >
                                {name.first}
                            </td>
                            <td>
                               {name.last}
                            </td>
                            <td>
                                {phone}
                            </td>
                            <td>
                                {email}
                            </td>
                            <td>
                                {gender}
                            </td>
                        </tr>
                    )
                })
            ) : (
                    <></>
                )}
        </tbody>
    )
}

export default TableData