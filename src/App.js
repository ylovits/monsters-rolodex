import React, { Component } from "react";
import CardList from "./components/CardList/CardList";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  url = "https://jsonplaceholder.typicode.com/users";

  componentDidMount() {
    fetch(this.url)
      .then(res => res.json())
      .then(data => this.setState({ monsters: data }));
  }

  render() {
    return <CardList monsters={this.state.monsters} />;
  }
}

export default App;
