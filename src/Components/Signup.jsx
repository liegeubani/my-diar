import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {signupRequest} from './../Redux/actions/userAction';




import '../Css/signup.css'

class Signup extends React.Component {
    state = {
        fullname:'',
        email:'',
        username: '',
        password: '',
    }

    handleChange = e => {
       this.setState({
           [e.target.name]: e.target.value
       })
    }
   
    onSubmit = (e) => {
        e.preventDefault();
        const bodyData = this.state;

        this.props.signupApi(bodyData)

        // axios.post('https://your-diary.herokuapp.com/api/v1/auth/signup', bodyData).then(result => {
        //    console.log(result, '________result')

        // }).catch(e => console.log(e.message, '______error______'))
         
    }


    render() {
        const { fullname, email,username, password } = this.state
        return (
            <div className="signup-container" >
                <header className="formHeader">My Dairy</header>

                <form className="formbody" onSubmit={this.onSubmit}>
                    <header className="header-text">Signup</header>
                    <div className="loginform">
                                                                                                                                  
                        <input 
                        type="text" 
                        value={fullname}
                        onChange={this.handleChange} 
                        placeholder="Enter-fullName"
                        name="fullname"
                         
                         />
                        <input type="text" value={email} onChange={this.handleChange} placeholder="Enter email" name="email"/>
                        <input type="text" value={username} onChange={this.handleChange} placeholder='user-name' name="username" required />
                        <input type="password" value={password} onChange={this.handleChange} placeholder='password' required name="password" />
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

// const mapStateToProps = (state) => ({
    
// })

const mapDispatchToProps = dispatch  => {
    return {
        signupApi: (datas) => dispatch(signupRequest(datas))
    }
}


export default connect(null, mapDispatchToProps)(Signup)