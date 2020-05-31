import React from 'react';
import Context from './context';
export default class Redirect extends React.Component{
    static contextType = Context;
    render(){
        if(!this.props.from || this.props.from === this.context.location.pathname){
            this.context.history.push(this.props.to)
        }
        return null
    }
}