import { Component } from "react";
import API from "../utils/API";
import TableHeader from "./TableHeader";
import SearchBox from "./SearchBox";

class Table extends Component {
    state = {  
            users: [{}],
            filterUser: [{}],
            order: "descend"
    };


    componentDidMount() {
        API.getUsers().then(res => this.setState({
            users: res.data.results,
            filterUser: res.data.results
        })).catch(err => console.log(err));
    };


    //inputChange is where we change state ie first name last name number
    handleSearchChange = event => {
        console.log(event.target.value);
        let filter = event.target.value;
        let filteredList = this.state.users.filter((user) => {
            let values = Object.values(user).join("").toLowerCase()
            return values.indexOf(filter.toLowerCase()) !== -1
        })

        this.setState({ filterUser: filteredList, error: "" })
    };

    render() {
        console.log(this.state)
        return (
            <div>
                <SearchBox handleSearchChange = {this.handleSearchChange} />
                <TableHeader users={this.state.filterUser} />
            </div>
        )
    }
}


export default Table;