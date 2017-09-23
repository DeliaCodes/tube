var YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

//console log response! youtube id at the end of the url

function getDataFromApi(searchTerm, callback) {
  var query = {
    'path': 'https://www.googleapis.com/youtube/v3/search', 
    'params': {'key': 'AIzaSyB6nskjz1y78Vvihls3vxvnfQ7wllV2yFE','q': query, 'part': 'snippet'}
  }
  //console.log(query);
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

//needs to be called and data passed to it
function displaySearchData(data) {
  $('#results').html('<pre>' +  + '</pre>')
}

function watchSubmit() {
  $('.search-form').submit(function(event) {
    event.preventDefault(); //where is js-query?
    var queryTarget = $(event.currentTarget).find('.js-query');
    var query = $("input").val();
    // do I need queryTarget?
    queryTarget.val("");
    getDataFromApi(query, displaySearchData);
  });
}
//console.log(watchSubmit);
$(watchSubmit);
