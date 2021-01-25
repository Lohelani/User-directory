import React from "react";
import axios from "axios";
import { Component } from "react";
//import { render } from "react-dom";
//import API from "../../utils/API"



class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],

        }
    }

    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=50&nat=us").then((res) => {
            this.setState({ users: res.data.results })
        })
    }


    render() {
        return (
            <table className="table table-striped">

                {/* <input handleSearchChange={this.handleSearchChange}></input> */}
                <tbody>
                    <thead>

                        {this.state.users

                            .map((user) => (
                                <tr key={user.name}>
                                    <td>
                                        <img src={user.picture.thumbnail} alt="" />
                                    </td>
                                    <td>
                                        {user.name.first} {user.name.last}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.phone}
                                    </td>
                                    <td>
                                        {user.location}
                                    </td>
                                </tr>
                            ))
                        }

                    </thead></tbody>
            </table >
        )
    }

}


export default Table;





















// import { Component } from "react";
// import API from "../../utils/API";
// import TableHeader from "../TableHeader";
// import TableData from "../TableData";
// import SearchBox from "../SearchBox";

// class Table extends Component {
//     state = {
//         users: [{}],
//         filterUser: [{}],
//         order: "descend",
//     };


//     // componentDidMount() {
//     //     API.getUsers().then(res => this.setState({
//     //         users: res.data.results,
//     //         filterUser: res.data.results
//     //     })).catch(err => console.log(err));
//     // }

//     //does this work with two .then() ???
//     componentDidMount(){ 
//         API.getUsers().then(res=>console.log(res)).then(res => this.setState({
//                     users: res.data.results,
//                     filterUser: res.data.results
//                 })).catch(err => console.log(err));
//         };

//     //inputChange is where we change state ie first name last name number
//     handleSearchChange = event => {
//         console.log(event.target.value);


//         let filter = event.target.value;



//         let filteredList = this.state.users.filter((user) => {
//             let values = Object.values(user).join("").toLowerCase()
//             return values.indexOf(filter.toLowerCase()) !== -1
//         })


//         this.setState({ filterUser: filteredList, error: "" })
//     };

//     //sort function


//     render() {
//         console.log(this.state)
//         return (
//             <div>

//                 <TableHeader style={{ minHeight: "80%" }}>
//           <h1 className="text-center">Search By Breed!</h1>
//                     {/* passing in users and sort funtion */}
//                 </TableHeader>
//                 <SearchBox handleSearchChange = {this.handleSearchChange}></SearchBox>
//                 {/* <TableData results={this.state.results}>

//                 </TableData>  */}
//             </div>
//         )
//     }


// }


//export default Table;