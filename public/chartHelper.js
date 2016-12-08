var ChartHelper = function( title, data, seriesKey, categoryKey, container ) {

  var series = data.map( function( dataObject ) {
    return dataObject[seriesKey];
  });

  var categories = data.map( function( dataObject) {
    return dataObject[categoryKey];
  });

  console.log( "series data:", series );
  console.log( "categories data:", categories );

  var chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: container
    },
    title: {
      text: title
    },
    series: [{
      name: "Countries",
      data: series
    }],
    xAxis: {
      categories: categories
    }
  });
};
