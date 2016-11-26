import React from 'react';

export default class ShowTeams extends React.Component {
	render() {
		return (
			<div className="showTeam">
				<h1>Standup Calendar</h1>
				{(this.props.teams || []).map(team =>(
					<TeamCard team={team} />
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
				Standup Time: {team.tandupTime}	<br/>
				Scrum Master: {team.scrumMaster} <br/>
    			Business Analyst: {team.businessAnalyst}
			</p>
			{(team.members || []).map(member => (
				<Member member={member} />
			))}
		</div>
	</div>
);

const Member = ({member}) => (
	<div className="tag-cloud">
		{member.name} -- {member.role}
	</div>
);