import React from 'react';
import {v4} from 'uuid';
import './style.css';

const list = ["Тарас", "Олег", "Василий", "Павел", "Лев"];

const ListElement = ({value}) => {
    return (
        <li>
           {value}
        </li>
    )
}
class Task2 extends React.Component{
    render(){
        return(
       <ul>
           {list.map((element) => {
               const {value} = element;
               return <ListElement key ={v4()} value = {element} />
           })}
       </ul>
        )
    }
}
export default Task2;