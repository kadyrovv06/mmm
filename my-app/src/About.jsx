import React, {Component} from "react";

class MyComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 3,
            text: "",
            message: "gg"
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1})        
    }

    decrement = () => {
        if(this.state.count > 0) {
            this.setState({count: this.state.count - 1})
        }
    }

    handleChange = (event) => {
        console.log(event);
        this.setState({text: event.target.value})
    }

    sendValue = () => {
        this.setState({message: this.state.text, text: ""}) 
        this.setState({text: "" })
    }

    let = () => {
        this.setState({})
    }

    multiplyOnclick = () => {
        let user = prompt ("San jaz")
        this.setState({count: user * this.state.count })
    }

    onClickReset = () => {
        this.setState({count: 0})
    }

    render() {
        return (
            <div style={{backgroundColor: "pink", border: "2px solid black", marginTop: "100px"}}>
                <h1>My Component</h1>
                <h2>{this.state.count}</h2>
                <button style={{color: "red"}} onClick={this.increment}>Add</button>
                <button style={{color: "green"}} onClick={this.decrement}>Minus</button>
                <button style={{color: "blue"}} onClick={this.let}>puf</button>
                <h4>{this.state.text}</h4>
                <input type="text" value={this.state.text} onChange={this.handleChange}/>
                <button onClick={this.sendValue}>SEND</button>
                <button onClick={this.multiplyOnclick} style={{backgroundColor: "orange"}}>Multiply</button>
                <button onClick={this.onClickReset} style={{backgroundColor:"red"}}>Reset</button>
                

                <h3>{this.state.message}</h3>
            </div>
        )
    }
}

export default MyComponent