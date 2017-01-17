import * as types from '../actions/actionTypes';

const teamReducers = (state = [], action) => {
    switch(action.type){
        case types.LOAD_TEAMS_SUCCESS:
            return [
                ...state,
                 ...action.teams
            ];
        
        default:
            return state
    }
}

export default teamReducers;