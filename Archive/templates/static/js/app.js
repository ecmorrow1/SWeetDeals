var data_link = "http://127.0.0.1:5000/data";
// function init() {
//   // var selector = d3.select("@selDataset");
  // d3.csv("static/js/new_flight_data.csv").then((data) => {
    d3.csv(data_link).then((data) => {
      console.log(data);
      var airportNames =data.map(d => d.depart_airport);
      airportNames.forEach(airportNames => {
        // selector
        //   .appent("option")
        //   .text(airportNames)
        //   .property("value",values);
      });
    });
  // }
  // init()


// d3.csv("static/js/new_flight_data.csv").then(function (data) {


// d3.json(data_link).then(function (data) {  
//   //     // console.log(data);

//   // console.log(data);
//   // console.log(data);
  
//   // for (var i = 0; i < data.length; i++) {
//   //     console.log(data[i].total_cost);
//   //     console.log(data[i].trip_id);
//   // }
//   //data = data.slice(0, 10);

//   // var tripId = data.map(d => d.trip_id);
//   // console.log(tripId);


//   // var ticketCost = data.map(d => +d.total_cost);
//   // console.log(ticketCost);

//   // var departDuration = data.map(d => +d.depart_duration);
//   // console.log(departDuration);


//   // var returnDuration = data.map(d => +d.return_duration);
//   // console.log(returnDuration);

//   // var flightCode = data.map(d => +d.flight_code);
//   // console.log(flightCode);

//   // var flightTime = data.map(d => +d.flight_time);
//   // console.log(flightTime);




//   // var flightColumn = data;
//   // console.log(tripId);

//   // console.log(ticketCost);
//   // console.log(flightColumn);

//   // Object.entries(data.ticketCost)

//   // var flightB = data;



//   // plotData = [
//   //   {
//   //     x: tripId,
//   //     y: ticketCost,
//   //     type: "bar"
//   //   }
//   // ]


//   // plotData2 = [
//   //   {
//   //     x: flightCode,
//   //     y: ticketCost,
//   //     type: "bar"
//   //   }
//   // ]

//   // var trace1 = [
//   //   {
    
//   //     x: departDuration,
//   //     y: tripId,
//   //     type: "scatter"
//   //   }
//   // ]
    
//   // var trace2 = {
//   //   'traceData': [{
//   //       x: tripId,
//   //       y: returnDuration,
//   //       type: "scatter"

//   //     }
    
//   //   ],
//   //   'layout': {
//   //     paper_bgcolor: "rgba(0,0,0,0)",
//   //     plot_bgcolor: "rgba(0,0,0,0)"
//   //   }
//   // }


//   // var trace4 = {
//   //   'traceData': [{
//   //       x: flightTime,
//   //       y: ticketCost,
//   //       type: "bar"

//   //     }
    
//   //   ],
//   //   'layout': {
//   //     paper_bgcolor: "rgba(0,0,0,0)",
//   //     plot_bgcolor: "rgba(0,0,0,0)"
//   //   }
//   // }



//   // var departReturnData = [trace1, trace2]

    


//   // Plotly.newPlot("plotArea", plotData);




//   // Plotly.newPlot("plotArea3", plotData2);


//   // // Plotly.newPlot("plotArea", [{x: [1,2,3], y:[10,20,30]}]);


//   // Plotly.newPlot("plotArea2", trace2.traceData, trace2.layout);
//   // // Plotly.newPlot("plotArea3", trace4.traceData, trace4.layout);


//   // // var trace = {
//   // //   x: [tripId],
//   // //   y: [ticketCost],
//   // // };
//   // // Plotly.restyle("plotArea", trace);
// });


