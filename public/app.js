window.onload = function() {
  var countries = xmlhttpHelper.getRequest( "https://restcountries.eu/rest/v1/all", function( countries ) {
    console.log( "received countries", countries );


    var countryArray = countries.map(function(country){
      return {name: country.name, population: country.population, code: country.alpha2Code};
    });

    countryArray.sort( function( countryA, countryB ) {
      var populationA = countryA.population;
      var populationB = countryB.population;
      if ( populationA > populationB ) return -1;
      if ( populationA < populationB ) return 1;
      return 0;
    });

    console.log(countryArray);

    var container = document.querySelector( '#chart-container' );
    var chart = new ChartHelper( "", countryArray, "population", "name", container );

  });
};
