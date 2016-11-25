let React     = require('react');
let classSet  = require('../utils/classSet');

let InputElement = React.createClass({
  render: function() {
    let eachItem = this.props.item;
    let classes = classSet({
      'form--group': true,
      'has--error': eachItem.hasError && !eachItem.pristine
    });
    let getElement = function(item) {
      if (item.type === 'select') {
       return ( 
          <select className="form--control" id={item.id} value={item.value} onChange={this._onChange}>
            {(item.options || []).map(option => (<option key={option.value} value={option.value}>{option.label}</option>))}
          </select>
        );
      } else if (item.type === 'text' || item.type === 'date') {
        return (
          <input type={item.type} className="form--control" id={item.id} value={item.value} onChange={this._onChange}/>
        );
      } else if (item.type ==='textarea') {
          return (
            <textarea type={item.type} className="form--control" id={item.id} value={item.value} onChange={this._onChange}/>
            );
      }
    }.bind(this);
    return (
      <div className={classes}>
        <label htmlFor={eachItem.id}>{eachItem.label}</label>
        {getElement(eachItem)}
        <span className="form--focus"></span>
        <span className="form--error">{eachItem.errorMessage}</span>
      </div>
    );
  },
  _onChange: function(e) {
    let value = e.target.value;
    this.props.onChangeInputHandler( this.props.index, value );
  }
});

module.exports = InputElement;
