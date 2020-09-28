import React from 'react';
import '../Css/login.css'

class Login extends React.Component {
    state = {
        userName: '',
        userPassword: '',
        user: []

    }

    handleUsername = (e) => {
        this.setState({ userName: e.target.value })
    }

    handleUserpassword = (e) => {
        this.setState({ userPassword: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.setState({ userUpdate: this.state.user })
    }
    render() {
        const { userName, userPassword } = this.state
        console.log(this.state)
        return (
            <div className="main-container" >
                <header className="formHeader">My Dairy</header>
                <form onSubmit={this.onSubmit}>
                    <header className="header-text">Login</header>
                    <input type="text" value={userName} onChange={this.handleUsername} placeholder='user-name' />
                    <input type="password" value={userPassword} onChange={this.handleUserpassword} placeholder='password' />
                    <input type="submit" value="Login" />
                </form>
                <div className="footer">
                    <h5 className="signup">Don`t have an account?<a href="/">Sign Up</a></h5>
                </div>
            </div>
        )
    };
};

export default Login;