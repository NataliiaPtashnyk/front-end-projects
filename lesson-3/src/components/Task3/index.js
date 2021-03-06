import React from 'react';
import './style.css';

class Task3 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
    };
    render(){
        return(
<div>
    <div className="value">
    {this.state.value}
    </div>
    
    <div>
        <button className='btn' onClick={() => this.setState({ value: this.state.value + 1})}>+</button>
        <button className='btn' onClick={() => this.setState({ value: this.state.value - 1})}>-</button>
    </div> 
    
</div>
        )
    }
}

export default Task3;