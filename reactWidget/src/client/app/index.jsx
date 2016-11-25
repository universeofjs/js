import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';

import BirthdayComponent from './BirthdayComponent.jsx';
import ReleaseComponent from './ReleaseComponent.jsx';
import ProgressForm from './progressForm/ProgressForm.js';

import ShowEmployees from './ShowEmployees.jsx';
import BirthdayCard from './BirthdayCard.jsx';
import ShowEmployeesCards from './ShowEmployeesCards.jsx';

import ShowReleases from './ShowReleases.jsx';
import ShowReleaseCards from './ShowReleaseCards.jsx';

import {getApiCall, postApiCall} from './Api.js';

var birthdayFormData = require( './progressForm/datas/inputDatas.js');
var releaseFormData = require( './progressForm/datas/ReleaseFormData.js');

require('../sass/styles.global.scss');

const App = React.createClass ({
	getInitialState() {
		return ({
		  employees: [],
		  releases: [],
		  showAddEmployeeForm: false,
		  showAddReleaseForm: false
		});
	},
	componentWillMount(){
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
			<h1> Birthday Calendar</h1>
			<div className="employee-floatleft">
				<BirthdayComponent getEmployeeData={this.getEmployeeData}/>
			</div>
			<div className="employee-floatright">
				<BirthdayCard employees={this.state.employees} showAddEmployeeForm={this.showAddEmployeeForm}/>
			</div>
			
			<div className="clear"></div>
			
			<h1> Release Calendar</h1>
			<div className="release-floatleft">
				<ReleaseComponent getReleaseData={this.getReleaseData}/>
			</div>
			<div className="release-floatright">
				<ShowReleaseCards releases={this.state.releases} showAddReleaseForm={() => (this.setState({showAddReleaseForm: true}))}/>
			</div>
			
			<div className="clear"></div>
			
			{this.state.showAddEmployeeForm && <ProgressForm onClosed={this.onClosed} onSubmitButton={this.createNewEmployee} inputDatas={birthdayFormData}/>}
			{this.state.showAddReleaseForm && <ProgressForm onClosed={this.onClosed} onSubmitButton={this.createNewRelease} inputDatas={releaseFormData}/>}
			
		  </div>

		);
	}
});

render(<App/>, document.getElementById('app'));