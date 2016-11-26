import React from 'react';
import ReactDom from 'react-dom';
import {getApiCall, postApiCall} from './Api.js';

require('../sass/styles.global.scss');

const TOTAL_INPUTS = 6;

const ReleaseComponent = React.createClass ({
	postData(e) {
		e.preventDefault();
		const successCallback = (value) => {
		  this.resetForm();
		  this.gotReponseFromServer(true);
		}
		const errorCallBack = (value) => {
		  this.gotReponseFromServer(false);
		}
		postApiCall('/RewardsWidgetAPI/releases', this.getDataToSend(), successCallback, errorCallBack);
	},
	getDataToSend(){
		return({
			releaseNumber: this.state.releaseNumber,
			codeLockDownDate: this.state.codeLockDownDate,
			rcDeploymentDate: this.state.rcDeploymentDate,
			xuatDeploymentDate: this.state.xuatDeploymentDate,
			prodDeploymentDate: this.state.prodDeploymentDate,
			releaseNotes: this.state.releaseNotes
		});
	},
	gotReponseFromServer(success){
		if(success){
			this.props.getReleaseData();
		}
		this.setState({
			gotResponse: true,
			isSuccess: success,
			isSubmitting: false
		});
	},
	getInitialState(){
		return ({
			releaseNumber:"",
			codeLockDownDate:"",
			rcDeploymentDate:"",
			xuatDeploymentDate:"",
			prodDeploymentDate:"",
			releaseNotes: "",
			isSubmitting: false,
			gotResponse: false,
			isSuccess: false
		})
	},
	resetForm() {
	this.refs.releaseForm.reset();
	this.setState({
	  releaseNumber:"",
			codeLockDownDate:"",
			rcDeploymentDate:"",
			xuatDeploymentDate:"",
			prodDeploymentDate:"",
			releaseNotes: "",
			gotResponse: false
	  });
	},
	progressBarIncrement() {
		var allStateKeys = Object.keys(this.getDataToSend())
		var totalBlank = 0;
		for (var i = allStateKeys.length - 1; i >= 0; i--) {
		  if (this.state[allStateKeys[i]] === "") {
			totalBlank++;
		  };
		};

		var percent = ((TOTAL_INPUTS -totalBlank)/TOTAL_INPUTS) *100

		$('#progress_bar_release')
		  .progress({
			  percent: percent
		  });

		this.percent = percent;
	},
	render() {
		this.progressBarIncrement();
		var formMessage = this.state.gotResponse ? this.state.isSuccess ? "success" : "error" : "";
		formMessage = this.state.isSubmitting ? "loading" : formMessage;
		return (
    		<div className="ui attached segment">
				<form className={`ui form ${formMessage}`} ref="releaseForm" id="releaseForm" onSubmit={this.postData}>
					<h3 className="ui dividing header">Add Release Info</h3>
					<div className="ui indicating progress" data-value="0" data-total={TOTAL_INPUTS} id="progress_bar_release">
						<div className="bar">
							<div className="progress"></div>
						</div>
					</div>
					<div className="field">
						<label>Release Number:</label>
						<input type="text" name="releaseNumber" placeholder="Release Number" onChange={(event) => this.setState({releaseNumber: event.target.value})} required/>
					</div>
					<div className="field">
						<label>Code LockDown:</label>
						<input type="date" name="codeLockDownDate" placeholder="Code LockDown" onChange={(event) => this.setState({codeLockDownDate: event.target.value})} required/>
					</div>
					<div className="field">
						<label>Deployment to RC:</label>
						<input type="date" name="rcDeploymentDate" placeholder="Deployment to RC" onChange={(event) => this.setState({rcDeploymentDate: event.target.value})} required/>
					</div>
					<div className="field">
						<label>Deployment to XUAT:</label>
						<input type="date" name="xuatDeploymentDate" placeholder="Deployment to XUAT" onChange={(event) => this.setState({xuatDeploymentDate: event.target.value})} required/>
					</div>
					<div className="field">
						<label>Deployment to Production:</label>
						<input type="date" name="prodDeploymentDate" placeholder="Birthday" onChange={(event) => this.setState({prodDeploymentDate: event.target.value})} required/>
					</div>
					<div className="field">
						<label>Release Notes:</label>
						<textarea type="text" name="releaseNotes" placeholder="Release Notes:" onChange={(event) => this.setState({releaseNotes: event.target.value})} required/>
					</div>
					<div className="ui success message">
					  <div className="header">Form Completed</div>
					  <p>Release information has been successfully entered.</p>
					</div>
					<div className="ui error message">
					  <div className="header">Error!</div>
					  <p>It seems there is some error. Please try again later.</p>
					</div>
					<button className={`ui green button ${this.state.isSubmitting ? "loading" : ""} ${this.percent === 100 ? "" : "disabled"}`} type="submit">Submit</button>
				</form>
			</div>
		);
	}

})

export default ReleaseComponent;
