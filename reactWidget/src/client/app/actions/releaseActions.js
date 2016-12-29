import * as types from './actionTypes';
import {getApiCall, postApiCall} from '../Api.js';

export function loadReleasesSuccess(releases) {
    return { type: types.LOAD_RELEASES_SUCCESS, releases}
}

export function loadReleases() {
    return dispatch => {
        const successCallback = (value) => {
            if(value._embedded) {
                if(value._embedded.releases){
                    dispatch(loadReleasesSuccess(value._embedded.releases))
                };
            };
        }

        const errorCallBack = (value) => {

        }

        return getApiCall('/RewardsWidgetAPI/releases', null, successCallback, errorCallBack);
    };
}
