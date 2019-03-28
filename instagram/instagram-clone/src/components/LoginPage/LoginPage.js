import React from 'react';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <form>
                    <input></input>
                    <button onClick={this.props.handleLogin}>Submit</button>
                </form>
            </div>
        )
    }
} 

export default LoginPage