import React from 'react';

const styles = {
	release: {
		position: 'absolute',
		top: 0,
		width: '100%',
		cursor: 'pointer',
		transition: '0.5s transform ease'
	}
};

const equalsZero = (num) => num === 0;

class ReleaseStack extends React.Component {
	
	
	
	constructor(props) {
		super(props);
		const childrenLength = props.children.length || 1;
		const headerHeight = props.height / childrenLength;

		
		this.initialTopOffsets = props.children.map((child, i) => equalsZero(i)? 0: headerHeight * i );

		this.state = {
			topOffsets: this.initialTopOffsets,
			releaseSelected: false
					};
	}
	
	componentWillReceiveProps(nextProps) {
	const childrenLength = nextProps.children.length || 1;
    const headerHeight = nextProps.height / childrenLength;
    this.initialTopOffsets = nextProps.children.map((child, i) => equalsZero(i)? 0: headerHeight * i );

		this.state = {
			topOffsets: this.initialTopOffsets,
			releaseSelected: false
					};
    }
	handleReleasaeClick(id, cb) {
		let state = {
			topOffsets: [],
			releaseSelected: true
		};

		this.setState(
			this.state.topOffsets.reduce((prev, offset, index) => {
				let newOffset = (index === id) ? 0 : this.props.height;

				if(this.state.releaseSelected) {
					prev.releaseSelected = false;
					newOffset = this.initialTopOffsets[index];
				}

				prev.topOffsets.push(newOffset);

				return prev;
			}, state)
		);

		if(cb) {
			cb(this.state.releaseSelected);
		}
	}

	renderReleases() {
	    
		return this.props.children.map((child, i) => (
			React.cloneElement(child, {
				key: i,
				cardId: i,
				hoverOffset: this.props.hoverOffset,
				releaseSelected: this.state.releaseSelected,
				height: this.props.height,
				topOffset: this.state.topOffsets[i],
				handleClick: this.handleReleasaeClick.bind(this)
			})
		));
	}

	render() {
		const styles1 = {
			background: this.props.background,
			height: this.props.height,
			width: this.props.width,
			display: 'flex',
			flexDirection: 'column',
			position: 'relative',
			overflow: 'hidden',
			padding: 0,
			margin: 0
	  };
		return (
      <ul style={ styles1 }>
			  {this.renderReleases()}
		  </ul>
	  );
	}
}
ReleaseStack.propTypes = {
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		background: React.PropTypes.string,
		hoverOffset: React.PropTypes.number
	};
	
ReleaseStack.defaultProps = {
		width: 350,
		height: 600,
		bgColor: 'f8f8f8',
		hoverOffset: 10
	};
class Release extends React.Component {
	constructor(props) {
	  super(props);
		this.state = {
			hover: false
		};
		console.log(this.props.cardClicked)
	}

	handleClick() {
		this.props.handleClick(this.props.cardId, this.props.cardClicked);
		this.setHoverState(false);
	}

	setHoverState(val) {
		this.setState({
			hover: val
		});
	}

	render() {
		const hoverOffset = this.props.cardId !== 0 && this.state.hover && !this.props.releaseSelected ? this.props.hoverOffset: 0;
		const dynamicStyles = {
		  background: this.props.background,
		  transform: `translate3d(0,${this.props.topOffset - hoverOffset}px,0)`,
		  height: this.props.height
	  };
		return (
		
			<li
				style={Object.assign({}, styles.release, dynamicStyles)}
				onClick={this.handleClick.bind(this)}
				onMouseEnter={this.setHoverState.bind(this, true)}
				onMouseLeave={this.setHoverState.bind(this, false)}>
				    
					{this.props.children}
			</li>
		);
	}
}




export { ReleaseStack, Release };
