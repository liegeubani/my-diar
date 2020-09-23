import React from 'react';
import '../Css/login.css'

class Login extends React.Component {
    state = {
        userName: '',
        userPassword: null,
        user: []

    }

    handleUsername = (e) => {
        this.setState({ userName: e.target.value.toUpperCase() })
    }

    handleUserpassword = (e) => {
        this.setState({ userPassword: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        const { userName, userPassword, userUpdate } = this.state
        if (userName !== '' && userPassword !== '') {
            this.setState({ userUpdate: [userUpdate, userName, userPassword] })
        }
    }
    render() {
        const { userName, userPassword } = this.state

        return (
            <div className="main-container" >
                 
                <form onSubmit={this.onSubmit}>
                    <caption className="header-text">Login</caption>
                    <input type="text" value={userName} onChange={this.handleUsername} placeholder='user-name' />
                    <input type="password" value={userPassword} onChange={this.handleUserpassword} placeholder='password' />
                    <input type="submit" value="Login" />
                </form>
                <div className="footer">
                    <h5 className="forgotpassword"><span>forgot</span> <a href="/">password?</a></h5>
                    <h5 className="signup"><span>create account?</span> <a href="/">Sign Up</a></h5>
                   </div>
            </div>
        )
    };
};

export default Login;