import React from "react";

export default class Login extends React.Component{
    handleClick = ()=>{
        localStorage.setItem('login',true);
        if(this.props.location.state){
            this.props.history.push(this.props.location.state.from)
        }
    }
    render(){
        return (
            <button onClick={this.handleClick} className="btn btn-primary">登录</button>
        )
    }
}