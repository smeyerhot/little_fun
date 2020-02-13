import React, {Component} from 'react';
import Game from './components/Game';
import BoggleBoard from './components/BoggleBoard'
import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';
import { BrowserRouter } from 'react-router-dom';
import People from './components/People';
import Grid from './components/Grid'

Amplify.configure(awsconfig);



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      age: '',
      people: []
    };
  }
  // state = { people: [] }
  async componentDidMount() {
    const data = await API.get('peopleapi', '/people')
    this.setState({people: data.people})
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Grid/>
          <div className ="wrap">
          <h1 className="string">What's your name?</h1>
          <Game/>
          <h1 className="string">What's your name?</h1>
          <input value={this.state.name} type="text" id="name" onChange={(e)=>{this.setState({name: e.target.value})}}/>
          <h1 className="string">How old are you?</h1>
          <input  value={this.state.age} onChange={(e)=>{this.setState({age: e.target.value})}} type="text" id="age" />
          <h1 className="string">Hi {this.state.name}! How are you today? You're {this.state.age} years old.</h1>
          </div>
            <BoggleBoard/>

            <People/>



        </React.Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
