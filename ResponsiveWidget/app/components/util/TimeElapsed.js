import React from 'react';

export default class TimeElapsed extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
  			secondsElapsed: 0
  		};
		this.tick = this.tick.bind(this);
    } 
  
  tick() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  }
  
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (
		<section className="releases">
			<h3 className="title">Seconds Elapsed: {this.state.secondsElapsed}</h3>
		</section>
        );
  }
}
