
var React     = require('react');
var classSet  = require('../utils/classSet');

var InputElement = React.createClass({
  render: function() {
    var item = this.props.item;
    var classes = classSet({
      "form--group": true,
      "has--error": item.hasError && !item.pristine
    });
    var getElement = function(item) {
      if (item.type === 'select') {
       return ( 
          <select className="form--control" id={item.id} value={item.value} onChange={this._onChange}>
            {(item.options || []).map(option => (<option key={option.value} value={option.value}>{option.label}</option>))}
          </select>
        );
      } else if (item.type === 'text' || item.type === 'date') {
        return (
          <input type={item.type} className="form--control" id={item.id} value={item.value} onChange={this._onChange}/>
        )
      } else if (item.type ==='textarea') {
          return (
            <textarea type={item.type} className="form--control" id={item.id} value={item.value} onChange={this._onChange}/>
            )
      }
    }.bind(this)
    return (
      <div className={classes}>
        <label htmlFor={item.id}>{item.label}</label>
        {getElement(item)}
        <span className="form--focus"></span>
        <span className="form--error">{item.errorMessage}</span>
      </div>
    );
  },
  _onChange: function(e) {
    var value = e.target.value;
    this.props.onChangeInputHandler( this.props.index, value );
  }
});

module.exports = InputElement;
