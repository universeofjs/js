import React from 'react';

export default class NoMatch extends React.Component {
    render() {	
        return (
            <section className="app-content">
                <header className="section-header">
                    <h3 className="title">Not Found</h3>
                </header>
				<div className="notfound-card">
					<div className="content">
						<a className="header">404 Invalid URL</a >
					</div>				
				</div>
            </section>				
        );
    }
}
