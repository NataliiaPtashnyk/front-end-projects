import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import img1 from './img1.jpeg';

// const helloWorld = (
//   <img src={img1}></img>
// );

// const helloKitty = (
//   <h3>Hello, Kitty</h3>
// );

const task1 = (
  <h1>Hello world!</h1>
);
const task2 = (
  <div>
    <h3>Hello, kitty</h3>
    <img src={img1}></img>
  </div>
)
const paragraf = (
  <p></p>
)

const lesson1 = (
  <ol>
    <li>{task1}</li>
    <li>{task2}</li>
    <li>{Task3()}</li>
  </ol>
 
)
function Task3(){
  let x = prompt("Введите строку");
  return x;
}
ReactDOM.render(
  lesson1
  ,
  document.getElementById('root')
);

// ReactDOM.render(
//   helloKitty
//   ,
//   document.getElementById('header')
// );

// ReactDOM.render(
//   helloWorld
//   ,
//   document.getElementById('main')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
