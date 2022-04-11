import React from "react";

class Child extends React.Component {
    constructor(){
        super();
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.delete);
    }

    render(){
        return(
            <header>
                Hello World!
                <button onClick={this.delete}>Delete Header</button>
            </header>
        )
    }
}
export default Child;