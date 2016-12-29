import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AwesomeComponent from './AwesomeComponent.js';
import * as employeeActions from './actions/employeeActions';

const BirthdayCard = React.createClass({
	render() {

		this.props.actions.loadEmployeesSuccess(this.props.employees);

		return (
			<div className="ui attached segment">
				<div className="ui middle aligned column centered grid">
				  <div className="left floated six wide column">
					<div className="ui header">Employees List:</div>
				  </div>
				  <div className="right floated six wide column">
				  </div>
				</div>
				<div className="ui divider"></div>
				{this.props.employees.length > 0 ? null : <h4>No Employees</h4>}
				<div className="ui link cards">
					{(this.props.employees || []).map(employee => (
						<EmployeeCard key={employee.id} employee={employee}/>
					))}
				</div>
			</div>
		);
	}
});

const EmployeeCard = ({employee}) => (
  	<div className="card">
    	<div className="content">
      		<div className="header">{employee.firstName} {employee.lastName}</div>
      		<div className="meta">
        		<a>{employee.title}</a>
      		</div>
      		<div className="description">
        		<p>Date Of Birth: {employee.dob}</p> 
        		<p>Work Anniversary: {employee.anniversaryDate}</p> 
        		<p>Location: {employee.location}</p>
            <p><AwesomeComponent/></p>
      		</div>
    	</div>
    	<div className="extra content">
      		<span className="right floated">
        		Joined in {employee.anniversaryDate}
      		</span>
      		<span>
        		<i className="user icon"></i>
        		{employee.title}
      		</span>
    	</div>
  	</div>
)

function mapStateToProps(state, ownProps) {
  return {
    employees: state.employees
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BirthdayCard);
