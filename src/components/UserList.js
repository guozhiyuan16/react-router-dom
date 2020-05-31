import React from 'react';
import {Link} from '../react-router-dom';

export default class UserList extends React.Component {
    render() {
        let usersStr = localStorage.getItem('users');
        let users = JSON.parse(usersStr)||[];
        return (
            <ul className="list-group">
                {
                    users.map((user,index) => {
                    return (<li key={index} className="list-group-item">
                        {/* <Link to={`/user/detail/${user.id}`}>{user.username}</Link> */}
                        <Link to={{pathname:`/user/detail/${user.id}`,state:user}}>{user.username}</Link>
                    </li>)
                    })
                }
            </ul>
        )
    }
}