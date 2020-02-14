import React, {Component} from 'react';
import './BoggleBoard.css';
import {boards,words} from './Boards'

export default class Grid extends Component {
    constructor(props) {
      super(props);

      this.state = {
        
        dim:[],
        boggle: []
      };
    }
    componentDidMount() {
      const i = getRandomArbitrary(boards);
      
      const boggle = getBoggleBoard(i);
      const dim = getBoardDim(i);
      this.setState({boggle, dim});
    }

    render() {
      const { boggle, dim} = this.state;

      var string = "auto "
    
      var num = string.repeat(dim[1])
      console.log(num);
      var percentage = dim[1] + '%' * 20;

      return (

        <React.Fragment> 
          {/* <div class="grid-container" >
          {boggle.map(function(row) {
              row.map(function(letter) {
                return (<div class="grid-item"> Hello {boggle}  
                </div>)
          })})}
         </div> */}

        <div className="grid-container" style={{"gridTemplateColumns": num}}>
          {boggle.map(row => row.map((letter,i)=>
            <div key={i}>
            <div className="grid-item"> {letter}  
            </div>
            </div> ))}
          </div>


 

        </React.Fragment>

        );
    }
}
    

const getRandomArbitrary = (arr)  => {
  return Math.floor(Math.random() * arr.length);
};
const getBoardDim = (i) => {
  // const i = getRandomArbitrary(boards);
  // getRandomArbitrary(boards);
  const m = boards[i].length;
  const n = boards[i][0].length;
  return [m,n,i]
}
const getBoggleBoard = (i) => {
  
  const m = boards[i].length;
  const n = boards[i][0].length;

  const boggle = [];
  for (let row = 0; row < m; row++) {
    const currentRow = [];
    for (let col = 0; col < n; col++) {
      // currentRow.push(createNode(col, row));
      currentRow.push(boards[i][row][col]);

    }
    boggle.push(currentRow);
  }

  return boggle;
};




