import React from 'react'
import Garage from './Garage'


class Car extends React.Component{

    constructor() {

        super();
        this.state = { color : 'red' };
    }


    render() {

        console.log(this.props)

        const {carInfo} = this.props;
        const {name, model} = carInfo;

        return(

            <header>
                <h1>{`This car is ${this.state.color} ${model}`}</h1>
                <Garage size={'small'}/>
            </header>
        )
    }
}

export default Car