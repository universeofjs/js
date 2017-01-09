import React from 'react';

export default class UpcomingEvents extends React.Component {
    render() {
        return (
            <div className="upcoming-events">
                <table>
                    <thead>
                        <th>Upcoming Events</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Learning Summit 2017 <br/>
                                Stone Mountain -- Atlanta, GA
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

};