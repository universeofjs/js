import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as counterAction from '../actions/counterAction';

export class Like extends React.Component {

  constructor(props) {
    super(props);
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    this.props.actions.counterAction.increaseCounter();
  }

  render() {
    return (
      <div className="ui labeled button" tabindex="0">
        <div className="ui red button" onClick={this.onLike}>
          <i className="heart icon"></i> Like
        </div>
        <a className="ui basic red left pointing label">
          {this.props.likesCount}
        </a>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    likesCount: state.counter.likesCount
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: {
      counterAction: bindActionCreators(counterAction, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Like);