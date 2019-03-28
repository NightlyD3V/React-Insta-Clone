import React from 'react';
import './LoginPage.css';
import { Button } from 'reactstrap';

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
                    <input 
                        onChange={this.changeHandler} 
                        name="userName" 
                        className="user-input" 
                        placeholder="User Name" 
                        value={this.state.userName}
                        required
                        >
                    </input>
                    <input 
                        onChange={this.changeHandler} 
                        name="userPass" 
                        className="user-pass" 
                        type="password" 
                        placeholder="Password" 
                        required
                        >
                    </input>
                    <button 
                        className="login-button">
                        Next
                    </button>
                </form>
            </div>
        )
    }
} 

export default LoginPage