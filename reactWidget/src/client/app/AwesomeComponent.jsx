import React from 'react';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div className="ui labeled button" tabindex="0">
        <div className="ui red button" onClick={this.onLike}>
          <i className="heart icon"></i> Like
        </div>
        <a className="ui basic red left pointing label">
          {this.state.likesCount}
        </a>
      </div>
    );
  }

}

export default AwesomeComponent;