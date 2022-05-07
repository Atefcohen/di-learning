import React from "react";
import { connect } from "react-redux";
import {increaseCount, decreaseCount} from '../redux/action';

class Counter extends React.Component{


    render(){

        return(
            <>
                <button onClick={this.props.handleLeftClickBtt}>+</button>
                <h1>{this.props.counter_value}</h1>
                <button onClick={this.props.handleRightClickBtt}>-</button>
            </>
        )
    }

}

const mapStateToProps = (state) => {

    return{
            counter_value : state.count
    }
}


const mapDispatchToProps = (dispatch) => {

    return{
            handleLeftClickBtt : () => dispatch(increaseCount()),
            handleRightClickBtt : () => dispatch(decreaseCount()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)