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
