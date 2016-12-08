window.onload = function() {
  var countries = xmlhttpHelper.getRequest( "https://restcountries.eu/rest/v1/all", function( countries ) {
    console.log( "received countries", countries );


    var countryArray = countries.map(function(country){
      return {name: country.name, population: country.population, code: country.alpha2Code};
    });

    console.log(countryArray);

    var container = document.querySelector( '#chart-container' );
    var chart = new ChartHelper( "", countryArray, "population", "name", container );

  });
};
