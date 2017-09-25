var YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search?';
var displayMe = [];
var linkMe = [];
//console log response! youtube id at the end of the url

function getDataFromApi(searchTerm, callback) {
  var query = {
    'path': 'https://www.googleapis.com/youtube/v3/search?', 
    'key': 'AIzaSyB6nskjz1y78Vvihls3vxvnfQ7wllV2yFE',
    'q': query, 
    'part': 'snippet'}
  
  //console.log(query);
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

function processData (data) {
//iterate over array in the items key in the object
//get thumbnail link - put that in an href and then use the id to make the link

var getThumbnails = data.items;
for (var i = 0; i < getThumbnails.length; i++) {
  displayMe.push(getThumbnails[i].snippet.thumbnails.default.url);
  linkMe.push(getThumbnails[i].id.)
  //https://goo.gl/6XWBbU Might help accessing the deeply nested data in above
}
console.log (displayMe);
};

function displaySearchData(data) {
  processData(data);
  for (var i = 0; i < displayMe.length; i++) {
    $('#results').append('<li class="links"><img src="' + displayMe[i] + '"></li>')
  }
  for (var i = 0; i < linkMe.length; i++) {
   $('.links').append( '<a href="https://www.youtube.com/' + linkMe[i] + '"></a>' )
  }
  
console.log(data);
}

function watchSubmit() {
  $('.search-form').submit(function(event) {
    event.preventDefault(); //where is js-query?
    var query = $("input").val();
    getDataFromApi(query, displaySearchData);
  });
}
//console.log(watchSubmit);
$(watchSubmit);
