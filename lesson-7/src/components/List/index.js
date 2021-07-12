import React from 'react';
import '../App/App';

export default class List extends React.Component{
    handleClick(id){
        this.props.onDelete(id);
    }
    render(){
        return(
            <ul>
                {this.props.list.map(element =>{
                    const {id, value} = element;
                    return ( 
                        <li key={id}>
                            <span>{value}</span>
                            <button className="input__btn" onClick={()=>this.handleClick(id)}>Delete</button>
                        </li> 
                        )
                    })}
            </ul>
        )
    }
}