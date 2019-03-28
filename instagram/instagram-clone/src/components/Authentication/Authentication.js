import React from 'react';

//HOC
const withAuthentication = Component => Login =>  
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                isLoggedIn: false,
                userName: 23423,
                userPass: 234234,
            }
        }

        handleLogin = (event) => {
            localStorage.setItem('userData', JSON.stringify(this.state));
            event.preventDefault();
            this.setState({
                isLoggedIn: true,
                userName: true,
                userPass: true,
            })
        }   

        handleLogOut = (event) => {

        }

        render() {
        if(!this.state.isLoggedIn) {
            return <Login 
                        handleLogin={this.handleLogin} 
                        userName={this.state.userName}
                        userPass={this.state.userPass}
                    />
        } else {
            return (
                <Component
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
}

export default withAuthentication