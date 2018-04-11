import React from 'react';
import Board from  '../presentationals/Board';
import {getState} from 'redux';

//Provider/Container React Component
class BoardContainer extends React.Component {
  render() {
      const stateProps = this.props.store.getState();
    return (
      <div>
        <Board stateProps={stateProps}/>
      </div>
    )
  }
}
export default Board