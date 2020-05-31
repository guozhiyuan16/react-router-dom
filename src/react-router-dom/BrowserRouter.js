import React from 'react';
import Context from './context';
// pushstate原生不支持
(function(history){
    let oldPushState = history.pushState;
    history.pushState = function(state,title,path){
        oldPushState.call(history,state,title,path);
        window.onpushstate&&window.onpushstate(state,path)
    }
})(window.history)
export default class BrowserRouter extends React.Component {
    state = {
        location: { 
            pathname: '/' ,
            state:null
        }
    }
    componentDidMount() {
        window.onpopstate = window.onpushstate = (state,pathname) =>{
            this.setState({
                location: {
                    ...this.state.location,
                    pathname,
                    state
                }
            })
        }
    }
    render() {
        let that = this;
        let value = {
            location:this.state.location,
            history:{
                push(to){
                    if(that.block){
                        let allow = window.confirm(that.block(that.state.location));
                        if(!allow) return; // 如果不离开就不往下走了
                    }
                    if(typeof to == "object"){
                        let {pathname,state} = to;
                        window.history.pushState(state,'',pathname);
                    }else{
                        window.history.pushState('','',to)
                    }   
                },
                block(message){
                    that.block = message;
                }
            }
        }
        return <Context.Provider value={value}>
            {this.props.children}
        </Context.Provider>
    }
}