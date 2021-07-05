import React from 'react';
import Counter from '../Counter/index';

class LifeCycleExamples extends React.Component{
    state={
        data: null
    }

    componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/todos/';

        fetch(url)
        .then(res => res.json())
        .then(data => this.setState ({data}));
    }
componentWillUnmount (){
    console.log("hello");
}

    render(){
        return(
            <div>
                <h2>Hello</h2>
                <Counter />
           
                {! this.state.data 
                    ? <h2>Loading...</h2>
                    :this.state.data.map(element =>{
                        const {id, title} = element;
                        return <p key={id}> {title} </p>
                    })
                }
            </div>
        )
    }
}

export default LifeCycleExamples;