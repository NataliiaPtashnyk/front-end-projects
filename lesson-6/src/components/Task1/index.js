import React from 'react';
import './index.scss';

class Task1 extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <input type="password" placeholder="Enter your pass"></input>
                    <input type="login" placeholder="Enter your login"></input>
                    <input type="button" value="Log in"></input>
                </form>
            </div>
            
        );
    }
}


export default Task1;