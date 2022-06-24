import {Component} from "react";

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters: [
                {
                    name: 'Linda',
                    id: '123dsfer'
                },
                {
                    name: 'Frank',
                    id: '123dsfbsfd'
                },
                {
                    name: 'Jacky',
                    id: '678fdvsdfv'
                },
                {
                    name: 'Andrei',
                    id: 'ajsdfkl23'
                }
            ]

        }
    }


    render() {
        return (
            <div className="App">
                {this.state.monsters.map((monster) => {
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
