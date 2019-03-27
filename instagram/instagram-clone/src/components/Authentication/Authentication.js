import React from 'react';
import LoginPage from './components/LoginPage/LoginPage'

//HOC
const withAuthentication = App => Login =>  
    class Login extends React.Component {
        constructor() {
            super();
            this.state ={
                isLoggedIn: false,
            }
        }
        render() {
        if(!this.state.isLoggedIn) {
            return <LoginPage/>
        }
        return (
            <App
                data={this.props.data}
                comment={this.props.comment}
                filteredData={this.props.filteredData}
                search={this.props.search}
                addNewComment={this.props.addNewComment}
                handleChanges={this.props.handleChanges}
            />
        )
    }
}

export default withAuthentication