import * as types from '../actions/actionTypes';

const initialState = {
    likesCount: 0
}

const counter = (state = 0, action) => {
    switch (action.type) {
        case types.INCREASE_LIKE_COUNTER:
            //return Object.assign({}, state, {likesCount: action.likesCount + 1});
            //return {...state, likesCount: action.likesCount + 1};
            return state + 1;

        default:
            return state
    }
}

export default counter;