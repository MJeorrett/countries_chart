var xmlhttpHelper = {
  getRequest: function( url, callback ) {
    var request = new XMLHttpRequest();
    request.open( 'GET', url );
    request.onload = function() {
      if ( this.status == '200' ) {
        var dataObject = JSON.parse( this.responseText );
        callback( dataObject );
      }
      else {
        console.log( "reqeust failed with status", this.status );
      }
    };
    request.send();
  }
};
