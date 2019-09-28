import React, { Fragment, Component } from "react";
import CardList from "./components/CardList/CardList";
import Search from "./components/Search/Search";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ""
    };
  }

  url = "https://jsonplaceholder.typicode.com/users";

  componentDidMount() {
    fetch(this.url)
      .then(res => res.json())
      .then(data => this.setState({ monsters: data }));
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { monsters, search } = this.state;
    const searchResults = monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <Fragment>
        <Search
          placeholder="Search monsters..."
          handleChange={this.handleChange}
        />
        <CardList monsters={searchResults} />
      </Fragment>
    );
  }
}

export default App;
