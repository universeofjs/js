import React from 'react';
import {getApiCall} from '../common/Api';
import ShowTeam from './ShowTeam';

export default class ListOfTeam extends React.Component {

	constructor(props) {
		super(props);
		this.state = {teams: []};
	}

	componentWillMount() {
		this.getTeamData();
	}

	getTeamData() {
		const successCallBack = (value) => {
			if (value._embedded) {
				if (value._embedded.scrumTeams) {
					this.setState({teams: value._embedded.scrumTeams});
				}
			}
		};
		const errorCallBack = (value) => {
			console.log(value);
		};
		getApiCall('/RewardsWidgetAPI/scrumteams', null, successCallBack, errorCallBack);
	}

	render() {
		return (
			<div>
				<ShowTeam teams={this.state.teams} />
			</div>
		);
	}

}
