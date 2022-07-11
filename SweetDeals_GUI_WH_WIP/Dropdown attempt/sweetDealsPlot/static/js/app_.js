var data_link = "http://127.0.0.1:5000/data";

function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.csv("js/all_data.csv").then((data) => {
      
        var tripIDs = data.map(d => d.trip_id);
        // console.log(tripIDs);

        var uniqueTrips = new Set(tripIDs);
        uniqueTrips.forEach((tripIDs) => {
            selector
            .append("option")
            .text(tripIDs)
            .property("value", tripIDs);
        });
  
        // Use the first sample from the list to build the initial plots
        var firstTrip = tripIDs[0];
        // console.log(firstTrip);
        buildCharts(firstTrip);
        buildMetadata(firstTrip);
    });
  }
  
  // Initialize the dashboard
  init();
  
  function optionChanged(newTrip) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newTrip);
    buildCharts(newTrip);
    
  }
  
  // Demographics Panel 
  function buildMetadata(newTrip) {
    // d3.csv("js/all_data.csv").then((data) => {
    //   var metadata = data.metadata;
    //   // Filter the data for the object with the desired sample number
    //   var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    //   var result = resultArray[0];
    //   // Use d3 to select the panel with id of `#sample-metadata`
    //   var PANEL = d3.select("#sample-metadata");
  
    //   // Use `.html("") to clear any existing metadata
    //   PANEL.html("");
  
    //   // Use `Object.entries` to add each key and value pair to the panel
    //   // Hint: Inside the loop, you will need to use d3 to append new
    //   // tags for each key-value in the metadata.
    //   Object.entries(result).forEach(([key, value]) => {
    //     PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    //   });
  
    // });
  }

  
  
  // 1. Create the buildCharts function.
  function buildCharts(newTrip) {
    // 2. Use d3.json to load and retrieve the samples.json file 
    
    d3.csv(data_link+"/"+newTrip).then((data) => {
      // 3. Create a variable that holds the samples array. 
      var tripIDs = data.map(d => d.trip_id);
      var collectionTime = data.map(d => d.time_stamp);
      var totalCost = data.map(d => d.total_cost);
      // console.log(totalCost);
      // 4. Create a variable that filters the samples for the object with the desired sample number.
      var filterData = tripIDs.filter(match => match.id === newTrip);
      // console.log(tripIDs);
      //  5. Create a variable that holds the first sample in the array.
    //   var plotArray = filterData[0];
      // console.log(data.metadata.filter(id=>id.id==sample)[0].wfreq);
  
      // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    //   var otu_ids = plotArray.otu_ids;
    //   var otu_labels = plotArray.otu_labels;
    //   var sample_values = plotArray.sample_values;
  
      // 7. Create the yticks for the bar chart.
      // Hint: Get the the top 10 otu_ids and map them in descending order  
      //  so the otu_ids with the most bacteria are last. 
  
    //   var yticks = tripIDs.map(id => "OTU "+id).slice(0,10).reverse();
  
      // 8. Create the trace for the bar chart. 
      var barData = [{
        // x: tripIDs,
        x: collectionTime,
        y: totalCost,
        text: tripIDs,
        // text: tripIDs.slice(0,10).reverse(),
        type: "bar",
      }];
      // 9. Create the layout for the bar chart. 
      var barLayout = {
        title: String(tripIDs[0].slice(0,7)),
        yaxis: {
            range: [0,Math.max(totalCost)+25]
        }
      };
      // 10. Use Plotly to plot the data with the layout. 
      Plotly.newPlot("plotArea",barData,barLayout)
      // console.log(plotArray.otu_ids);
      // console.log(typeof(plotArray.otu_ids));
  
      // Bar and Bubble charts
      
      // 1. Create the trace for the bubble chart.
    //   var bubbleData = [{
    //     x: otu_ids,
    //     y: sample_values,
    //     text: otu_labels,
    //     type: "scatter",
    //     mode: "markers",
    //     marker: {
    //       size: sample_values,
    //       color: otu_ids,
    //       colorscale: "Electric"
    //     }
    //   }];
  
    //   // 2. Create the layout for the bubble chart.
    //   var bubbleLayout = {
    //     title: "Bacteria Cultures Per Sample",
    //     xaxis: {title: "OTU ID"},
    //     hovermode: "closest"
    //   };
  
    //   // 3. Use Plotly to plot the data with the layout.
    //   Plotly.newPlot("bubble",bubbleData,bubbleLayout);
  
      // 4. Create the trace for the gauge chart.
    //   var gaugeData = [{
    //     type: "indicator",
    //     mode: "gauge+number",
    //     title: "Scrubs per Week",
    //     value: parseInt(data.metadata.filter(id=>id.id==sample)[0].wfreq),
    //     gauge: {
    //       axis: { range: [null, 10], dtick: 2, tickcolor: "black" },
    //       bar: { color: "black" },
    //       bgcolor: "white",
    //       borderwidth: 2,
    //       bordercolor: "gray",
    //       steps: [
    //         { range: [0, 2], color: "red" },
    //         { range: [2, 4], color: "orange" },
    //         { range: [4, 6], color: "yellow" },
    //         { range: [6, 8], color: "green" },
    //         { range: [8, 10], color: "darkgreen" }
    //       ],
    //       // threshold: {
    //       //   line: { color: "black", width: 4 },
    //       //   thickness: 0.75,
    //       //   value: plotArray.
    //       // }
    //     }
    //   }];
      
    //   // 5. Create the layout for the gauge chart.
    //   var gaugeLayout = { 
    //     title: {text: "Belly Button Washing Frequency"},
    //     // xaxis: {title: "Scrubs per Week"}
    //   };
  
    //   // 6. Use Plotly to plot the gauge data and layout.
    //   Plotly.newPlot("gauge",gaugeData,gaugeLayout);
    });
  }
  
  