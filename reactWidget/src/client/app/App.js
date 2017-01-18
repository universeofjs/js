
import React, {PropTypes} from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.js';

import AddBirthdayComponent from './BirthdayComponent.js';
import ReleaseComponent from './ReleaseComponent.js';
import ProgressForm from './progressForm/ProgressForm.js';

import ShowEmployees from './ShowEmployees.js';
import BirthdayCard from './BirthdayCard.js';
import ShowEmployeesCards from './ShowEmployeesCards.js';

import ShowReleases from './ShowReleases.js';
import ShowReleaseCards from './ShowReleaseCards.js';

import ShowTeams from './ShowTeams.js';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from './actions/employeeActions';

import {getApiCall, postApiCall} from './Api.js';

var birthdayFormData = require( './progressForm/datas/inputDatas.js');
var releaseFormData = require( './progressForm/datas/ReleaseFormData.js');

require('../sass/styles.global.scss');

export const App = React.createClass ({
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

			<div className="standups">
				<ShowTeams teams={this.state.teams}/>
			</div>
			
			<div className="clear"></div>

			<div className="birthdays">
				<h1> Birthday Calendar</h1>
				<div className="employee-floatleft">
					<AddBirthdayComponent getEmployeeData={this.getEmployeeData}/>
				</div>
				<div className="employee-floatright">
					<BirthdayCard employees={this.state.employees} showAddEmployeeForm={this.showAddEmployeeForm}/>
				</div>
			</div>
			
			<div className="clear"></div>
			
			<div className="releases">
				<h1> Release Calendar</h1>
				<div className="release-floatleft">
					<ReleaseComponent getReleaseData={this.getReleaseData}/>
				</div>
				<div className="release-floatright">
					<ShowReleaseCards releases={this.state.releases} showAddReleaseForm={() => (this.setState({showAddReleaseForm: true}))}/>
				</div>
			</div>
			
			<div className="clear"></div>
			
			{this.state.showAddEmployeeForm && <ProgressForm onClosed={this.onClosed} onSubmitButton={this.createNewEmployee} inputDatas={birthdayFormData}/>}
			{this.state.showAddReleaseForm && <ProgressForm onClosed={this.onClosed} onSubmitButton={this.createNewRelease} inputDatas={releaseFormData}/>}
			
		  </div>

		);
	}
});
