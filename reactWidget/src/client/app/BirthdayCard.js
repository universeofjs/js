import React from 'react';
import AwesomeComponent from './AwesomeComponent.js';

const BirthdayCard = React.createClass({
	render() {
		return (
			<div className="showBirthday">
				<h1>Birthday Calendar</h1>
				{this.props.employees.length > 0 ? null : <h4>No Birthdays To Display</h4>}
				<div className="ui link cards">
					{(this.props.employees || []).map(employee => (
						<EmployeeCard key={employee.firstName} employee={employee}/>
					))}
				</div>
			</div>
		);
	}
});

const EmployeeCard = ({employee}) => (
  	<div className="card">
  		<div className="image">
	      	<img src={"img/" + employee.firstName + ".png"} />
	    </div>
    	<div className="content">
      		<div className="header">{employee.firstName} {employee.lastName}</div>
      		<div className="meta">
        		<a>{employee.title}</a>
      		</div>
      		<div className="description">
        		<p>Date Of Birth: {employee.dob}</p> 
        		<p>Work Anniversary: {employee.anniversaryDate}</p> 
        		<p>Location: {employee.location}</p>
            	<AwesomeComponent/>
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
);

export default BirthdayCard;
