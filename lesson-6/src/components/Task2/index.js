import React from 'react';
import styles from './task2.module.css';

class Task2 extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            login: '',
            pass: '',
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleInput(event) {
        event.target.className = event.target.value ? styles.input__main : styles.input__error;
        this.setState({[event.target.id]: event.target.value});
    }
    
    handleSubmit(event){
        let validated = true;

        Object.entries(this.state).forEach(([key, value]) => {
            document.getElementById(key).className = value ? styles.input__main : styles.input__error;
            
            if (!value) {
                validated = false;
                event.preventDefault();
            }
        });

        if (validated) {
            console.log('submit success');
        }
    }

render(){
   
    return(
        <form className={styles.form} onSubmit={this.handleSubmit}>
            <input id="login" className={styles.input__main} type="login" placeholder="Enter your login"  value={this.state.login} onChange={this.handleInput} />
            <input id="pass" className={styles.input__main} type="password" placeholder="Enter your pass" value={this.state.pass} onChange={this.handleInput} />
            <button className={styles.btn} type="submit">Log in</button>
        </form>
    );
}

}
export default Task2;