let React    = require('react');
let classSet = require('../utils/classSet');

let SubmitElement = React.createClass({
  render: function() {
    let done = this.props.percent >= 100;
    let classes = classSet({
      'form--submit': true,
      'form--submit-disabled': !done
    });
    let label = done ? 'Submit Now!' : 'You Cannot Yet!';
    return (
      <div className="form--group">
        <button type="submit" className={classes}>{label}</button>
      </div>
    );
  }
});

module.exports = SubmitElement;
