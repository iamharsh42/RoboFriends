import React, { Component } from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import Searchbox from "./Searchbox";
import "./App.css";
import Scroll from "./Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  // componentDidMount is a react function which we can use

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h2 className="f1">ROBO-FRIENDS</h2>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <Cardlist robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
