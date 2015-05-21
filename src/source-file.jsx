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
      <td className="orderNumber">{this.props.orderNumber}</td>
      <td className="sourceFile">{this.props.name}</td>
      <td className="executedCount">{this.props.executedCount}</td>
      <td className="totalCount">{this.props.totalCount}</td>
      <td className="coverage">{this.props.coverage}%</td>
    </tr>;
  }
});
