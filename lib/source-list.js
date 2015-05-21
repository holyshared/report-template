var SourceList = React.createClass({displayName: "SourceList",
  propTypes: {
    results: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      React.createElement("table", null, 
        React.createElement(SourceListHeader, null), 
        React.createElement(SourceListBody, {results: this.props.results})
      )
    );
  }
});
