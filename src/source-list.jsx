var SourceList = React.createClass({
  propTypes: {
    results: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      <table>
        <SourceListHeader />
        <SourceListBody results={this.props.results}/>
      </table>
    );
  }
});
