import React from 'react';

export default class User extends React.Component {
    state = {
        user: {}
    }
    componentDidMount() {
        let user = this.props.location.state;
        if(!user){
            let usersStr = localStorage.getItem('users');
            let users = JSON.parse(usersStr);
            user = users.find(user => {
                return user.id === parseInt(this.props.match.params.id)
            });
        }
        this.setState({ user });
    }
    render() {
        let user = this.state.user;
        return (
            <div>
                id:{user.id} 姓名:{user.username}
            </div>
        )
    }
}