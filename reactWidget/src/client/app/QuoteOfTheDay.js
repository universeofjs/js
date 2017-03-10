import React from 'react';

export default class QuoteOfTheDay extends React.Component {
    render() {
        return (
            <div className="show-quotes">
                <table>
                    <thead>
                        <tr><th>Quote of the day</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Keep Calm, it works on my machine</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }

};