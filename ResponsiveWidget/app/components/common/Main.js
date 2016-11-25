import React from 'react';
import ListOfEmployee from '../employee/ListOfEmployee';
import ListOfReleases from '../release/ListOfReleases';
import WeatherForcast from '../weather/WeatherForcast';
import TimeElapsed from '../util/TimeElapsed';

export default class Header extends React.Component {

    render() {
        return (
			<div className="homePage">
				<div>
					<TimeElapsed/>
				</div>
				<br/>
				<div>
					<WeatherForcast/>
				</div>
				<div className="calendar">
					<div className="floatleft">
						<ListOfEmployee/>
					</div>
					<div className="floatright">
						<ListOfReleases/>
					</div>
				</div>
			</div>
        );
    }
}
