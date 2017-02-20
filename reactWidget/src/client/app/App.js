
import React from 'react';
import Header from './Header';
import DeluxeCoreValues from './DeluxeCoreValues';
import EmployeesOfTheMonth from './EmployeesOfTheMonth';
import QuoteOfTheDay from './QuoteOfTheDay';
import UpcomingEvents from './UpcomingEvents';
import ShowTeams from './ShowTeams';
import AwesomeComponent from './AwesomeComponent';
import BirthdayCard from './BirthdayCard';
import ShowReleaseCards from './ShowReleaseCards';
import Footer from './Footer';

require('../sass/styles.global.scss');

export default class App extends React.Component {
	render () {
		return (
		  <div className="homePage">
				<Header/>
				<DeluxeCoreValues/>
				<UpcomingEvents/>
				<EmployeesOfTheMonth/>
				<QuoteOfTheDay/>
				<ShowTeams/>
				<BirthdayCard/>
				<ShowReleaseCards/>
				<Footer/>
		  </div>
		);
	}
}
