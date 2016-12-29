import * as types from './actionTypes';
import {getApiCall, postApiCall} from '../Api.js';

export function loadReleasesSuccess(releases) {
    return { type: types.LOAD_RELEASES_SUCCESS, releases}
}

export function loadReleases() {
    return dispatch => {
        return getReleaseData().then(releases => {
            dispatch(loadReleasesSuccess(releases));
        }).catch(error => {
            throw(error);
        });
    };
}

function getReleaseData(){
    const successCallback = (value) => {
        if(value._embedded) {
            if(value._embedded.releases){
                this.setState({releases: value._embedded.releases});
            };
        };
    }

    const errorCallBack = (value) => {

    }

    getApiCall('/RewardsWidgetAPI/releases', null, successCallback, errorCallBack);
}