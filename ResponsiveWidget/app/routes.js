import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/app';
import NoMatch from './components/common/NoMatch';

import Dashboard from './components/dashboard/Dashboard';
import AddEmployee from './components/employee/AddEmployee';
import AddRelease from './components/release/AddRelease';
import WeatherForcast from './components/weather/WeatherForcast';
import ListOfEmployee from './components/employee/ListOfEmployee';
import Main from './components/common/Main';

export default (
    <Route path="/" component={App}>
        <Route component={Dashboard}>
			<IndexRoute path='main' component={Main}>Main</IndexRoute>
			<Route path='weather' component={WeatherForcast}>Weather</Route>
			<Route path='employeelist' component={ListOfEmployee}>List of employee</Route>  
			<Route path='addemployee' component={AddEmployee}>Add Employee</Route> 
			<Route path='addrelease' component={AddRelease}>Add Release</Route>  			
        </Route>
        <Route path="*" component={NoMatch}/>
    </Route>
);
