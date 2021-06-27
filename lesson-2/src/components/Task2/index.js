import React from 'react';
import "./Task2.css"

function SayHi(props) {
    return <h1>Hello, {props.name}. <br/>It's {props.weather} outside!</h1>;
  }

class Task2 extends React.Component{
    render(){
        return(
            <div className="Task2">
                <div className="kate">
                    <SayHi name="Kate" weather="sunny"/>
                    </div>
                    <div className="nina">
                    <SayHi name="Nina" weather="cloudy"/>
                    </div>
                    <div className="john">
                    <SayHi name="John" weather="windy"/>
                    </div>
                    <div className="olga">
                    <SayHi name="Olga" weather="raining"/>
                    </div>
            </div>
            
        )
    }
}


export default Task2;