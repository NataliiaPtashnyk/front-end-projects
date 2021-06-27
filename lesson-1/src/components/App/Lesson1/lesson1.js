import React from 'react';
import img1 from '../../../assets/img/img1.jpeg';

const task1 = (
  <h1>Hello world!</h1>
);
const task2 = (
  <div>
    <h3>Hello, kitty</h3>
    <img src={img1}></img>
  </div>
)
const lesson1 = (
  <ol>
    <li>{task1}</li>
    <li>{task2}</li>
  </ol>
)

class Lesson1 extends React.Component{
  render(){
    return(
    <div>{lesson1}</div>)
      
    }
  };

export default Lesson1;