import {GAME_PLAY} from '../actions/board-actions';

const initialState = {
    board: [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ]
}

export default function(state= initialState, action) {
    switch (action.type) {
        case GAME_PLAY: {
            return {
                ...state,
                board: [...state.board, action.payload]
            }
        }

        default:
            return state;
    }
}
