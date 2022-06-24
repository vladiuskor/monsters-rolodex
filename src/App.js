import {Component} from "react";

import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {firstName:'Vlad', lastName: 'Korobko'},
            work: 'SolitySoft'
        }

    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        I am {this.state.name.firstName} {this.state.name.lastName}. I work at {this.state.work}!
                    </p>
                    <button onClick={() => {
                        this.setState({
                            name: {firstName:'Roma', lastName: 'Korobko'},
                            work: 'Music studio'
                        })
                    }}>Change Name</button>
                </header>
            </div>
        );
    }
}

export default App;
