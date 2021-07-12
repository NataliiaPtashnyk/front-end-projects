import React from 'react';

export default class List extends React.Component{
    render(){

    const divStyle = {
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'space-around',
    };
        return(
                <ul>
                    {this.props.list.map(element =>{
                    const {id, value} = element;
                    return <div style={divStyle}> 
                        <li key={id}>{value}</li> <button>X</button>
                        </div>
                    })} 
                </ul>
            
        )
    }
}