import React from 'react';
import Context from './context';
import {pathToRegexp} from 'path-to-regexp'
export default class Switch extends React.Component{
    static contextType = Context;
    render(){
        let children =  this.props.children || [];
        let pathname = this.context.location.pathname;
        for(let i = 0 ; i< children.length;i++){
            let child = children[i]
            let {path='/',exact=false,component:Component} = child.props;
            let params = [];
            let regExp = pathToRegexp(path,params,{end:exact})
            let result = pathname.match(regExp);
            if(result){
                return child // 这里需要返回整个组件，如果只返回Component就需要自己处理传递
            }
        }
        return null
    }
}