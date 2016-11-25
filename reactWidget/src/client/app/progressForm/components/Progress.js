
var React    = require('react');
var classSet = require('../utils/classSet');

var ProgressElement = React.createClass({
  componentDidUpdate: function() {
    var percent = parseInt(this.props.percent);
    var deg = 360*percent/100 ;
    var element = this.refs.progress;
    element.style.transform = 'rotate(-'+ deg +'deg)';
  },
  render: function() {
    var percent = Math.floor(this.props.percent);
    var classes = classSet({
      "progressCircle-pie-chart": true,
      "gt-50": percent > 50
    });
    return (
      <div className="progressCircle clearfix">
        <div className={classes}>
          <div className="ppc-progressCircle">
            <div className="ppc-progressCircle-fill" ref="progress"></div>
          </div>
          <div className="ppc-percents">
            <div className="pcc-percents-wrapper">
              <span>{percent + '%'}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProgressElement;
