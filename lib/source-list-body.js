var SourceListBody = React.createClass({displayName: "SourceListBody",
  propTypes: {
    results: React.PropTypes.array.isRequired
  },
  render: function() {
    var results = this.props.results;

    return (
      React.createElement("tbody", null, 
        results.map(function(result) {
            return React.createElement(SourceFile, {key: result.id, 
              orderNumber: result.orderNumber, 
              name: result.name, 
              executedCount: result.executedCount, 
              totalCount: result.totalCount, 
              coverage: result.coverage});
        })
      )
    );
  }
});
