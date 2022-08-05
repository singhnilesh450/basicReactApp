import { Component } from "react";
import "./App.css";
import CardList from "./Components/card-list/card-list.component";
import SearchBox from "./Components/search-box/search-box.component";
import "./main.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    var filteresMonsters = this.state.monsters.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <SearchBox
          className="search"
          placeholder="monster-search"
          onChangeHandler={this.onSearchChange}
        />
        <CardList monsters={filteresMonsters} />
      </div>
    );
  }
}
export default App;
