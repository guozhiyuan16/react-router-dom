import React from 'react';
import { Prompt } from '../react-router-dom';

export default class User extends React.Component {
    usernameRef = React.createRef();
    state = {
        isBlock : false
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        let username = this.usernameRef.current.value;
        let usersStr = localStorage.getItem('users');
        let users = JSON.parse(usersStr) || [];
        let user = {
            id:Date.now(),
            username
        }
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users));
        this.props.history.push('/user/list');
    }
    handleChange = () =>{

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Prompt 
                    when={this.state.isBlock}
                    message = {location=>`请问你是否确定要跳到${location.pathname}吗？`}
                />
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input onChange={event=>this.setState({isBlock:event.target.value&&event.target.value.length!==""})} type="text" className="form-control" id="username" placeholder="请填写用户名" ref={this.usernameRef}/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        )
    }
}