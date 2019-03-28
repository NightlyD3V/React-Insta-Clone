import React from 'react';

//HOC
const withAuthentication = Component => Login =>  
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                isLoggedIn: false,
            }
        }

        handleLogin = () => {
            this.setState({
                isLoggedIn: true,
            })
        }

        render() {
        if(!this.state.isLoggedIn) {
            return <Login handleLogin={this.handleLogin}/>
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