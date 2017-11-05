var YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search?';
var displayMe = [];
var linkMe = [];
var titleMe = [];

function getDataFromApi(searchTerm, callback) {
  var query = {
    'path': 'https://www.googleapis.com/youtube/v3/search?', 
    'key': 'AIzaSyB6nskjz1y78Vvihls3vxvnfQ7wllV2yFE',
    'q': query, 
    'part': 'snippet'}
  
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

function processData (data) {

var getThumbnails = data.items;
for (let i = 0; i < getThumbnails.length; i++) {
  displayMe.push(getThumbnails[i].snippet.thumbnails.default.url);
  linkMe.push(getThumbnails[i].id.videoId);
  titleMe.push(getThumbnails[i].snippet.title);
}
//console.log (displayMe);
//console.log(linkMe);
};

function displaySearchData(data) {
  processData(data);
  for (let i = 0; i < linkMe.length; i++) {
   $('#results').append('<li><a class="links" aria-label="Youtube result' + i +'" href="https://www.youtube.com/watch?v=' + linkMe[i] + '"><img src="' + displayMe[i] + '" aria-label="' + titleMe[i] + '"></a></li>');
  }
console.log(data);
}

function watchSubmit() {
  $('.search-form').submit(function(event) {
    event.preventDefault(); 
    var query = $("input").val();
    getDataFromApi(query, displaySearchData);
  });
}
//console.log(watchSubmit);
$(watchSubmit);
