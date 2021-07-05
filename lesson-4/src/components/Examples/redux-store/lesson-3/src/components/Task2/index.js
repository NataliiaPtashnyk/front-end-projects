import React from 'react';
 
const nameList = ['John', 'Olga', 'Vasyl', 'Inna', 'Tom'];
const list = [];

// I know it's easier to use .map 
nameList.forEach((item, i) => list.push(<li key={item+i}>{item}</li>));

class Task2 extends React.Component{
    render(){
        return(<ol>{list}</ol>)
    }
}
export default Task2;