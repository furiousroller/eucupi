// Find a <table> element with id="myTable":
var table = document.getElementById("myTable");

// Create an empty <thead> element and add it to the table:
var header = table.createTHead();

// Create an empty <tr> element and add it to the first position of <thead>:
var row = header.insertRow(0);

// Insert a new cell (<td>) at the first position of the "new" <tr> element:
var cell = row.insertCell(0);

// Add some bold text in the new cell:
cell.innerHTML = "<b>This is a table header</b>";
