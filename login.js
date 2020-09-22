import React from 'react';
import './login.css'

class Login extends React.Component {
    state = {
        userName: '',
        userPassword: null,
        userUpdate:[]

    }

    handleUsername = (e) => {
        this.setState({ userName: e.target.value.toUpperCase() })
    }

    handleUserpassword = (e) => {
        this.setState({ userPassword: e.target.value })
    }
    onSubmit = e => {   
        const {userName,userPassword,userUpdate} = this.state
        e.preventDefault()
        if(userName !== '' && userPassword !== ''){
        this.setState({userUpdate: [userUpdate, userName, userPassword]})
        }
    }
    render() {
        const { userName, userPassword } = this.state
       
        return (
            <div className="ui segment containe" >
                <form className="ui form" onSubmit={this.onSubmit}>
                    <caption  className="ui header container teal">Login</caption>
                    <label>Username:</label>
                    <input value={userName} onChange={this.handleUsername} placeholder='user-name' />
                    <legend>password:</legend>
                    <input type="password" value={userPassword} onChange={this.handleUserpassword} placeholder='password' />
                    <input type="submit" value="Login" className="ui button container teal" />   
                </form>
                <a href="/">forgotten pass</a>
            </div>
        )
    };
};

export default Login;