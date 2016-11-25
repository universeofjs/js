import React from 'react';
import Forecast from './Forecast';

class WeatherForcast extends React.Component {
    render() {
        return (
		<div>			
            <Forecast latitude={34.05} longitude={118.25} name='Michigan' color='1826F0' />     
		</div>			
        );
    }
 }
export default WeatherForcast;
