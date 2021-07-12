import React from 'react';
import Header from '../Header';
import SubmitForm from '../SubmitForm';
import List from '../List';
import { v4 } from 'uuid';

export default class ToDoList extends React.Component{
 state={
     list: []
 }
 constructor(props){
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleSubmit(value){
     const data = {
         id: v4(),
         value
     }
     this.setState({
         list : [...this.state.list, data]
     })
 }
    render(){
    return (
    <div>
           <Header length={this.state.list.length}/>
            <SubmitForm onSubmit={this.handleSubmit} />
            <List list={this.state.list}/>
    </div>)
}
}