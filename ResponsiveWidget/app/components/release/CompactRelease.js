import React from 'react';

export default class CompactRelease extends React.Component {
	
    render() {
                      
        const data = this.props.data;	
       
        return (		
		<div style={{ position: 'absolute', top: 0 }}>
		<header  className='card-header-details'>			
			<div>
				<h1 >{data.releaseNumber}</h1>
				<h3 className='icon ion-ios-arrow-down'>{data.releaseNotes}</h3>
			</div>
		</header>

		<div style={{color: '#fff'}}>
			<p>		
				{data.codeLockDownDate}
			</p>

			<p>				
				{data.rcDeploymentDate}
			</p>

			<p>				
				{data.xuatDeploymentDate}
			</p>
		</div>
  </div>
			);        
    }
	
	
}