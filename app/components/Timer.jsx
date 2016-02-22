var React = require('react');
var CircularProgress = require('material-ui').CircularProgress;
var Moment = require('moment');

var Timer = React.createClass({
    getDefaultProps: function() {
        return {
            time: 25 * 60 * 1000,
            maxtime: 25 * 60 * 1000,
        };
    },

    getTime: function() {
        return Moment.utc(this.props.time).format('mm.ss');
    },

    getPercent: function() {
        return 100 - ((this.props.maxtime - this.props.time) / this.props.maxtime * 100);
    },

    render: function() {

        return (
            <div className="clock">
                {this.getTime()}
                <div className="circular">
                    <CircularProgress mode="determinate" value={this.getPercent()} size={5} />
                </div>
            </div>
        );
    }
});

module.exports = Timer;
