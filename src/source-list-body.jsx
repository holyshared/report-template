var SourceListBody = React.createClass({
  propTypes: {
    results: React.PropTypes.array.isRequired
  },
  render: function() {
    var results = this.props.results;

    return (
      <tbody>
        {results.map(function(result) {
            return <SourceFile key={result.id}
              orderNumber={result.orderNumber}
              name={result.name}
              executedCount={result.executedCount}
              totalCount={result.totalCount}
              coverage={result.coverage} />;
        })}
      </tbody>
    );
  }
});
