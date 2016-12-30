import * as types from './actionTypes';
import {getApiCall, postApiCall} from '../Api.js';

export function loadTeamSuccess(teams) {
    return { type: types.LOAD_TEAMS_SUCCESS, teams};
}

export function loadTeams() {
	return dispatch => {
		const successCallback = (value) => {
			if (value._embedded) {
				if (value._embedded.scrumTeams) {
					dispatch(loadTeamSuccess(value._embedded.scrumTeams))
				};
			};
		}

		const errorCallBack = (value) => {

		}

		return getApiCall('/RewardsWidgetAPI/scrumteams', null, successCallback, errorCallBack);
	}
}