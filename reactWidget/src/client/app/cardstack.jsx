import React from 'react';

const equalsZero = (num) => num === 0;
const errorMessage = 'CardStack component must have at least two child Card components. Please check the children of this CardStack instance.';

class CardStack extends React.Component {

	constructor(props) {
		super(props);
		const childrenLength = props.children.length || 1;
		const headerHeight = props.height / childrenLength;

		if (childrenLength <= 1) throw new Error(errorMessage);

		this.initialTopOffsets = props.children.map((child, i) => equalsZero(i) ? 0: headerHeight * i);

		this.state = {
			topOffsets: this.initialTopOffsets,
			cardSelected: false
		};
	}

	componentWillReceiveProps (nextProps) {
		const childrenLength = nextProps.children.length || 1;
		const headerHeight = nextProps.height / childrenLength;

		if (childrenLength <= 1) throw new Error(errorMessage);

		this.initialTopOffsets = nextProps.children.map((child, i) => equalsZero(i) ? 0: headerHeight * i);

		this.state = {
			topOffsets: this.initialTopOffsets,
			cardSelected: false
		};
	}

	handleCardClick(id, cb) {
		let state = {
			topOffsets: [],
			cardSelected: true
		};

		this.setState(
			this.state.topOffsets.reduce((prev, offset, index) => {
				let newOffset = (index === id) ? 0 : this.props.height;

				if(this.state.cardSelected) {
					prev.cardSelected = false;
					newOffset = this.initialTopOffsets[index];
				}

				prev.topOffsets.push(newOffset);

				return prev;
			}, state)
		);

		if(cb) {
			cb(this.state.cardSelected);
		};
	}

	renderCards() {
		return this.props.children.map((child, i) => (
			React.cloneElement(child, {
				key: i,
				cardId: i,
				hoverOffset: this.props.hoverOffset,
				cardSelected: this.state.cardSelected,
				height: this.props.height,
				topOffset: this.state.topOffsets[i],
				handleClick: this.handleCardClick.bind(this)
			})
		));
	}

	render() {
		const styles = {
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
			<ul style={ styles }>
				{this.renderCards()}
			</ul>
	  );
	}
}

CardStack.propTypes = {
	background: React.PropTypes.string,
	height: React.PropTypes.number,
	hoverOffset: React.PropTypes.number,
	width: React.PropTypes.number,
};

CardStack.defaultProps = {
	width: 350,
	height: 600,
	bgColor: 'f8f8f8',
	hoverOffset: 30,
};

class Card extends React.Component {
	constructor(props) {
	  super(props);
		this.state = {
			hover: false
		};
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
		const hoverOffset = this.props.cardId !== 0 && this.state.hover && !this.props.cardSelected ? this.props.hoverOffset: 0;
		const dynamicStyles = {
		  background: this.props.background,
		  transform: `translate3d(0,${this.props.topOffset - hoverOffset}px,0)`,
		  height: this.props.height
	  };
		return (
			<li
				style={Object.assign({}, styles.card, dynamicStyles)}
				onClick={this.handleClick.bind(this)}
				onMouseEnter={this.setHoverState.bind(this, true)}
				onMouseLeave={this.setHoverState.bind(this, false)}>
					{this.props.children}
			</li>
		);
	}
}

const styles = {
	card: {
		position: 'absolute',
		top: 0,
		width: '100%',
		cursor: 'pointer',
		transition: '0.5s transform ease',
		WebkitTransition: '-webkit-transform 0.5s ease',
	}
};

export { CardStack, Card };
