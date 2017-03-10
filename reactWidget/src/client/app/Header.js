import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src="/img/deluxe.png" alt="Deluxe Rewards"/>
                <h1>Deluxe Bulletin Board</h1>
				<hr/>
            </div>
        );
    }
};