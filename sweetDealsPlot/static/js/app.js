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
                              //FIRST METHOD
// Function Code Here
// function init() {
//   var selector = d3.select("#selDataset");
//   d3.csv("/static/js/new_flight_data.csv").then((data) => {
//     console.log(data);
//     var airportNames = data.depart_airport;
//     airportNames.forEach((airportNames) => {
//       selector
//         .append("option")
//         .text(airportNames)
//         .property("value", data);
//       });
//     })}
// init();

// function optionChanged(AirportList) {
//   buildMetadata(AirportList);
//   buildCharts(AirportList);
  // }

// function buildMetadata(sample) {
//   d3.json("samples.json").then((data) => {
//     var metadata = data.metadata;
//     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//     var result = resultArray[0];
    

//     var PANEL = d3.select("#sample-metadata");

//   init();
//   function optionChanged(newSample) {
//     // Fetch new data each time a new sample is selected
//     buildMetadata(newSample);
//     buildCharts(newSample);
//   }

// function init() {
//   var selector = d3.select("#selDataset");
//     var airportNames = departAirport(key, value)
//     airportNames.forEach((airportNames) => 
//       selector
//         .append("option")
//         .text(airportNames)
//         .property("value", airportNames)
    
    
// init();

//     }
    
  });

function init() {
  var selector = d3.select("#selDataset");
  d3.csv("/static/js/new_flight_data.csv").then((data) => {
    console.log(data);
    var airportNames = data.depart_airport;
    airportNames.forEach((airportNames) => {
      selector
        .append("option")
        .text(airportNames)
        .property("value", values);
      });
    })}
init();

// console.log(airportNames);

// PLOTS DONT DELETE
// var trace = {
//   x: departAirport,
//   y: departDate,
//   type: "bar"
// };
// var data = [trace];
// var layout = {
//   title: "Price Changes",
//   xaxis: {title: "Depart Date" },
//   yaxis: {title: "Ticket Cost"}
// };

// Plotly.newPlot("plotArea2", data, layout);

// var trace = {
// x: ticketCost,
// y: departDate,
// type: "bar"
// };
// var data = [trace];
// var layout = {
// title: "Price Changes",
// xaxis: {title: "Depart Date" },
// yaxis: {title: "Ticket Cost"}
// };

// Plotly.newPlot("plotArea", data, layout);

// function updatePage() {
//   var dropdownMenu = d3.selectAll("#selectOption").node();
//   var dropdownMenuID = dropdownMenu.id;
//   var selectedOption = dropdownMenu.value;

//   console.log(dropdownMenuID);
//   console.log(selectedOption);

//PLOTS
//   var trace = {
//     x: departAirport,
//     y: departDate,
//     type: "bar"
//   };
//   var data = [trace];
//   var layout = {
//     title: "Price Changes",
//     xaxis: {title: "Depart Date" },
//     yaxis: {title: "Ticket Cost"}
//   };

//   Plotly.newPlot("plotArea2", data, layout);

// var trace = {
//   x: totalCost2,
//   y: departDate,
//   type: "bar"
// };
// var data = [trace];
// var layout = {
//   title: "Price Changes",
//   xaxis: {title: "Depart Date" },
//   yaxis: {title: "Ticket Cost"}
// };

// Plotly.newPlot("plotArea", data, layout);

  
// });
// });
// function init() {
  //   // Grab a reference to the dropdown select element
  //   var selector = d3.select("#selDataset");
  //   // Use the list of sample names to populate the select options
  //   d3.csv("/static/js/new_flight_data2.csv").then((data) => {
  //     var departAirport = data.depart_airport;
  //     departAirport.forEach(departAirport) => {
  //       selector
  //         .append("option")
  //         .text(departAirport)
  //         .property("value", Airport);
  //     });
  //     // Use the first sample from the list to build the initial plots
  //     var firstSample = sampleNames[0];
  //     // buildCharts(firstSample);
  //     buildMetadata(departAirport);
    // });
  
  
  
  // // Initialize the dashboard
  // init();
  // function optionChanged(newSample) {
  //   // Fetch new data each time a new sample is selected
  //   buildMetadata(newSample);
  //   buildCharts(newSample);
  // }
  // // THIS IS WORK IN PROGRESS. BELOW CODE IS GOOD.
  // // Demographics Panel 
  // function buildMetadata(sample) {
  //   d3.json("samples.json").then((data) => {
  //     var metadata = data.metadata;
  //     // Filter the data for the object with the desired sample number
  //     console.log(data);
  //     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
  //     var result = resultArray[0];
  //     // Use d3 to select the panel with id of `#sample-metadata`
  //     var PANEL = d3.select("#sample-metadata");
  //     // Use `.html("") to clear any existing metadata
  //     PANEL.html("");
  //     // Use `Object.entries` to add each key and value pair to the panel
  //     // Hint: Inside the loop, you will need to use d3 to append new
  //     // tags for each key-value in the metadata.
  //     Object.entries(result).forEach(([key, value]) => {
  //       PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);

