import React from 'react';

class Task4 extends React.Component{
    componentWillUnmount (){
       alert("Element is hidden!`");
    }
render(){
    return(
        <div>
            <p>Task 4</p>
            </div>
    )
}
}

export default Task4;