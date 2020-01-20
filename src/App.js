import React, {Component} from 'react';
import Game from './components/Game';
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
        <div>
          <Game/>

    
        {
          this.state.people.map((person,i ) => (
            <div key={person.name}>
              <h3>{person.name}</h3>
              <p> {person.job }</p>
            </div>
          ))
        }
        </div>
      </div>
    
    );
  }
}

export default App;
