import React from "react";
//import "./Header.css";
import "../index"
import TableData from "./TableData";

function TableHeader ({users}) {
    console.log(users)
    return (
        
        <table>
        <thead>
        <tr>
          <th>Phone #</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <TableData users={users}/>
</table>
    )
}

export default TableHeader;