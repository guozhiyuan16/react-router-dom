import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from './react-router-dom'
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import Login from './components/Login';
import Protected from './components/Protected';
import MenuLink from './components/MenuLink';
import NavHeader from './components/NavHeader';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <>
    <Router>
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <NavHeader />
          <ul className="nav navbar-nav">
            <li><MenuLink exact={true} to="/">首页</MenuLink></li>
            <li><MenuLink to="/user">用户</MenuLink></li>
            <li><MenuLink to="/profile">个人详情</MenuLink></li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/user" component={User} />
        <Route path="/login" component={Login} />
        <Protected path="/profile" component={Profile} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </>,
  document.getElementById('root')
);
