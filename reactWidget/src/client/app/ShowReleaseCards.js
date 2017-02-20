import {CardStack, Card} from './cardstack.js';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as releaseActions from './actions/releaseActions';

const backgroundColors = ['#2980B9', '#27AE60', '#9B27AE', '#e67e22'];

const styles = {
	cardHeader: {
		display: 'flex',
		height: '125px',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 20px',
		color: '#fff',
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

class ShowReleaseCards extends React.Component {

	componentWillMount() {
		this.props.actions.loadReleases();
	}

	render() {
		const numberOfReleases = this.props.releases.length;
		const height = this.props.releases.length * 125;
		const cardstackElement = () => (
			<CardStack height={height > 500 ? height : 500} width={500} background='#f8f8f8' hoverOffset={25}>
				{(this.props.releases || []).map(release => {
						const color = backgroundColors[i % 4];
						i++;
						return (
							<Card background={color} key={release.releaseNumber} >
								<ReleaseCard imgBorderColor='#015389' release= {release} />
							</Card>
						);
					})
				}
			</CardStack>
		);

		const singleCard = (release) => (
			<div style={{'background-color':'#2980B9', position: 'relative', 'padding-top': '15px', width: '500px'}}>
				<ReleaseCard key={release.releaseNumber} imgBorderColor='#015389' release={release} />
			</div>
		);
		
		return (
			<div>
				{numberOfReleases > 0 ? numberOfReleases > 1 ? cardstackElement() : singleCard(this.props.releases[0]) : <h4>No Release Info Available at this time, check back later!</h4>}
			</div>
		);
	}
};

const ProfilePicture = ({ imgSrc, text }) => (
	<div>
		<img
			style={{
				width: '60px',
				height: '60px',
				borderRadius: '100%',
				border: '3px solid'
			}}
			src={imgSrc}/>
		<div style={{position: 'absolute',  top: '70px', fontWeight: 'bolder', fontSize: '15px', left: '30px'}}>{text}</div>
	</div>
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
		if(summary) return (
			<p style={{ fontWeight: 300, lineHeight: 1.45 }}>
				{summary}
			</p>
		);
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

const ReleaseCard = ({release, ...props}) => (
	<div style={{top: 0 }}>
		<header style={styles.cardHeader} className='card-header-details'>
			<ProfilePicture imgSrc={props.imgSrc} text={release.releaseNumber} />
			<div>
				<h1 style={styles.headerName}>Code LockDown</h1>
				<h3 style={styles.headerTitle}>{release.codeLockDownDate}</h3>
			</div>
		</header>

		<div style={{color: '#fff'}}>
			<DetailsRow
				icon='ion-ios-location-outline'
				title='RC Deployment Date'
				summary={release.rcDeploymentDate}
			/>
			<DetailsRow
				icon='icon ion-ios-paper-outline'
				title='XUAT Deployment Date'
				summary={release.xuatDeploymentDate}
			/>
			<DetailsRow
				icon='icon ion-ios-paper-outline'
				title='Production Deployment Date'
				summary={release.prodDeploymentDate}
			/>
			<DetailsRow
				icon='icon ion-ios-paper-outline'
				title='Release Notes'
				summary={release.releaseNotes}
			/>
		</div>
  </div>
);

function mapStateToProps(state, ownProps) {
  return {
    releases: state.releases
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(releaseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowReleaseCards);

