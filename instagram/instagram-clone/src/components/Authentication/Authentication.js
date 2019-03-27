import React from 'react';

//HOC
const withAuthentication = App => Login =>  
    class extends React.Component {
            state = {
                isLoggedIn: false,
            }

        handleLogin = (event) => {
            event.preventDefault();
            console.log('loggedIn');
            this.setState({
                isLoggedIn: true,
            })
        }

        render() {
        if(!this.state.isLoggedIn) {
            return <Login handleLogin={this.handleLogin}/>
        } else {
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
}

export default withAuthentication