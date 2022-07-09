d3.csv("/static/js/new_flight_data.csv").then(function(data) {
  console.log(data);
  var tripId = data.map(d => d.trip_id);
  console.log(tripId);

  var ticketCost = data.map(d => +d.total_cost);
  console.log(ticketCost);

  var departDuration = data.map(d => +d.depart_duration);
  console.log(departDuration);

  var returnDuration = data.map(d => +d.return_duration);
  console.log(returnDuration);

  var flightCode = data.map(d => +d.flight_code);
  console.log(flightCode);

  var flightTime = data.map(d => +d.flight_time);
  console.log(flightTime);

  var departingAirport = data.map(d => +d.depart_airport);
  console.log(departingAirport);

  var ticketCost2 = data.map(d => +d.total_cost);
  console.log(ticketCost2);

  var departDate = data.map(d => +d.depart_date);
  console.log(departDate);

  var time = data.map(d => +d.timestamp);
  console.log(time);
//   d3.selectAll("body").on("change", updatePage);
//   console.log(departingAirport);

// });

// function init() {
//     // Grab a reference to the dropdown select element
//     var selector = d3.select("#selDataset");
//     // Use the list of sample names to populate the select options
//     d3.csv("/static/js/new_flight_data.csv").then((data) => {
//       var departingAirport = data.map(d => +d.depart_airport);
//       sampleNames.forEach((sample) => {
//         selector
//           .append("option")
//           .text(sample)
//           .property("value", sample);
//       });
//       // Use the first sample from the list to build the initial plots
//       var firstSample = sampleNames[0];
//       // buildCharts(firstSample);
//       buildMetadata(firstSample);
//     });
//   }

// function buildCharts(sample) {  

// function updatePage() {
//     var dropdownMenu = d3.selectAll("#selectOption").node();
//     var dropdownMenuID = dropdownMenu.id;
//     var selectedOption = dropdownMenu.value;
  
//     console.log(dropdownMenuID);
//     console.log(selectedOption);
//   };


  var trace = {
    x: departingAirport,
    y: ticketCost2,
    type: "scatter"
  };
  var data = [trace];
  var layout = {
    title: "Price Changes",
    xaxis: {title: "Depart Date" },
    yaxis: {title: "Ticket Cost"}
  };
  Plotly.newPlot("plotArea2", data, layout);

  



  // plotData = [
  //   {
  //     x: departDate,
  //     y: ticketCost,
  //     type: "bar"
  //   }
  // ]
  // Plotly.newPlot("plotArea", plotData)

});

//   plotData2 = [
//     {
//       x: flightCode,
//       y: ticketCost,
//       type: "bar"
//     }
//   ]

//   var trace1 = [
//     {
    
//       x: departDuration,
//       y: tripId,
//       type: "scatter"
//     }
//   ]
    
//   var trace2 = {
//     'traceData': [{
//         x: tripId,
//         y: returnDuration,
//         type: "scatter"

//       }
    
//     ],
//     'layout': {
//       paper_bgcolor: "rgba(0,0,0,0)",
//       plot_bgcolor: "rgba(0,0,0,0)"
//     }
//   }

//   var trace4 = {
//     'traceData': [{
//         x: flightTime,
//         y: ticketCost,
//         type: "bar"

//       }
    
//     ],
//     'layout': {
//       paper_bgcolor: "rgba(0,0,0,0)",
//       plot_bgcolor: "rgba(0,0,0,0)"
//     }
//   }

//   // var departReturnData = [trace1, trace2]

//   Plotly.newPlot("plotArea", plotData);

//   Plotly.newPlot("plotArea3", plotData2);
//   console.log(plotData);



//   // Plotly.newPlot("plotArea", [{x: [1,2,3], y:[10,20,30]}]);


//   // Plotly.newPlot("plotArea2", trace2.traceData, trace2.layout);
//   // Plotly.newPlot("plotArea3", trace4.traceData, trace4.layout);


//   // var trace = {
//   //   x: [tripId],
//   //   y: [ticketCost],
//   // };
//   // Plotly.restyle("plotArea", trace);

// });

