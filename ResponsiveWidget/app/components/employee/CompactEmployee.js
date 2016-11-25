import React from 'react';
import AwesomeComponent from './AwesomeComponent';

export default class CompactEmployee extends React.Component {
	
    render() {
		let date = new Date();    
		let employee = this.props.employee; 
		let dob = new Date(employee.dob);	
        let aniv = new Date(employee.anniversaryDate);	
        let msg = '';	
		let msg1 = '';
		if (dob.getMonth() === date.getMonth()) {
		  msg = 'Happy Birthday!!';	
		}	
		if (aniv.getMonth() === date.getMonth()) {
		  msg1 = 'Happy Anniversary!!';	
		}	
        
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
						<p className="blink">{msg} {msg1}</p> 
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
