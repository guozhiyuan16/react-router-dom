import React from 'react';
import {Route,Redirect} from '../react-router-dom'
export default class Protected extends React.Component{
    render(){
        let {path,component:Component} = this.props;
        return <Route path={path} render={(props)=>{
            return localStorage.getItem('login')?<Component {...props}/>:<Redirect to={{pathname:"/login",state:{from:props.location.pathname}}}/>
        }}/>
    }
}