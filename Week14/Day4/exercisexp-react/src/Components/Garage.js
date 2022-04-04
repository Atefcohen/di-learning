import React from 'react'

class Garage extends React.Component{

    constructor() {

        super();
    }


    render() {

        return(

            <>
                <h1>{`Who lives in my ${this.props.size} Garage?`}</h1>
            </>
        )
    }
}

export default Garage