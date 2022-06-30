import {Component} from "react";

import CardList from "./components/card-list/cardList.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users =>
                this.setState(() => {
                        return {monsters: users}
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

        const {monsters, searchField} = this.state;
        const {onSearchChange} = this; // Interesting method destructuring!

        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));

        return (
            <div className="App">

                <SearchBox
                    className="search-box"
                    placeholder="search monsters"
                    onChangeHandler={onSearchChange}
                />
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
