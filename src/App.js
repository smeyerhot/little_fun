import React, {Component} from 'react';
import Game from './components/Game';
import BoggleBoard from './components/BoggleBoard'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NoteApp from './components/Notes/NoteApp';
import Grid from './components/Grid';
import Header from './components/HeaderComponent';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      age: ''

    };
  }


  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header/>
          <NoteApp/>
          <Grid/>
          <div className ="wrap">
          <h1 className="string">While you wait, please play yourself in a quick game of tic-tac-toe! </h1>
          <Game/>
          <h1 className="string">What's your name?</h1>
          <input className="input" value={this.state.name} type="text" id="name" onChange={(e)=>{this.setState({name: e.target.value})}}/>
          <h1 className="string">How old are you?</h1>
          <input className="input" value={this.state.age} onChange={(e)=>{this.setState({age: e.target.value})}} type="text" id="age" />
          <h1 className="string">Hi {this.state.name}! How are you today? You're {this.state.age} years old.</h1>
          </div>
            <BoggleBoard/>





        </React.Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
