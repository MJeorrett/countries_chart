window.onload = function() {
  var countries = xmlhttpHelper.getRequest( "https://restcountries.eu/rest/v1/all", function( countries ) {
    console.log( "received countries", countries );
  });
};
