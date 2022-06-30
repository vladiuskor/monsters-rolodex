import {useState, useEffect} from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import './App.css';

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setMonsters(users))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    }

    return(
        <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>

            <SearchBox
                className="monsters-search-box"
                placeholder="search monsters"
                onChangeHandler={onSearchChange}
            />

            <CardList monsters={filteredMonsters} />
        </div>
    )
}

export default App;
