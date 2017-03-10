import React from 'react';

export default class EmployeesOfTheMonth extends React.Component {
    render() {
        return (
            <div className="show-employees-of-the-month">
                <table>
                    <thead>
                        <tr><th>Employees of the Month</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ABC, DEF, XYZ 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

};