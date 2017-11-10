import React, {Component} from "react";
import ReactDOM from "react-dom";

class App extends Component{
    render(){
        return (
            <div className="main-container">
                Hola
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("container"));