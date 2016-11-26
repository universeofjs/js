import React from 'react';

const ShowEmployees = React.createClass({
	render() {
		return (
			<div className="ui attached segment">
				<div className="ui middle aligned column centered grid">
          			<div className="left floated six wide column">
				    	<div className="ui header">Employees List:</div>
          			</div>
          			<div className="right floated six wide column">
						<button className="ui button" onClick={() => (this.props.showAddEmployeeForm())}>Add Employee</button>
          			</div>
        		</div>
        		<div className="ui divider"></div>
				{this.props.employees.length > 0 ? null : <h4>No Employees</h4>}
				<div className="ui cards">
				{(this.props.employees || []).map(employee => (
					<EmployeeCard employee={employee}/>
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
      		<div className="meta">{employee.title}</div>
      		<div className="description">
        		<p>Date Of Birth: {employee.dob}</p> 
        		<p>Work Anniversary: {employee.anniversaryDate}</p> 
        		<p>Location: {employee.location}</p>
      		</div>
    	</div>
  	</div>
)

export default ShowEmployees;