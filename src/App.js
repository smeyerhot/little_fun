import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);



class App extends Component {
  state = { people: [] }
  async componentDidMount() {
    const data = await API.get('peopleapi', '/people')
    this.setState({people: data.people})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    
        {
          this.state.people.map((person,i ) => (
            <div key={person.name}>
              <h3>{person.name}</h3>
              <p> {person.job }</p>
            </div>
          ))
        }
      </div>
    
    );
  }
}

export default App;
