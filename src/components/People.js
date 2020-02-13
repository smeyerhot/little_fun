import Amplify, { API } from 'aws-amplify';

import React, {Component} from 'react';

export default class People extends Component {
  state = { people: [] }
  async componentDidMount() {
    const data = await API.get('peopleapi', '/people')
    this.setState({people: data.people})
  }
  render() {
    return (
      
        <div className="App">
          <div>
            

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