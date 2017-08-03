import React, {Component} from 'react';
import './ListUser.css';
import StaticAppBar from '../../StaticAppBar/StaticAppBar.react';
import $ from 'jquery';
// import Dialog from 'material-ui/Dialog';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    // TableRowColumn,
} from 'material-ui/Table';


export default class ListUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: [],
            fixedHeader: false,
            fixedFooter: false,
            stripedRows: false,
            showRowHover: true,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: false,
            height: '300px',
            visible: false,
        }
    }

    componentDidMount() {

        let url;
        url = "http://api.susi.ai/aaa/account-permissions.json";
        $.ajax({
            url: url,
            dataType: 'jsonp',
            jsonpCallback: 'py',
            jsonp: 'callback',
            crossDomain: true,
            success: function (response) {
                console.log(response.userRole)
                if (response.userRole !== "admin") {
                    console.log("Not an admin")
                } else {
                    this.fetchUsers();
                    console.log("Admin")
                }
            }.bind(this),
            error: function (errorThrown) {
                console.log(errorThrown)
            }
        });
    }

    fetchUsers = () => {
        let url;
        url = "http://api.susi.ai/aaa/getAllUsers.json";
        let self = this;
        $.ajax({
            url: url,
            dataType: 'jsonp',
            jsonpCallback: 'pu',
            jsonp: 'callback',
            crossDomain: true,
            success: function (data) {
                console.log(data.username)
                data = data.username
                let keys = Object.keys(data);
                let username = keys.map((el, i) => {
                    return (
                        <div>
                        </div>
                    )
                });
                self.setState({
                    username : username,
                })
                console.log(self.state)
            },
            error: function (errorThrown) {
                console.log(errorThrown)
            }
        });
    }

    render() {
        return (
            <div>
                <div>
                    <StaticAppBar {...this.props} />
                    <div className="banner">
                        <h1 className="h1">Registered Users</h1>
                    </div>
                </div>
                <div>
                    <Table
                        height={this.state.height}
                        fixedHeader={false}
                        fixedFooter={false}
                        selectable={false}
                        multiSelectable={false}
                        style={{marginTop: 10}}
                    >
                        <TableHeader
                            displaySelectAll={false}
                            adjustForCheckbox={false}
                            enableSelectAll={false}
                        >

                            <TableRow>
                                <TableHeaderColumn tooltip="Name">Name</TableHeaderColumn>
                                <TableHeaderColumn tooltip="E-mail">Email ID</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Signup">Signup</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Last Login">Last Login</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Last Login IP">IP of Last Login</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                            showRowHover={this.state.showRowHover}
                            stripedRows={this.state.stripedRows}>
                        </TableBody>

                    </Table>
                </div>
            </div>
        );
    }
}
