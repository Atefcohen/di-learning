import React from 'react';


class Form extends React.Component{

    constructor(){

        super();

        this.state = {

            firstName : '',
            lastName : '',
            age : '',
            gender : '',
            destination : '',
            nutsFree : 'No',
            lactoseFree : 'No',
            vegan : 'No'
        }
    }


    handleSubmit = e => {

        this.setState({

            firstName : '',
            lastName : '',
            age : '',
            gender : '',
            destination : '',
            nutsFree : 'No',
            lactoseFree : 'No',
            vegan : 'No'
        });
    }

    handleCheckBox = (e) => {

        let value;

        if(e.target.checked){
    
            value = "Yes";
    
        }else if(!value){
    
            value = "No";
        }

        return value;
    }


    // Function to set the state and store the values from inputs
    handleChange = e => {

        let value;

        e.target.type === "checkbox" ? value = this.handleCheckBox(e) : value = e.target.value;
       
        this.setState({[e.target.name] : value})
    }


    render(){

        return(

            <div style={{textAlign: "left"}}>

                <h1 style={{backgroundColor: "green", margin: "0px"}}>Sample form</h1>

                <form onSubmit={this.handleSubmit} style={{backgroundColor: "green", padding: "10px"}}>
                    <input type="text" name="firstName" placeholder='First Name' onChange={this.handleChange}/>
                    <br/>
                    <input type="text" name="lastName" placeholder='Last Name' onChange={this.handleChange}/>
                    <br/>
                    <input type="text" name="age" placeholder='Age' onChange={this.handleChange}/>
                    <br/>

                    <br/>
                    <input type="radio" id="male" name="gender" value="male" onChange={this.handleChange}/>
                    <label for="male">Male</label><br/>
                    <input type="radio" id="female" name="gender" value="female" onChange={this.handleChange}/>
                    <label for="female">Female</label><br/>
                    
                    <br/>
                    <h3>Select your destination</h3>
                    <select name="destination" onChange={this.handleChange}>
                        <option value="none" selected disabled hidden>--Please choose a destination--</option>
                        <option value="United States">United States</option>
                        <option value="Japan">Japan </option>
                        <option value="Israel">Israel </option>
                    </select>

                    <h3>Dietary restrictions:</h3>
                    <input type="checkbox" name="nutsFree" onChange={this.handleChange}/>Nuts free
                    <br/>
                    <input type="checkbox" name="lactoseFree" onChange={this.handleChange}/>Lactose free
                    <br/>
                    <input type="checkbox" name="vegan" onChange={this.handleChange}/>Vegan
                    <br/>

                    <input style={{width: "100px", height: "30px", margin: "30px"}} type="submit" value="SUBMIT" /> 
                </form>

                <hr />

                <div style={{padding: "10px", backgroundColor: "lightblue"}}>
                    <h1 style={{backgroundColor: "blue", color: "wheat"}}>Entered information:</h1>

                    <h3>Your name: {this.state.firstName + " " + this.state.lastName}</h3><br/>
                    <h3>Your age: {this.state.age}</h3><br/>
                    <h3>Your gender: {this.state.gender}</h3><br/>
                    <h3>Your destination: {this.state.destination}</h3><br/> 
                    <h3>Your dietary restrictions:</h3>

                    <h4>**Nuts free : {this.state.nutsFree}</h4>
                    <h4>**Lactose free : {this.state.lactoseFree}</h4>
                    <h4>**Vegan meal : {this.state.vegan}</h4>
                </div>

            </div>
        )
    }
}

export default Form;