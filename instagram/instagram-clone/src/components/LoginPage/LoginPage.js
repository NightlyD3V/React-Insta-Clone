import React from 'react';
import './LoginPage.css';
import { Button, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';


class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            userPass: "",
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        })
    }

    

    render() {
        return (
            <div className="login-container">
                <h1 className="header">React InstaClone</h1>
                <h1 className="header">Please Login</h1>
                <form className="form" onSubmit={this.props.handleLogin}>
                    <FormGroup className="form">
                    <InputGroup className="user-input">
                        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                        <Input
                            onChange={this.changeHandler} 
                            name="userName" 
                            placeholder="User Name..." 
                            value={this.state.userName}
                            required
                            >
                        </Input>
                    </InputGroup>
                    <InputGroup className="user-pass">
                        <Input 
                            onChange={this.changeHandler} 
                            name="userPass" 
                            type="password" 
                            placeholder="Password..." 
                            required
                            >
                        </Input>
                    </InputGroup>
                        <Button outline color="primary" 
                            className="login-button">
                            Login
                        </Button>
                    </FormGroup>
                </form>
            </div>
        )
    }
} 

export default LoginPage