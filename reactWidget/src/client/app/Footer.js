import React from 'react';

export default class Footer extends React.Component {
    render() {
        let date = new Date().getFullYear();    
        return (
            <div className="footer">
				<hr/>
                <h4>© {date} Deluxe Financial Services, LLC</h4>
            </div>
        );
    }
};