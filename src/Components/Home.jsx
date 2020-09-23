import React, { Component } from 'react';
import './../Css/Home.css' ;
import myImg from "./../diaryPic2.jpg"


class Home extends Component{
    render(){
        return(
            <div className= "body">
            <div className= "pic">
                <img src ={myImg} alt= "n" width= "1290" height= "425" />
            </div>
           <h1>My Diary</h1>
          <p>Pen down your thought on the go ...</p>
          <button>Get Started</button>
                
            </div>
        )
    }
}

export default Home;