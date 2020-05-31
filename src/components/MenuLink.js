import React from 'react';
import {Route,Link} from '../react-router-dom';
import "./MenuLink.css"
// 匹配上加activ类名，没有匹配上不加，匹不匹配还需要route来实现
// children 不管路径是否匹配，都会渲染返回值；render 只会在path和地址栏路径匹配的时候才渲染
export default class MenuLink extends React.Component{
    render(){
        return (
            <Route exact={this.props.exact} path={this.props.to} children={props=>{
                return <Link className={props.match?"active":""} exact={this.props.exact} to={this.props.to}>{this.props.children}</Link>
            }}>
        </Route>
        )
    }
}