import React from 'react';
import AwesomeComponent from './AwesomeComponent';

export default class CompactEmployee extends React.Component {
	
    render() {
	let employee = this.props.employee; 	
	return (
			<div className="card">
				<div className="image">
					<img src={'assets/images/' + employee.firstName + '.png'} />
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
		);     
    }
}
