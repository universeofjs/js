import {CardStack, Card} from './cardstack.js';
import React from 'react';

const backgroundColors = ['#2980B9', '#27AE60', '#9B27AE', '#e67e22'];

const cardStyles = {
	cardHeader: {
		display: 'flex',
		height: '125px',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 20px',
		color: '#fff'
	},
	headerName: {
		fontWeight: 500,
		fontSize: '25px',
		textAlign: 'right'
	},
	headerTitle: {
		margin: '4px 0 0',
		fontWeight: 300,
		fontSize: '17px',
		opacity: 0.8,
		textAlign: 'right'
	}
};

let i = 0;

const ShowEmployeeCards = (props) => {
	const numberOfEmployees = props.employees.length;
	const height = props.employees.length * 150;
	const cardstackElement = () => (
		<CardStack height={height > 500 ? height : 500} width={500} background='#f8f8f8' hoverOffset={25}>
			{(props.employees || []).map(employee => {
					const color = backgroundColors[i % 4];
					i++;
					return (
						<Card background={color} key={employee.tnumber} >
      						<EmployeeCard imgBorderColor='#015389' employee= {employee} />
						</Card>
					);
				})
			}
		</CardStack>
	);

	const singleCard = (employee) => (
		<div style={{'background-color': '#2980B9'}}>
      		<EmployeeCard key={employee.tnumber} imgBorderColor='#015389' employee={employee} />
		</div>
	);
	
	return (
		<div className="ui attached segment">
			<div className="ui middle aligned column centered grid">
				<div className="left floated six wide column">
					<div className="ui header">Employees List:</div>
				</div>
				<div className="right floated six wide column">
					<button className="ui button" onClick={() => (props.showAddEmployeeForm())}>Add Birthday</button>
				</div>
        	</div>
			<div className="ui divider"></div>
			{numberOfEmployees > 0 ? numberOfEmployees > 1 ? cardstackElement() : singleCard(props.employees[0]) : <h4>No Employees</h4>}
		</div>
	);
};

const ProfilePicture = ({ imgSrc, borderColor }) => (
	<img
		style={{
			width: '60px',
			height: '60px',
			borderRadius: '100%',
			border: `3px solid ${borderColor}`
		}}
		src={imgSrc}
	/>
);

const DetailsRow = ({ icon, title, summary }) => {
	const styles = {
		row: {
			width: '100%',
			padding: '0 20px',
			display: 'flex',
			alignItems: 'center',
			margin: '25px 0'
		},
		icon: {
			display: 'block',
			width: '25px',
			height: '30px',
			margin: '0 20px 0 0',
			borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
			textAlign: 'center',
			fontSize: '22px'
		},
		title: {
			fontWeight: 500,
			fontSize: '20px',
			margin: 0,
			fontStyle: 'italic'
		}
	};
	const renderSummary = () => {
		if (summary) { 
			return (
				<p style={{ fontWeight: 300, lineHeight: 1.45 }}>
					{summary}
				</p>
			);
		}
		return null;
	};

	return (
		<div style={styles.row}>
			<span className={`icon ${icon}`}
			style={Object.assign({}, styles.icon, {alignSelf: 'flex-start'})}></span>
			<div style={{ width: '80%' }}>
				<h2 style={styles.title}>
					{title}
				</h2>
				{renderSummary()}
			</div>
		</div>
	);
};

const EmployeeCard = ({employee, props = {}}) => (
	<div style={{top: 0 }}>
		<header style={cardStyles.cardHeader} className='card-header-details'>
			<ProfilePicture imgSrc={'img/' + employee.firstName + '.png'} borderColor={props.imgBorderColor} />
			<div>
				<h1 style={cardStyles.headerName}>{employee.firstName + ' ' +employee.lastName}</h1>
				<h3 style={cardStyles.headerTitle} className='icon ion-ios-arrow-down'> {employee.title} </h3>
			</div>
		</header>

		<div style={{color: '#fff'}}>
			<DetailsRow
				icon='ion-ios-location-outline'
				title={employee.location}
			/>
			<DetailsRow
				icon='icon ion-ios-paper-outline'
				title='Date Of Birth'
				summary={employee.dob}
			/>
			<DetailsRow
				icon='icon ion-ios-paper-outline'
				title='Work Anniversary'
				summary={employee.anniversaryDate}
			/>
		</div>
  </div>
);

export default ShowEmployeeCards;
