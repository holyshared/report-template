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
