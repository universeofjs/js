import * as types from '../actions/actionTypes';

const releaseReducer = (state = [], action) => {
    switch(action.type) {
        case types.LOAD_RELEASES_SUCCESS:
            return [
                ...state,
                ...action.releases
            ];
        
        default:
            return state
    }
}

export default releaseReducer;