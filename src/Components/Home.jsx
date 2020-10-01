import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./../Css/Home.css";

class Home extends Component {



  render() {
    return (
      <div className="home-container">
        <div className="topic">
          <h1 className="app-name">My Diary</h1>
          <p className="app-discription">Online Journal</p>
          <p className="record">
            Whether you're looking for a tool to record your daily emotions....
          </p>
        </div>
        <div className="signinBtnWrapper">
        <Link to="/login"> <button className="home-button">Signin</button></Link>
          <p className="account">
            Don't have an account? <Link to="/signup" className="home-signup">Signup</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
