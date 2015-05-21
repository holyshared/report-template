var SourceFile = React.createClass({displayName: "SourceFile",
  propTypes: {
    orderNumber: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    executedCount:  React.PropTypes.number.isRequired,
    totalCount: React.PropTypes.number.isRequired,
    coverage:    React.PropTypes.number.isRequired
  },
  render: function() {
    return React.createElement("tr", null, 
      React.createElement("td", null, this.props.orderNumber), 
      React.createElement("td", null, this.props.name), 
      React.createElement("td", null, this.props.executedCount), 
      React.createElement("td", null, this.props.totalCount), 
      React.createElement("td", null, this.props.coverage, "%")
    );
  }
});
