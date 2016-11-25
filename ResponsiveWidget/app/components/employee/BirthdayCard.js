import React from 'react';
import CompactEmployee from './CompactEmployee';

const BirthdayCard = React.createClass({
	render() {
		return (
			<div className="ui attached segment">
				<div className="ui middle aligned column centered grid">
					<div className="left floated six wide column">
					<div className="ui header">Employees List:</div>
				</div>
				<div className="right floated six wide column">
					<button className="ui button" onClick={() => (this.props.showAddEmployeeForm())}>Add Birthday</button>
				</div>
				</div>
				<div className="ui divider"></div>
					{this.props.employees.length > 0 ? null : <h4>No Employees</h4>}
					<div className="ui link cards">
						{					
							(this.props.employees || []).filter(function(employee) { 
								return ((new Date(employee.dob).getMonth() === new Date().getMonth()) ||
										(new Date(employee.anniversaryDate).getMonth() === new Date().getMonth()))
							}).map(employee => (
								<CompactEmployee employee={employee} key={employee.tnumber}/>
							))
						}	
					</div>
			</div>
		);
	}
});

export default BirthdayCard;
