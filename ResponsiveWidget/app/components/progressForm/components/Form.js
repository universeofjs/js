let React         = require('react');
let InputElement  = require('./Input');
let SubmitElement = require('./Submit');

let FormElement = React.createClass({
  render: function() {
    let props = this.props;
    let inputNodes = props.inputs.map(function(item, index) {
	return (
			<InputElement key={index} index={index} item={item} onChangeInputHandler={props.onChangeInputHandler} />
		);
    });
    return (
      <form className="form clearfix" onSubmit={this._onSubmit}>
        {inputNodes}
        <SubmitElement percent={this.props.percent}/>
      </form>
    );
  },
  _onSubmit: function(e) {
    e.preventDefault();
    this.props.onSubmitFormHandler();
  }
});

module.exports = FormElement;
