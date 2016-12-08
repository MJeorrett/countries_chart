var countryArray;
var index = 0;
var lastTenButton;
var nextTenButton;
var noToDisplay = 18;

var getCoutriesToDisplay = function() {
  return countryArray.slice( index * noToDisplay, (index + 1) * noToDisplay );
};

var lastTenClicked = function() {
  index--;
  refreshMap();
  updateButtons();
}

var nextTenClicked = function() {
  index++;
  refreshMap();
  updateButtons();
}

var updateButtons = function() {
  console.log("index > 0:", index > 0 );
  console.log(lastTenButton);
  lastTenButton.disabled = !(index > 0);
  nextTenButton.disabled = !(index < ( 250 / noToDisplay ) - 1 );
}

var refreshMap = function() {
  var container = document.querySelector( '#chart-container' );
  var chart = new ChartHelper( "", getCoutriesToDisplay() , "population", "name", container );
}

window.onload = function() {
  var countries = xmlhttpHelper.getRequest( "https://restcountries.eu/rest/v1/all", function( countries ) {
    console.log( "received countries", countries );

    countryArray = countries.map(function(country){
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

    refreshMap();

    lastTenButton = document.querySelector( '#last-ten' );
    lastTenButton.onclick = lastTenClicked;

    nextTenButton = document.querySelector( '#next-ten' );
    nextTenButton.onclick = nextTenClicked;
  });
};
