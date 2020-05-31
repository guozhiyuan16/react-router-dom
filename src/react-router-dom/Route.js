import React from 'react';
import Context from './context';
import {pathToRegexp} from 'path-to-regexp';

export default class Route extends React.Component {
    static contextType = Context

    render() {
        let {pathname} = this.context.location; // /user/detail/1590636584693
        let {path='/',exact=false,component:Component,render,children} = this.props; // /user/detail/:id
        let key = [];
        let regExp = pathToRegexp(path,key,{end:exact});
        let result = pathname.match(regExp);
        let props = {
            location:this.context.location,
            history:this.context.history,
        }
        if(result){ // path和地址栏路径匹配上了
            let {url,...values} = result;
            let params = key.map(item=>item.name); // [id]
            params = params.reduce((prev,next,index)=>{
                console.log(prev,next)
                prev[next] = values[index+1]
                return prev;
            },{}) // {id:"1590636584693"}
            props.match = {
                url:pathname,
                path,
                isExact:pathname === url,
                params
            }
            if(Component){
                return <Component {...props}/> // 只要用Route渲染的组件就都会有location,history,match 属性
            }else if(render){ // render 只会在path和地址栏路径匹配的时候才渲染
                return render(props)
            }else if(children){
                return children(props);
            }
        }else if(children){// children 不管路径是否匹配，都会渲染返回值；
            return children(props);
        }else{
            return null;
        }
        
    }
} 


// match:{
//     isExact: false
//     params: {id: "1590636584693"}
//     path: "/user/detail/:id"
//     url: "/user/detail/1590636584693"
// }
