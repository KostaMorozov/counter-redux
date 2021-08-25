import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from './counter';
import HeaderCounter from './headerCounter';
import * as valueCount from '../consts/consts'
import * as actions from '../store/counterReducer';

class Container extends Component {

     handleCounter = (actionType)=>{
         let {counter} = this.state;
         switch(actionType){
            case 'INC':
                counter=counter+1;
                this.setState({counter})
                break;
            case 'ADD':
                counter=counter+5;
                this.setState({counter})
                break;
            case 'DEC':
                counter=counter-1;
                this.setState({counter})
                break;
            case 'SUB':
                counter=counter-5;
                this.setState({counter})
                break;
         }
     }
    render() { 

        return ( 
            <div>
            <div className='row'>
                <HeaderCounter counter={this.props.storeCounter}/>

            </div>
            <div className='buttons-row'>
                <Counter onCounterChange={this.props.incrementCounter} innerText={valueCount.INCREMENT}/>
                <Counter  onCounterChange={this.props.addCounter} innerText={valueCount.ADD}/>
                <Counter  onCounterChange={this.props.decrementCounter} innerText={valueCount.DECREMENT}/>
                <Counter  onCounterChange={this.props.subtracאCounter} innerText={valueCount.SUBSTRACT}/>
            </div>
            </div>
         );
    }
}

const mapStateToProps = (state)=> {
    return{
        storeCounter : state.counter
    }
    
}

const mapDispatchToProps = (dispatch)=> {
    return{
    incrementCounter : ()=>{dispatch({type:actions.INCREMENT_COUNTER,payload:{value:valueCount.INCREMENT}})},
    addCounter : ()=>{dispatch({type:actions.ADD_COUNTER,payload:{value:valueCount.ADD}})},
    decrementCounter : ()=>{dispatch({type:actions.DECREMENT_COUNTER,payload:{value:valueCount.DECREMENT}})},
    subtracאCounter : ()=>{dispatch({type:actions.SUBTRACT_COUNTER,payload:{value:valueCount.SUBSTRACT}})}
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Container);