import React from 'react';
import { Link } from 'react-router-dom'
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

                <form className="formbody" onSubmit={this.onSubmit}>
                    <header className="header-text">Login</header>
                    <div className="loginform">
                        <input type="text" value={userName} onChange={this.handleUsername} placeholder='user-name' required />
                        <input type="password" value={userPassword} onChange={this.handleUserpassword} placeholder='password' required />
                        <input type="submit" value="Login" />
                        <div className="footer">
                            <h5>
                                Don`t have an account? <Link to="/sign-up" className="signuplink" > Signup </Link>
                            </h5>
                        </div>
                    </div>
                </form>
            </div>
        )
    };
};

export default Login;