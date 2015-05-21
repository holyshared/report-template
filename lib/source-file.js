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
      React.createElement("td", {className: "orderNumber"}, this.props.orderNumber), 
      React.createElement("td", {className: "sourceFile"}, this.props.name), 
      React.createElement("td", {className: "executedCount"}, this.props.executedCount), 
      React.createElement("td", {className: "totalCount"}, this.props.totalCount), 
      React.createElement("td", {className: "coverage"}, this.props.coverage, "%")
    );
  }
});
