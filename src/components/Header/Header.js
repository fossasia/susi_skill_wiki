import React from 'react';
import Button from "antd/es/button/button";
import Cookies from 'universal-cookie';
import {Dialog} from "material-ui";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/SignUp/SignUp";
import colors from "../../Utils/colors";
var deleteCookie = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
const cookies = new Cookies();

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showLogout: false,
            open:false
        }
    }

    componentDidMount() {
        console.log(cookies.get('loggedIn'))
        if(!cookies.get('loggedIn')) {
            this.setState({showLogout: false});
        }
        else
            this.setState({open: false,showLogout:true});
    }
    handleOpen = () => {
        this.setState({open: true});
        console.log("asd");
    };

    logout = () => {
        deleteCookie('loggedIn');
        deleteCookie('serverUrl');
        deleteCookie('email');
        window.location.reload();
    };

    render() {

        return (

            <div style={styles.header}>
                { !this.state.showLogout ?
                    <div>
                        <Button style={styles.buttonMargin}>Register</Button>
                        <Button onClick={this.handleOpen} style={styles.buttonMargin}>Login</Button>
                    </div>
                    :
                    <Button onClick={this.logout} style={styles.buttonMargin}>Logout</Button>

                }
                <Dialog
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <SignUp {...this.props} />
                </Dialog>
            </div>
        );
    }
}

const styles = {
    header: {
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        background: colors.header,
        zIndex: 9,
        padding: "0 30px",
        color: "#fff",
        fontSize: "16px",
    },
    buttonMargin:{
        margin:"10px"
    }
};