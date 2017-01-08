import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.js';

import BirthdayComponent from './BirthdayComponent.js';
import ReleaseComponent from './ReleaseComponent.js';
import ProgressForm from './progressForm/ProgressForm.js';

import ShowEmployees from './ShowEmployees.js';
import BirthdayCard from './BirthdayCard.js';
import ShowEmployeesCards from './ShowEmployeesCards.js';

import ShowReleases from './ShowReleases.js';
import ShowReleaseCards from './ShowReleaseCards.js';

import ShowTeams from './ShowTeams.js';
import DeluxeCoreValues from './DeluxeCoreValues.js';

import {getApiCall, postApiCall} from './Api.js';

var birthdayFormData = require( './progressForm/datas/inputDatas.js');
var releaseFormData = require( './progressForm/datas/ReleaseFormData.js');

require('../sass/styles.global.scss');

const App = React.createClass ({
	getInitialState() {
		return ({
		  teams: [],
		  employees: [],
		  releases: [],
		  showAddEmployeeForm: false,
		  showAddReleaseForm: false
		});
	},
	componentWillMount(){
		this.getTeamData();
		this.getEmployeeData();
		this.getReleaseData();
	},
	componentDidMount () {
		$('.ui.modal')
		.modal({
		  detachable: false,
		  closable  : true
		})
	},
	getTeamData() {
		const successCallback = (value) => {
		  if (value._embedded) {
			if (value._embedded.scrumTeams) {
			  this.setState({teams: value._embedded.scrumTeams});
			};
		  };
		}

		const errorCallBack = (value) => {

		}

		getApiCall('/RewardsWidgetAPI/scrumteams', null, successCallback, errorCallBack);

	},
	getEmployeeData() {
		const successCallback = (value) => {
		  if (value._embedded) {
			if (value._embedded.employees) {
			  this.setState({employees: value._embedded.employees});
			};
		  };
		}

		const errorCallBack = (value) => {

		}

		getApiCall('/RewardsWidgetAPI/employees', null, successCallback, errorCallBack);
	},
	getReleaseData(){
		const successCallback = (value) => {
		  if(value._embedded){
			if(value._embedded.releases){
			  this.setState({releases: value._embedded.releases});
			};
		  };
		}

		const errorCallBack = (value) => {

		}

		getApiCall('/RewardsWidgetAPI/releases', null, successCallback, errorCallBack);
	},
	createNewEmployee (value) {
		const successCallback = (value) => {
		  this.getEmployeeData();
		  this.onClosed();
		}

		const errorCallBack = (value) => {

		}

		postApiCall('/RewardsWidgetAPI/employees', value, successCallback, errorCallBack);
	},
	createNewRelease (value) {
		const successCallback = (value) => {
		  this.getReleaseData();
		  this.onClosed();
		}

		const errorCallBack = (value) => {

		}

		postApiCall('/RewardsWidgetAPI/releases', value, successCallback, errorCallBack);
	},
	onClosed () {
		this.setState({showAddEmployeeForm: false, showAddReleaseForm: false})
	},
	showAddEmployeeForm () {
		this.setState({showAddEmployeeForm: true});
	},
	render () {
		return (
		  <div className="homePage">
				<h1><img src="/img/deluxe.png" alt="Deluxe Rewards"/></h1>
				<hr/>
				<DeluxeCoreValues/>
				<ShowTeams teams={this.state.teams}/>
				<BirthdayCard employees={this.state.employees}/>
			  <ShowReleaseCards releases={this.state.releases}/>
		  </div>
		);
	}
});

render(<App/>, document.getElementById('app'));