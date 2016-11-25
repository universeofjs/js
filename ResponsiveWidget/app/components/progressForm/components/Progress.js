let React    = require('react');
let classSet = require('../utils/classSet');

let ProgressElement = React.createClass({
  componentDidUpdate: function() {
    let percent = parseInt(this.props.percent, percent);
    let deg = 360 * percent / 100;
    let element = this.refs.progress;
    element.style.transform = 'rotate(-'+ deg +'deg)';
  },
  render: function() {
    let percent = Math.floor(this.props.percent);
    let classes = classSet({
      'progressCircle-pie-chart': true,
      'gt-50': percent > 50
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
