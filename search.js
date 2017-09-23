"use strict";

 // grab everything needed from youtube sample code
 //console log results
 //after it checks out work on display and getting in thumbnails
 //make it clickable
 //search is hooked up but we need to finish the API auth first

function start() {
        // Initializes the client with the API key and the Translate API.
        gapi.client.init({
          'apiKey': 'AIzaSyB6nskjz1y78Vvihls3vxvnfQ7wllV2yFE',
        });
}
// Search for a specified string.
function search() {
  var q = $('input').val();
  var request = gapi.client.request({
    'path': 'https://www.googleapis.com/youtube/v3/search', 
    'params': {'q': q, 'part': 'snippet'}
  })
  // var request = gapi.client.youtube.search.list({
  //   q: q,
  //   part: 'snippet'
  // }
  // );


request.execute(function(response) {
  for (var i = 0; i < response.items.length; i++){
    $('#results').append("<iframe width='420' height='315'\
                          src=https://www.youtube.com/embed/"+response.items[i].id.videoId+"> \
                          </iframe>")
  }
    // var str = JSON.stringify(response.items);
    // $('#results').html('<pre>' + str + '</pre>');
  });
}
// Loads the JavaScript client library and invokes `start` afterwards.
    
function handleLoad(){
  // 'youtube', 'v3'
  gapi.load('client', start);
}

// function displayResults () {};

$('#search-button').click( function() {
  event.preventDefault();
  search();
  var toFind = $('input').val();

// defineRequest(toFind);
// displayResults();

});


//  function buildApiRequest(requestMethod, path, params) {
//     params = removeEmptyParams(params);
//     var request = gapi.client.request({
//           'method': requestMethod,
//           'path': path,
//           'params': params
//       });

//   function defineRequest(toFind) {

// buildApiRequest ('GET',
//                 '/youtube/v3/search',
//                 {'maxResults': '25',
//                  'part': 'snippet',
//                  'q': 'toFind',
//                  'type': 'video'});

//   }};







