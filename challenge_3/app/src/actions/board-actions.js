export const GAME_PLAY = 'GAME_PLAY';

export function addTestState(number) {
    return {
        type: GAME_PLAY,
        payload: number
    }
}