import React from "react";
//import "./Header.css";
import "../index"
import TableData from "./TableData";

function TableHeader({ users }) {
    console.log(users)
    // const column = Object.keys(users[0]);
    return (

        <table className="table table-striped">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone #</th>
                    <th>Email</th>
                </tr>
            </thead>
            <TableData users={users} />
        </table>
    )
}

export default TableHeader;