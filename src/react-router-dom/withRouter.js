import React from 'react';
import Route from './Route';
// 只有用Route渲染的组件才会有 location , history ,match 属性;
// 如果不是用Route渲染出来的组件但是想要上述属性，就用withRouter包起啦
export default function withRouter(Component){
    return ()=><Route  component={Component}/> // 这里返回的要是一个组件
}
