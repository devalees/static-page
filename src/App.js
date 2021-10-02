import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }
  async componentDidMount() {
    try {
      const fetchedAPI = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const users = await fetchedAPI.json();
      this.setState({ monsters: users });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1> Monsters Relodex</h1>
        <SearchBox
        placeholder = 'search monster'
        handleChange = {e => this.setState({ searchField: e.target.value })}
        />
        
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
