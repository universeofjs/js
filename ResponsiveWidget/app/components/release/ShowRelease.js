import React from 'react';

const ShowReleases = React.createClass({
	render() {
		return (
			<div className="ui attached segment">
				<div className="ui middle aligned column centered grid">
          			<div className="left floated six wide column">
				    	<div className="ui header">Release Info:</div>
          			</div>
					<div className="right floated six wide column">
						<button className="ui button" onClick={() => (this.props.showAddReleaseForm())}>Add Release</button>
					</div>
        		</div>
        		<div className="ui divider"></div>
				{this.props.releases.length > 0 ? null : <h4> No Release Info Available at this time, check back later </h4>}
				<div className="ui cards">
					{(this.props.releases || []).map(release => (
						<ReleaseCard release={release}/>
					))}
				</div>
			</div>
		);
	}
});

const ReleaseCard = ({release}) => (
  	<div className="card">
    	<div className="content">
      		<div className="header">{release.releaseNumber}</div>
      		<div className="description">
        		<p>Code Lockdown: {release.codeLockDownDate}</p> 
        		<p>Deployment to RC: {release.rcDeploymentDate}</p> 
        		<p>Deployment to XUAT: {release.xuatDeploymentDate}</p>
        		<p>Deployment to Production: {release.prodDeploymentDate}</p>
        		<p><b>Release Notes:</b> {release.releaseNotes}</p>
      		</div>
    	</div>
  	</div>
);

export default ShowReleases;
