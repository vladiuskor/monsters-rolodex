import {Component} from "react";

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters: [],
            searchField: ''
        }
        console.log('1) Constructor');
    }

    componentDidMount() {
        console.log('3) ComponentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users =>
                this.setState(() => {
                        return {monsters: users}
                    },
                    () => {
                        console.log(this.state)
                    }))
            .catch(err => console.log(err))
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLowerCase();
        this.setState(() => {
            return {searchField}
        })
    }

    render() {
        console.log('2) Render');

        const {monsters, searchField} = this.state;
        const {onSearchChange} = this; // Interesting method destructuring!

        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));

        return (
            <div className="App">
                <input
                    type="search"
                    className="search-box"
                    placeholder="search monsters"
                    onChange={onSearchChange}
                />
                {filteredMonsters.map((monster) => {
                    return (
                        <div key={monster.id}>
                            <h1>{monster.name}</h1>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default App;
