d3.csv("/static/js/new_flight_data.csv").then(function(data) {
console.log("Is this working?");

//A
var timeStamp = data.map(d => d.timestamp);
console.log(timeStamp, "timeStamp");
//B
var tripID = data.map(d => d.trip_id);
console.log(tripID, "tripID")
//C
var departAirport = data.map(d => d.depart_airport);
console.log(departAirport, "departAirport");
//D
var returnAirport = data.map(d => d.return_airport);
console.log(returnAirport, "returnAirport");
//E
var departDate = data.map(d => d.depart_date);
console.log(departDate, "departDate");
//F
var returnDate = data.map(d => d.return_date);
console.log(returnDate, "returnDate");
//G
var ticketCost = data.map(d => d.total_cost);
console.log(ticketCost, "ticketCost");
//H
var departTime = data.map(d => d.depart_datetime);
console.log(departTime, "departTime");
//I
var departDuration = data.map(d => d.depart_duration);
console.log(departDuration, "departDuration");
//J
var departStops = data.map(d => d.depart_stops);
console.log(departStops, "departStops");
//K
var returnTime = data.map(d => d.return_datetime);
console.log(returnTime, "returnTime");
//L
var returnDuration = data.map(d => d.return_duration);
console.log(returnDuration, "returnDuration");
//M

var returnStops = data.map(d => d.return_stops);
console.log(returnStops,"returnStops");
function optionChanged(AirportList) {
  buildMetadata(AirportList);
  buildCharts(AirportList);
  }    
  });

function init() {
  var selector = d3.select("#selDataset");
  d3.csv("/static/js/new_flight_data.csv").then((data) => {
    console.log(data);
    var airportNames = data.map(d => d.depart_airport);

    // Dan's code for unique values
    uniqueAirports = new Set(airportNames)
    
    uniqueAirports.forEach((airportNames) => {
      selector
        .append("option")
        .text(airportNames)
        .property([0]);
      });
  
    var firstAirport = uniqueAirports[0];
    buildCharts(firstAirport);
   
  })}
init();

function optionChanged(airport) {
  d3.json("/static/js/new_flight_data.csv").then((data) => {
    var OriginAP = data.depart_airport;
    
    var resultArray = metadata.filter(sampleObj => sampleObj.id == airport);
    var result = resultArray[0];
 
    var PANEL = d3.select("#sample-metadata");

    var ticketCost = data.total_cost;

var trace = {

x: [OriginAP],
y: [ticketCost],
type: "scatter"
}

});


d3.selectAll("#selDataset").on("change", updatePlotly);


  function updatePlotly() {
    // Use D3 to select the dropdown menu
var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
var dataset = dropdownMenu.property("value");
  
    // Initialize x and y arrays
    var x = [];
    var y = [];
  
    if (dataset === 'dataset1') {
      x = [1, 2, 3, 4, 5];
      y = [1, 2, 4, 8, 16];
    }
  
    else if (dataset === 'dataset2') {
      x = [10, 20, 30, 40, 50];
      y = [1, 10, 100, 1000, 10000];
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }
  
  init();

}

// function buildCharts(sample) {
//   d3.csv("/static/js/new_flight_data.csv").then((data) => {
//     var metadata = data.metadata;
//     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//     var result = resultArray[0];
//     var PANEL = d3.select("#sample-metadata");

//     PANEL.html("");
//     PANEL.append("h6").text(result.location);
//   });
// }
