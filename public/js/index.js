(function(doc, global) {

  doc.addEventListener('DOMContentLoaded', function() {
    var report = doc.getElementById('report');
    React.render(
      React.createElement(SourceFiles, {results: [
          { id:1, orderNumber: 1, name:'/path/to/foo.php', executedCount:0, totalCount:0, coverage:0 },
          { id:2, orderNumber: 2, name:'/path/to/bar.php', executedCount:0, totalCount:0, coverage:0 }
      ]}),
      report
    );
  }, false);

}(document, window));

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

var SourceFiles = React.createClass({displayName: "SourceFiles",
  propTypes: {
    results: React.PropTypes.array.isRequired
  },
  render: function() {
    var results = this.props.results;

    return (
      React.createElement("table", null, 
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
