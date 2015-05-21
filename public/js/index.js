(function(doc, global) {

  doc.addEventListener('DOMContentLoaded', function() {
    var report = doc.getElementById('report');
    React.render(
      React.createElement(SourceList, {results: [
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

var SourceListHeader = React.createClass({displayName: "SourceListHeader",
  render: function() {
    return React.createElement("thead", null, React.createElement("tr", null, 
      React.createElement("th", null, "Order"), 
      React.createElement("th", null, "Source"), 
      React.createElement("th", null, "Executed Count"), 
      React.createElement("th", null, "Total Count"), 
      React.createElement("th", null, "Coverage")
    ));
  }
});

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
