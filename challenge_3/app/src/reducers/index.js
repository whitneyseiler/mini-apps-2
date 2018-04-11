import { combineReducers } from 'redux';

import boardReducer from './board-reducer';
import gameReducer from './game-reducer';

const allReducers = {
    board: boardReducer,
    game: gameReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;