import { Component } from "react";
import "./App.css";
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
  render() {
    var filteresMonsters = this.state.monsters.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="home">
        <input
          className="search-box"
          type="search"
          placeholder="type name"
          onChange={(event) => {
            var searchableString = event.target.value.toLocaleLowerCase();

            this.setState(() => {
              return {
                searchField: searchableString,
              };
            });
          }}
        />
        {filteresMonsters.map((monsters) => {
          return <h1 key={monsters.name}>{monsters.name}</h1>;
        })}
      </div>
    );
  }
}
export default App;
