import React from 'react';

export default class SubmitForm extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            value: ''
        }
         }
        
         handleChange(e){
             this.setState({
                 value:e.target.value
             });
             }

        handleSubmit(e){
            e.preventDefault();
            this.props.onSubmit(this.state.value);
            this.setState({
                value: ''
            });
        }
        
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter todo" onChange={this.handleChange}/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}