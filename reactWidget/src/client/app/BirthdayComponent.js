import React from 'react';
import ReactDom from 'react-dom';
import {getApiCall, postApiCall} from './Api.js';
import {connect} from 'react-redux'
import {addEmployee} from './actions/employeeActions'

require('../sass/styles.global.scss');

const TOTAL_INPUTS = 7;

const BirthdayComponent = React.createClass({
	postData(e) {
		e.preventDefault();
		this.props.addEmployee(this.getDataToSend());
		this.gotReponseFromServer(true);
	},

	getDataToSend() {
		return ({
			tnumber: this.state.tnumber,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			title: this.state.title,
			dob: this.state.dob,
			anniversaryDate: this.state.anniversaryDate,
			location: this.state.location
		});
	},
	gotReponseFromServer(success) {
	  this.setState({
		gotResponse: true,
		isSuccess: success,
		isSubmitting: false
	  });
	  this.resetForm();
	},
	getInitialState() {
		return ({
			tnumber: "",
			firstName: "",
			lastName: "",
			title: "",
			dob: "",
			anniversaryDate: "",
			location: "",
			icon: "",
			isSubmitting: false,
			gotResponse: false,
			isSuccess: false
		})
	},
	resetForm() {
	  this.refs.birhtdayForm.reset();
	  this.setState({
		tnumber: "",
		firstName: "",
		lastName: "",
		title: "",
		dob: "",
		anniversaryDate: "",
		location: "",
		icon: "",
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
		$('#progress_bar')
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
				<form className={`ui form ${formMessage}`} ref="birhtdayForm" id="birhtdayForm" onSubmit={this.postData}>
			 		<h3 className="ui dividing header">Add Birthday</h3>
					<div className="ui indicating progress" data-value="0" data-total={TOTAL_INPUTS} id="progress_bar">
						<div className="bar">
						  <div className="progress"></div>
						</div>
					</div>
		  			<div className="field">
    					<label>T Number:</label>
   						<input type="text" name="tnumber" placeholder="tnumber" onChange={(event) => this.setState({tnumber: event.target.value})} required/>
  					</div>
		  			<div className="field">
    					<label>First Name:</label>
   						<input type="text" name="fname" placeholder="First Name" onChange={(event) => this.setState({firstName: event.target.value})} required/>
  					</div>
 		  			<div className="field">
    					<label>Last Name:</label>
   						<input type="text" name="lname" placeholder="Last Name" onChange={(event) => this.setState({lastName: event.target.value})} required/>
  					</div>
		  			<div className="field">
    					<label>Job Title:</label>
   						<input type="text" name="title" placeholder="Title" onChange={(event) => this.setState({title: event.target.value})} required/>
  					</div>
		  			<div className="field">
    					<label>Date Of Birth:</label>
   						<input type="date" name="bday" placeholder="Birthday" onChange={(event) => this.setState({dob: event.target.value})} required/>
  					</div>
		  			<div className="field">
    					<label>Work Anniversary:</label>
   						<input type="date" name="anniversaryDate" placeholder="Work Anniversary" onChange={(event) => this.setState({anniversaryDate: event.target.value})} required/>
  					</div>
					<div className="field">
						<label>Work Location</label>
						<select className="ui fluid search dropdown" name="location" onChange={(event) => this.setState({location: event.target.value})} required>
							<option value="">-- Select Your Location --</option>
							<option value="Plymouth, MI">Plymouth, MI</option>
							<option value="Boca, FL">Boca, FL</option>
							<option value="Atlanta, GA">Atlanta, GA</option>
						</select>
					</div>
					<div className="ui success message">
					  <div className="header">Form Completed</div>
					  <p>Your information is entered successfully.</p>
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

const mapStateToProps = (state) => {
  return {
    employees: state.employees
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addEmployee: (employee) => {
      dispatch(addEmployee(employee))
    }
  }
}

const AddBirthdayComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(BirthdayComponent)

export default AddBirthdayComponent

