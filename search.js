"use strict";

 // grab everything needed from youtube sample code
 //console log results
 //after it checks out work on display and getting in thumbnails
 //make it clickable
 //search is hooked up but we need to finish the API auth first

function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyB6nskjz1y78Vvihls3vxvnfQ7wllV2yFE',
  }

  function() {
    // 3. Initialize and make the API request.
    return gapi.client.request({
      'path': 'gapi.client.youtube.search.list',
    })
  })

  function(response) {
    console.log(response.result);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  };
};
// 1. Load the JavaScript client library.
gapi.load('client', start);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function start() {
        // Initializes the client with the API key and the youtube API.
        gapi.client.init({
          'apiKey': 'AIzaSyB6nskjz1y78Vvihls3vxvnfQ7wllV2yFE',
            //https://developers.google.com/api-client-library/javascript/start/start-js - option 2
        }).then(

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
  );
}

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#results').html('<pre>' + str + '</pre>');
  });


// Loads the JavaScript client library and invokes `start` afterwards.
$('#search-button').click(

  );


function displayResults () {};




 function buildApiRequest(requestMethod, path, params) {
    params = removeEmptyParams(params);
    var request = gapi.client.request({
          'method': requestMethod,
          'path': youtube.search.list,
          'params': params
      });

  function defineRequest(toFind) {

buildApiRequest ('GET',
                '/youtube/v3/search',
                {'maxResults': '25',
                 'part': 'snippet',
                 'q': 'toFind',
                 'type': 'video'});

  }};

*/





