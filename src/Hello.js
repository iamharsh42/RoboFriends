import React, {Component} from "react";
import './Hello.css';

class Hello extends Component{
    render(){
        return(
            <div className="f1 tc">
                <h1>Hello World</h1>
                <p>This is my first react component.</p>
            </div>
        )
    }
}

export default Hello;