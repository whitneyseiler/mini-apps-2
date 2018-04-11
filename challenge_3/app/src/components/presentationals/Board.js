import React from 'react';

class Board extends React.Component {
    render() {
        let board = this.props.store.getState().board;
        console.log(board)
      return (
        <div>
          <h2>Game Board</h2>
          {board.map((row) => {
              row.map((index) => {
                  <div id="square">{index}</div>
              })
          })}
        </div>
      )
    }
  }
  export default Board