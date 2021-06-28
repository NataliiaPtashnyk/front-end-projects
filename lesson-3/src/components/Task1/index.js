import React from 'react';

const helloWorld = React.createElement(
    'p',
{fontWeight: '600'},
    'Hello world!'
)

class Task1 extends React.Component{
    render(){
        return(
            <div>
{helloWorld}
            </div>
            
        )
    }
}

export default Task1;