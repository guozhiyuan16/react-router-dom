import React from 'react';
import Context from './context';

export default class Link extends React.Component{
    static contextType = Context
    render(){
        let pathname = this.props.to;
        if(typeof pathname === 'object'){
            pathname = this.props.to.pathname;
        }
        return (
            
            <a className={this.props.className} href={`#${pathname}`} onClick={(event=>{
                event.preventDefault()
                this.context.history.push(this.props.to)
            })}>{this.props.children}</a>
        )
    }
}