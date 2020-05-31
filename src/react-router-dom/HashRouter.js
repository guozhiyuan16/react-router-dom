import React from 'react';
import Context from './context';

export default class HashRouter extends React.Component {
    state = {
        location: { 
            pathname: window.location.hash.slice(1) || '/' ,
            state:null
        }
    }
    componentDidMount() {
        this.listener = () => {
            this.setState({
                location: {
                    ...this.state.location,
                    pathname: window.location.hash.slice(1),
                    state:this.pathState
                }
            })
        }
        window.addEventListener('hashchange',this.listener )
        window.location.hash = window.location.hash || '/'
    }
    componentWillUnmount(){
        window.removeEventListener('hashchange',this.listener);
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
                        window.location.hash = pathname;
                        that.pathState = state;
                    }else{
                        window.location.hash = to;
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