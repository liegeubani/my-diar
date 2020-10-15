import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { loginRequest } from './../Redux/actions/userLogin'
import '../Css/login.css'

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const bodyData = this.state;
        this.props.loginApi(bodyData)
        this.setState({username:'', password:''})
    }

    render() {
        const { username, password } = this.state
       
        return (
            <div className="main-container" >
                <header className="formHeader">My Dairy</header>

                <form className="formbody" onSubmit={this.onSubmit}>
                    <header className="header-text">Login</header>
                    <div className="loginform">
                        <input
                            type="text"
                            value={username}
                            name="username"
                            onChange={this.handleChange}
                            placeholder='user-name'
                            required />

                        <input
                            type="password"
                            value={password}
                            name="password"
                            onChange={this.handleChange}
                            placeholder='password'
                            required />

                        <input
                            type="submit"
                            value="Login"
                        />
                        <div className="footer">
                            <h5>
                                Don`t have an account? <Link to="/Signup" className="signuplink" > Signup </Link>
                            </h5>
                        </div>
                    </div>
                </form>
            </div>
        )
    };
};


const mapDispatchToProps = dispatch => {
    return {
        loginApi: (data => dispatch(loginRequest(data)))
    }
}

export default connect(null, mapDispatchToProps)(Login);