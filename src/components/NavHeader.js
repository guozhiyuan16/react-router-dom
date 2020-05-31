import React from 'react';
import {withRouter} from '../react-router-dom';

class NavHeader extends React.Component{
    render(){
        return (
            
         <div className="navbar-heading">
            <a className="navbar-brand" onClick={()=>{
                this.props.history.push('/')
            }}>路由实现</a>
          </div>
        )
    }
}


export default withRouter(NavHeader)