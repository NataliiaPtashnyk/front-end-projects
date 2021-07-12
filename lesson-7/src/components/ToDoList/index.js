import React from 'react';
import Header from '../Header';
import SubmitForm from '../SubmitForm';
import List from '../List';
import '../App/App';
import { v4 } from 'uuid';

export default class ToDoList extends React.Component{
 state={
     list: []
 }
 constructor(props){
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleDelete = this.handleDelete.bind(this);
 }
handleSubmit(value){
     const data = {
         id: v4(),
         value
     }
     if(value){
        this.setState({
            list : [...this.state.list, data]
        });
     }
 }
handleDelete(id){
        this.setState({
            list : this.state.list.filter(element => element.id !== id)
        });
     }
    render(){
    return (
        <div className="div__form">
            <Header length={this.state.list.length}/>
            <SubmitForm onSubmit={this.handleSubmit} />
            <List list={this.state.list} onDelete={this.handleDelete}/>
        </div>)
    }
}