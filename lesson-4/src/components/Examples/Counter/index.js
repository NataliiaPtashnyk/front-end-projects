import React from 'react';
import { connect } from 'react-redux';
import { actionDec, actionInc } from '../redux-store/actions';

class Counter extends React.Component {

  handleInc(){
        this.props.dispatch(actionInc);
  }
  handleDec(){
        this.props.dispatch(actionDec);
  }

    render(){
       //console.log(this.props);
       return(
           <div>
               Counter!
               <h3>{this.props.countValue}</h3>
               <button onClick = {() => this.handleInc()}>+</button>
               <button onClick = {() => this.handleDec()}>-</button>
           </div>
       )
   }
}

const mapStateToProps = (state) =>{
    return {
        countValue: state 
    }
}  

export default connect(mapStateToProps)(Counter);