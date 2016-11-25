let React           = require('react');
let Validator       = require('validatorjs');
let ProgressElement = require('./components/Progress');
let FormElement     = require('./components/Form');

let ProgressForm = React.createClass({
  getInitialState: function() {
    return {
      inputDatas: [],
      progressPercent: 0
    };
  },
  componentWillMount: function() {
    let inputDatas = this.props.inputDatas;
    this.setState( { inputDatas: inputDatas } );
  },
  componentDidMount: function() {
    $('.ui.modal')
      .modal({
        detachable: false,
        closable: true,
        onHidden: () => (this.props.onClosed())
      })
	.modal('show');
    this._initialInputVerification();
  },
  componentWillUnmount: function() {
    const isActive = $('.ui.modal').modal('is active');
    if (isActive) {
      $('.ui.modal').modal('hide');
    }  
  },
  render: function() {
    return (
      <div className="ui modal">
        <ProgressElement percent={this.state.progressPercent} />
        <FormElement
          inputs={this.state.inputDatas}
          onChangeInputHandler={this._onChangeInputHandler}
          onSubmitFormHandler={this._onSubmitFormHandler}
          percent={this.state.progressPercent} />
      </div>
    );
  },
  _initialInputVerification: function() {
    this.state.inputDatas.forEach( function( item, index ) {	
      this._setAndValidateInput( index, item.value );
    }.bind(this));
    this._calculatePercent();
  },
  _resetInputDatas: function() {
    let inputDatas = this.state.inputDatas.map( function( item ) {
      item.value = '';
      item.pristine = true;
      item.hasError = false;
      return item;
    });
    this.setState( { inputDatas: inputDatas } );
    this._initialInputVerification();
  },
  _calculatePercent: function() {
    let total = this.state.inputDatas.length;
    let done = 0;
    let progressPercent;
    this.state.inputDatas.forEach( function( item ) {
      if ( item.hasError === false ) {
        done += 1;
      }
    });
    progressPercent = done/total*100;
    this.setState( { progressPercent: progressPercent } );
  },
  _setAndValidateInput: function( index, value, noMorePristine ) {
    let pristine = noMorePristine ? false : true;
    let inputDatas = this.state.inputDatas;
    let item = inputDatas[index];
    let data = {};
    let validation;
    inputDatas[index].value = value;
    inputDatas[index].pristine = pristine;
    inputDatas[index].hasError = false;
    inputDatas[index].errorMessage = '';
    data[item.id] = value || '';
    validation = new Validator( data, item.validation.rules, item.validation.messages );
    if ( validation.fails() ) {
      inputDatas[index].hasError = true;
      inputDatas[index].errorMessage  = validation.errors.first( item.id );
    }
    this.setState( { inputDatas: inputDatas } );
  },
  _onChangeInputHandler: function( index, value ) {
    this._setAndValidateInput( index, value, true );
    this._calculatePercent();
  },
  _onSubmitFormHandler: function() {
    if ( this.state.progressPercent >= 100 ) {
      let dataToSubmit = {};
      this.state.inputDatas.forEach( function( item ) {
        dataToSubmit[item.id] = item.value;
      });
      this.props.onSubmitButton(dataToSubmit);
      this._resetInputDatas();
      this._calculatePercent();
    }
  }
});

module.exports = ProgressForm;
