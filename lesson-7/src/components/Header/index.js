import React from 'react';
import '../App/App';

export default class Header extends React.Component{
    render(){
        return(
            <header className="headerStyle">
                You have <span className="propsNum">{this.props.length}</span>Todos
            </header>
            )
        }   
}