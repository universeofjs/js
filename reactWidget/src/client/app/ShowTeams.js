import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as teamActions from './actions/teamActions';

class ShowTeams extends React.Component {

	componentWillMount() {
		this.props.loadTeams();
	}

	render() {
		return (
			<div className="showTeam">
				<h1>DR Standup Calendar</h1>
				{(this.props.teams || []).map(team =>(
					<TeamCard key={team.name} team={team} />
				))}
			</div>
		);
	}
}

const TeamCard = ({team}) => (
	<div className="oval-shape">
		<div className="content">
			<h2>{team.name}</h2>
			<p className="team-description">
				Standup Time: {team.standupTime}	<br/>
				Scrum Master: {team.scrumMaster} <br/>
    			BA: {team.businessAnalyst}
			</p>
			{(team.members || []).map(member => (
				<Member key={member.name} member={member} />
			))}
		</div>
	</div>
);

const Member = ({member}) => (
	<div className="tag-cloud">
		{member.name} -- {member.role}
	</div>
);

const mapStateToProps = (state, ownProps) => {
	return {
		teams: state.teams
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		loadTeams: () => {
			dispatch(teamActions.loadTeams());
		}
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(ShowTeams)