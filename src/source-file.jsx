var SourceFile = React.createClass({
  propTypes: {
    orderNumber: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    executedCount:  React.PropTypes.number.isRequired,
    totalCount: React.PropTypes.number.isRequired,
    coverage:    React.PropTypes.number.isRequired
  },
  render: function() {
    return <tr>
      <td>{this.props.orderNumber}</td>
      <td>{this.props.name}</td>
      <td>{this.props.executedCount}</td>
      <td>{this.props.totalCount}</td>
      <td>{this.props.coverage}%</td>
    </tr>;
  }
});
