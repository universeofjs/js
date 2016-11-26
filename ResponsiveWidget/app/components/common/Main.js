import React from 'react';
import ListOfEmployee from '../employee/ListOfEmployee';
import ListOfReleases from '../release/ListOfReleases';
import ListOfTeam from '../team/ListOfTeam';

export default class Header extends React.Component {

    render() {
        return (
			<div className="homepage">
				<div className="standups">
					<ListOfTeam />
				</div>
				<br/>
				<div className="birthdays">
					<ListOfEmployee />
				</div>
				<br/>
				<div className="releases">
					<ListOfReleases />
				</div>
			</div>
        );
    }
}
